import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// UNIFIED PATH: client/dist
const DIST_DIR = path.join(__dirname, 'client', 'dist');
const POSTS_DIR = path.join(__dirname, 'client', 'src', 'posts');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

async function prerender() {
  // 1. Verify Build Exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Error: Build directory not found at ${DIST_DIR}`);
    console.error('Make sure to run "pnpm build" first.');
    process.exit(1);
  }

  // 2. Read the template (index.html)
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Error: Template not found at ${TEMPLATE_PATH}`);
    process.exit(1);
  }
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  // 3. Find Posts
  if (!fs.existsSync(POSTS_DIR)) {
     console.error(`Error: Posts directory not found at ${POSTS_DIR}`);
     process.exit(1);
  }
  const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
  console.log(`Found ${files.length} posts to prerender...`);

  // 4. Generate Static Files
  for (const file of files) {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(content);
    const slug = file.replace('.md', '');
    
    // Create directory: client/dist/post/{slug}
    const postDir = path.join(DIST_DIR, 'post', slug);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }

    // Fix Image URL
    let imageUrl = data.image || 'https://substratesm.com/images/default-og.jpg';
    if (imageUrl && imageUrl.startsWith('/' )) {
      imageUrl = `https://substratesm.com${imageUrl}`;
    }

    // Inject Meta Tags
    let html = template;
    html = html.replace(/<title>.*?<\/title>/, `<title>${data.title} | Substrate SM</title>` );
    
    const metaTags = `
    <meta property="og:title" content="${data.title}" />
    <meta property="og:description" content="${data.description || data.subtitle || ''}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="https://substratesm.com/post/${slug}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${data.title}" />
    <meta name="twitter:description" content="${data.description || data.subtitle || ''}" />
    <meta name="twitter:image" content="${imageUrl}" />
    `;
    
    html = html.replace('</head>', `${metaTags}</head>` );
    fs.writeFileSync(path.join(postDir, 'index.html'), html);
    console.log(`✅ Generated: client/dist/post/${slug}/index.html`);
  }
  console.log('🎉 Prerendering complete!');
}

prerender();
