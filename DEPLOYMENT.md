# Deployment Guide

## Render Deployment (Backend)

### Step 1: Connect Repository
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository: `https://github.com/Yashh0/grievance-portal`

### Step 2: Configure Service
- **Name**: `grievance-portal-backend`
- **Environment**: `Node`
- **Build Command**: `cd backend && npm install`
- **Start Command**: `cd backend && node server.js`

### Step 3: Environment Variables
Add these environment variables in Render dashboard:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFY_EMAIL=recipient@example.com
NODE_ENV=production
```

### Step 4: Deploy
Click "Create Web Service" and wait for deployment.

## Vercel Deployment (Frontend)

### Step 1: Connect Repository
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository

### Step 2: Configure Project
- **Framework Preset**: `Other`
- **Root Directory**: `frontend`
- **Build Command**: Leave empty (static files)
- **Output Directory**: Leave empty

### Step 3: Environment Variables
Add your backend URL:
```
REACT_APP_BACKEND_URL=https://your-render-app.onrender.com
```

### Step 4: Deploy
Click "Deploy" and wait for completion.

## Troubleshooting

### Render Issues:
- Make sure you're using the `render.yaml` file
- Check that the backend directory contains `package.json`
- Verify all environment variables are set

### Vercel Issues:
- Ensure the frontend directory is correctly specified
- Check that `index.html` is in the root of the frontend directory
- Update the `BACKEND_URL` in `script.js` after deployment

## Post-Deployment

1. Update the `BACKEND_URL` in `frontend/script.js` with your Render backend URL
2. Test the grievance submission functionality
3. Check email notifications are working
