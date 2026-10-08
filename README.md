# Xorvin Portfolio

This Next.js site is exported as static files for Cloudflare Pages. `npm run build` creates the deployable site in `out/`.

## Cloudflare Pages settings

In **Workers & Pages → xorvinweb → Settings → Builds & deployments**, set:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | repository root |

Save the settings and redeploy the latest commit. The deployment log should run `next build`, and the uploaded output should include `out/index.html`. A deployment that says “No build command specified. Skipping build step” will upload source files and return 404 at `/`.
