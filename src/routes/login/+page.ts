import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { user } = await parent();
  console.log(user);
  if (user) throw redirect(307, "/");
};
