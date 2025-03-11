<script lang="ts">
    import { languageTag } from "$lib/paraglide/runtime";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData
  }

  const {data}:Props = $props()

    console.log('component init tag:', languageTag())
</script>
<pre>1. Run `npm run build && node build`</pre>
<pre>2. Go directly to http://YOUR_DOMAIN:YOUR_PORT/ro</pre>
<pre>3. Tag from load function should be 'ro', not the default language 'en'</pre>
<pre>4. You might be required to delete server.allowedHosts from vite.config.ts for this to work (this was requirement specific to the dev environment of the author)</pre>
<pre>Results:</pre>
<pre>tagFromLoadFunction: <strong>{data.tagFromLoad}</strong></pre>
<pre>tagFromSvelteComponentInitialization: <strong>{languageTag()}</strong></pre>
