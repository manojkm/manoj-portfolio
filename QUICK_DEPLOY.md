# Quick Deployment Guide - manojthedev.com

## 🚀 Fastest Way: Deploy to Vercel (5 minutes)

### Method 1: Via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio ready for deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/manoj-portfolio.git
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/Login (free with GitHub)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Add Your Domain:**
   - After deployment, go to **Settings** → **Domains**
   - Add: `manojthedev.com`
   - Add: `www.manojthedev.com` (optional)
   - Vercel will show DNS records to add
   - Add those records in your domain registrar
   - Wait 5-30 minutes for DNS propagation

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Run `npm run build` successfully (fix any errors)
- [ ] All images are in `/public` folder
- [ ] Resume PDF is accessible
- [ ] All links work correctly
- [ ] Test on mobile devices

---

## 🔧 Fix Build Issues (if any)

If you get build errors:

1. **Clear build cache:**
   ```bash
   # Close any running dev server first
   # Then delete .next folder
   Remove-Item -Recurse -Force .next
   ```

2. **Rebuild:**
   ```bash
   npm run build
   ```

3. **If favicon error:**
   - The favicon is already configured in `layout.jsx`
   - You can delete `app/favicon.ico` if it causes issues

---

## 🌐 Domain Setup

### Where to Buy Domain:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### DNS Configuration:
Vercel will provide you with:
- **A Record**: `76.76.21.21` (or similar)
- **CNAME Record**: `cname.vercel-dns.com` (for www)

Add these in your domain registrar's DNS settings.

---

## ✅ After Deployment

1. **Test your site:**
   - Visit `https://manojthedev.com`
   - Check all pages load
   - Test "Download CV" button
   - Verify all project links work

2. **Performance:**
   - Check: https://pagespeed.web.dev/
   - Optimize if needed

3. **SEO:**
   - Submit to Google Search Console
   - Add sitemap (Vercel auto-generates)

---

## 🆘 Need Help?

- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

---

## 🎉 You're Done!

Your portfolio will be live at: **https://manojthedev.com**

