# Launch Guide: The Minimalist Reader

This guide will take you from "files on a computer" to a live website that you can manage easily. You do not need to know how to code to follow these steps.

## Phase 1: Get Your Code Online

We need to put your website files in a place where the internet can see them. We will use **GitHub** (to store the code) and **Netlify** (to show the website). Both are free.

### Step 1: Download Your Files
1.  In the Manus chat, look for the "Download" button or link for the project files I just sent you.
2.  Unzip the folder on your computer. You should see a folder named `my-blog`.

### Step 2: Put Code on GitHub
1.  Go to [GitHub.com](https://github.com) and sign up for a free account.
2.  Click the **+** icon in the top right and select **"New repository"**.
3.  Name it `my-blog`.
4.  Select **"Public"**.
5.  Click **"Create repository"**.
6.  **Upload your files:**
    *   On the next screen, look for the link that says **"uploading an existing file"**.
    *   Drag and drop *all* the files from your `my-blog` folder into the browser window.
    *   Wait for them to upload, then click the green **"Commit changes"** button.

## Phase 2: Publish the Website

Now we will turn that code into a real website.

### Step 3: Connect to Netlify
1.  Go to [Netlify.com](https://netlify.com) and sign up (you can "Sign up with GitHub" to make it easy).
2.  Once logged in, click **"Add new site"** → **"Import an existing project"**.
3.  Click the **GitHub** button.
4.  A window will pop up asking for permission. Click "Authorize Netlify".
5.  Select your `my-blog` repository from the list.
6.  **Important Settings:**
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `client/dist`
7.  Click **"Deploy Site"**.

*Netlify will now build your site. It might take 1-2 minutes. Once it says "Published" (in green), your site is live!*

## Phase 3: Enable the "Admin Panel" (CMS)

This step lets you write blog posts without touching code.

### Step 4: Turn on Identity
1.  In your Netlify dashboard, click on your site.
2.  Click **"Site Settings"** (top menu).
3.  Click **"Identity"** (left menu) → then click **"Enable Identity"**.
4.  Scroll down to **"Registration"** and select **"Invite only"**. (This prevents strangers from creating accounts on your site).
5.  Scroll down to **"Services"** → **"Git Gateway"** → click **"Enable Git Gateway"**.

### Step 5: Create Your Account
1.  Click the **"Identity"** tab at the very top of the page.
2.  Click **"Invite users"**.
3.  Enter your own email address and send the invite.
4.  Check your email. Click the link to accept the invite.
5.  It will ask you to create a password. **Do this.**

**🎉 You are done!**
To write a post, go to: `https://YOUR-SITE-NAME.netlify.app/admin`
Log in with your email and password.

---

## Phase 4: Advanced Features (Optional)

### How to Check Readership (Google Analytics)
1.  Go to [analytics.google.com](https://analytics.google.com) and create a free account.
2.  Create a property for your blog. Google will give you a code that looks like `G-XXXXXXXX`.
3.  Go back to **GitHub**.
4.  Open the file `client/index.html`.
5.  Click the pencil icon (✏️) to edit.
6.  Find the lines I marked `<!-- Google Analytics Placeholder -->`.
7.  Delete the `<!--` and `-->` to "uncomment" the code.
8.  Replace `YOUR-GA-ID` with your actual code (e.g., `G-12345678`).
9.  Click **"Commit changes"**. Netlify will update your site automatically.

### How to Check Feedback
When someone uses the "Send Private Note" form on your site:
1.  Go to your **Netlify Dashboard**.
2.  Click on the **"Forms"** tab.
3.  You will see a list of all messages sent to you.
4.  **To get email alerts:** Go to **Site Settings** → **Forms** → **Form Notifications** and add your email.
