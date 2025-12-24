# Deployment Guide for manojthedev.com

## Option 1: Deploy to Vercel (Recommended for Next.js)

Vercel is the easiest and most optimized platform for Next.js applications.

### Step 1: Prepare Your Project

1. **Ensure your project builds successfully:**
   ```bash
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm run start
   ```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI (optional but recommended):**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your project:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask if you want to link to an existing project or create a new one
   - Choose your settings

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Step 3: Connect Your Domain (manojthedev.com)

1. **Go to Vercel Dashboard:**
   - Visit [vercel.com](https://vercel.com)
   - Navigate to your project
   - Go to **Settings** → **Domains**

2. **Add your domain:**
   - Enter `manojthedev.com`
   - Also add `www.manojthedev.com` (optional but recommended)

3. **Configure DNS:**
   Vercel will provide you with DNS records to add:
   - **A Record** or **CNAME Record** pointing to Vercel's servers
   - Add these records in your domain registrar (where you bought manojthedev.com)

4. **Wait for DNS propagation:**
   - Usually takes 5-30 minutes
   - Vercel will automatically provision SSL certificates

### Alternative: Deploy via GitHub

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

---

## Option 2: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

4. **Add domain in Netlify dashboard**

---

## Option 3: Deploy to Other Platforms

### AWS Amplify / CloudFront
- Good for enterprise setups
- More complex configuration

### DigitalOcean App Platform
- Simple deployment
- Good pricing

### Self-hosted (VPS)
- Requires server management
- More control but more maintenance

---

## Pre-Deployment Checklist

- [ ] Test `npm run build` successfully
- [ ] Test `npm run start` locally
- [ ] Verify all images are in `/public` folder
- [ ] Check all external links work
- [ ] Verify resume PDF is accessible
- [ ] Test on mobile devices
- [ ] Check all social media links
- [ ] Verify contact information is correct
- [ ] Test "Download CV" button

---

## Post-Deployment

1. **Verify SSL Certificate:**
   - Your site should automatically have HTTPS
   - Check `https://manojthedev.com`

2. **Test All Features:**
   - Navigation
   - Download CV
   - External project links
   - Social media links

3. **Performance:**
   - Check Google PageSpeed Insights
   - Optimize images if needed

4. **SEO:**
   - Submit sitemap to Google Search Console
   - Verify meta tags are correct

---

## Troubleshooting

### Build Errors
- Check Node.js version (should be 18+)
- Clear `.next` folder and rebuild
- Check for missing dependencies

### Domain Not Working
- Wait for DNS propagation (can take up to 48 hours)
- Verify DNS records are correct
- Check domain registrar settings

### Images Not Loading
- Ensure all images are in `/public` folder
- Use relative paths starting with `/`
- Check file names (case-sensitive)

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

