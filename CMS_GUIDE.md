# How to Manage Your Blog with Decap CMS

This guide explains how to connect your new blog to a free "Headless CMS" so you can write posts without touching code.

## 1. The Setup (One-Time Only)

Since this is a static site, we need a place to host it and a way to log in. We will use **Netlify** because it is free and has built-in support for this CMS.

### Step A: Put Your Code on GitHub
1.  Create a free account at [GitHub.com](https://github.com).
2.  Create a new repository named `my-blog`.
3.  Upload the files I gave you to this repository.

### Step B: Connect to Netlify
1.  Create a free account at [Netlify.com](https://netlify.com).
2.  Click **"Add new site"** → **"Import an existing project"**.
3.  Select **GitHub** and choose your `my-blog` repository.
4.  Netlify will detect the settings automatically. Click **"Deploy Site"**.

### Step C: Enable Identity (Login)
1.  In your Netlify dashboard, go to **"Site Settings"** → **"Identity"** → **"Enable Identity"**.
2.  Scroll down to **"Registration"** and select **"Invite only"** (so random people can't sign up).
3.  Scroll down to **"Services"** → **"Git Gateway"** and click **"Enable Git Gateway"**.

### Step D: Create Your User
1.  Go to the **"Identity"** tab at the top.
2.  Click **"Invite users"** and enter your own email address.
3.  Check your email, click the link, and set your password.

---

## 2. How to Write Posts (Daily Use)

Now that you are set up, you never need to touch the code again.

1.  Go to `your-site-name.netlify.app/admin`.
2.  Login with your email and password.
3.  You will see a dashboard listing all your posts.
    *   **To Create:** Click "New Blog Post".
    *   **To Edit:** Click on any existing title.
4.  Write your content. You can upload images directly in the editor.
5.  Click **"Publish"**.

That's it! Netlify will automatically rebuild your site (takes about 30 seconds) and your new post will be live.

---

## 3. Advanced Features

### Readership Analytics (Google Analytics)
To see how many people are reading your posts:
1.  Create a free account at [analytics.google.com](https://analytics.google.com).
2.  Create a "Property" for your blog.
3.  Google will give you a "Measurement ID" (starts with `G-`).
4.  Open the file `client/index.html` in your GitHub repository.
5.  Find the section marked `<!-- Google Analytics Placeholder -->`.
6.  Uncomment the code and replace `YOUR-GA-ID` with your actual ID.

### Private Feedback
I have added a "Send Private Note" form to the bottom of every post.
*   **Where do messages go?** They go to your Netlify Dashboard.
*   **How to view them:** Go to **Netlify** → **Forms**.
*   **Get Email Alerts:** In Netlify, go to **Site Settings** → **Forms** → **Form Notifications** and add your email address. You will get an email every time someone sends a note.
