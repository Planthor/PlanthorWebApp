import { BASE_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import pkce from "pkce-gen";
import type { RequestHandler } from "./$types";

const generateRandomString = (length: number) => {
  let randomString = "";
  const possibleChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    randomString += possibleChars.charAt(
      Math.floor(Math.random() * possibleChars.length)
    );
  }
  return randomString;
};

const state = generateRandomString(16);
const challenge = pkce.create();
const scope = "openid";
const opts = { httpOnly: true, path: "/" };

export const GET: RequestHandler = ({ cookies }) => {
  cookies.set("planthor_auth_state", state, opts);
  cookies.set(
    "planthor_auth_challenge_verifier",
    challenge.code_verifier,
    opts
  );

  throw redirect(
    307,
    `https://localhost:5001/connect/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: "planthor",
      scope,
      redirect_uri: `${BASE_URL}/api/auth/callback`,
      state,
      code_challenge_method: "S256",
      code_challenge: challenge.code_challenge,
    })}`
  );
};
