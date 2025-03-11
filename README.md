# Steps to reproduction

```bash
cd sveltekit-paraglide-prerender-bug

npm i

npm run deploy:stage

```

Go to http://127.0.0.1:5173

You might be required to delete server.allowedHosts from vite.config.ts for this to work (this was requirement specific to the dev environment of the author)
