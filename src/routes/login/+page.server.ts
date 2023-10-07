import { fail, type Actions, redirect } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request, cookies, url, locals }) => {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    await new Promise((resoved) => setTimeout(resoved, 1000));

    if (!username) {
      return fail(400, { usernameMissing: true });
    }

    if (!password) {
      return fail(400, { passwordMissing: true });
    }

    cookies.set("token", "token_value", {
      path: "/",
    });

    locals.user = { name: "planthor", id: 1 };

    throw redirect(303, url.searchParams.get("redirectTo") || "/");
  },

  logout: ({ cookies, url, locals }) => {
    cookies.delete("token", { path: "/" });
    locals.user = undefined;
    throw redirect(303, url.searchParams.get("redirectTo") || "/");
  },
};
