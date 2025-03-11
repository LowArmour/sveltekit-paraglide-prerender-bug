# Steps to reproduction

```bash
git clone https://github.com/LowArmour/sveltekit-paraglide-prerender-bug.git

cd sveltekit-paraglide-prerender-bug

npm i

npm run deploy:stage
```

Go to http://127.0.0.1:5173/ro

The languageTag from load function should be 'ro', not 'en'

You might be required to delete server.allowedHosts from vite.config.ts for this to work (this was requirement specific to the dev environment of the author)
