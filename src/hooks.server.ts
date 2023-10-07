import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { locals, cookies, url } = event;

  if (!url.pathname.startsWith("/api")) {
    const token = cookies.get("token");
    locals.user = token ? { name: "Phat", id: 1 } : undefined;
  }

  const response = await resolve(event);

  return response;
};
