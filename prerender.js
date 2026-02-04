import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, 'client/src/posts');
const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'public', 'index.html');

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist directory not found. Run "pnpm build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));

  console.log(`Found ${files.length} posts to prerender...`);

  for (const file of files) {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
    const { data } = matter(content);
    const slug = file.replace('.md', '');
    
    // Create directory structure: dist/public/post/{slug}/index.html
    const postDir = path.join(DIST_DIR, 'public', 'post', slug);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }

    // Replace meta tags in template
    let html = template;
    
    // Title
    html = html.replace(
      /<title>.*?<\/title>/, 
      `<title>${data.title} | The Minimalist Reader</title>`
    );
    
    // Open Graph / Social Tags
    const metaTags = `
    <meta property="og:title" content="${data.title}" />
    <meta property="og:description" content="${data.description || data.subtitle || ''}" />
    <meta property="og:image" content="${data.image || 'https://substratesm.com/images/default-og.jpg'}" />
    <meta property="og:url" content="https://substratesm.com/post/${slug}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    `;
    
    // Inject into <head>
    html = html.replace('</head>', `${metaTags}</head>` );

    fs.writeFileSync(path.join(postDir, 'index.html'), html);
    console.log(`Generated static page for: ${slug}`);
  }
  
  console.log('Prerendering complete!');
}

prerender();
