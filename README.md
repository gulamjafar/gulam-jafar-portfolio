# Gulam Jafar — Resume-Based Portfolio

A responsive React + Vite portfolio updated using the details in the supplied resume.

## Run locally
1. Extract this ZIP and open the folder in VS Code.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.

## Production build
Run `npm run build`. The production website is generated in `dist`.

## Resume
The supplied PDF is included at `public/resume.pdf` and is available through the Download CV buttons.

## Before publishing
- Verify that `https://github.com/gulamjafar` is the correct GitHub profile URL. The uploaded resume showed a GitHub URL with a space, so it could not be used as written.
- Add exact repository URLs for each project if you want the project cards to open individual repositories. They currently link to the GitHub profile.
- Confirm the spelling of the college and school names as they should appear publicly.
- Project descriptions use only details stated in the resume; add more implementation details only if they accurately describe your work.

## Deploy
Push the project to GitHub, then import the repository into Vercel or Netlify. Vite's build command is `npm run build`, and the output directory is `dist`.
