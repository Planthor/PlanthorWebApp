import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
  console.log(url);
  const code = url.searchParams.get("code") || null;
  const state = url.searchParams.get("state") || null;

  console.log(code);
  const storedState = cookies.get("planthor_auth_state") || null;
  const storedChallengeVerifier =
    cookies.get("planthor_auth_challenge_verifier") || null;

  if (state === null || state !== storedState) {
    throw error(398, "State Mismatch!");
  }
  const response = await fetch("https://localhost:4999/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  throw redirect(301, "/");
};
