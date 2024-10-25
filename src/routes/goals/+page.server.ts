import { goalDB } from "$lib/goals";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    goalDB
  };
};