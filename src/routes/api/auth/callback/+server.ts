import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { BASE_URL } from "$env/static/private";

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
  const code = url.searchParams.get("code") || null;
  const state = url.searchParams.get("state") || null;

  const storedState = cookies.get("planthor_auth_state") || null;
  const storedChallengeVerifier =
    cookies.get("planthor_auth_challenge_verifier") || null;

  if (state === null || state !== storedState) {
    throw error(302, "State Mismatch!");
  }

  const response = await fetch("https://localhost:5001/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code: code || "",
      redirect_uri: `${BASE_URL}/api/auth/callback`,
      grant_type: "authorization_code",
      code_verifier: storedChallengeVerifier || "",
      client_id: "planthor",
      client_secret: "Planthor@123",
    }),
  });

  const responseJSON = await response.json();
  console.log(responseJSON)
  if (responseJSON.error) {
    throw error(400, responseJSON.error_description);
  }

  cookies.delete("planthor_auth_state", { path: "/" });
  cookies.delete("planthor_auth_challenge_verifier", { path: "/" });
  cookies.set("id_token", responseJSON.id_token, { path: "/" });
  cookies.set("access_token", responseJSON.access_token, { path: "/" });

  throw redirect(301, "/");
};
