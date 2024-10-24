import { goalDB } from "$components/goals";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    goalDB
  };
};