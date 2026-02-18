# WebDevExpert

## Deploying to GitHub Pages

You **do not manually deploy a YAML file**. Instead, you push your code, and GitHub Actions runs the workflow automatically.

### 1) Keep the workflow in the correct location
The deployment workflow must be at:

- `.github/workflows/deploy.yml`

GitHub only discovers workflows from `.github/workflows/`.

### 2) Configure Pages once in GitHub
In your repository on GitHub:

- **Settings → Pages**
- Under **Build and deployment**, set **Source** to **GitHub Actions**

### 3) Push to `main`
When you push to `main`, the workflow builds `app/` and deploys `app/dist` to Pages.

### Notes
- The workflow sets `BASE_PATH=/<repo>/` so assets load correctly on project pages (`https://<user>.github.io/<repo>/`).
- For local development:

```bash
cd app
npm install
npm run dev
```
