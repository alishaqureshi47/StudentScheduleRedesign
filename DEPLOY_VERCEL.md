Deploying to Vercel

Two ways to deploy: via GitHub (recommended) or using the Vercel CLI.

1) Quick GitHub integration (recommended)
- Push your repo to GitHub.
- Go to vercel.com, sign in, and Import Project -> Select the GitHub repo.
- Set the Build Command to: npm run build
- Set the Output Directory to: dist
- Optionally set Environment Variables if your app needs them.
- Vercel will build and deploy on every push to the selected branch.

2) Deploy with the Vercel CLI (manual)
- Install the CLI if you don't have it:

  npm i -g vercel

- From your project root run:

  vercel login
  vercel --prod

- The CLI will ask for project name and settings (use the defaults). It detects the build command and output dir from package.json and vercel.json.

Notes
- The project is a static site built with Vite. The production build outputs to `dist/`.
- The included `vercel.json` forces routing to `index.html` which is useful if you rely on client-side routing.
- If you prefer automatic deploys, connect the repo on Vercel and pick your default branch.
