import { languageTag } from "$lib/paraglide/runtime";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ depends }) => {
  depends("paraglide:lang");

  console.log("load function languageTag:", languageTag());

  return {
    tagFromLoad: languageTag(),
  };
};
