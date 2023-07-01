import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals = "test";
  return resolve(event);
};
