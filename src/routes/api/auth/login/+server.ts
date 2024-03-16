import { BASE_URL } from "$env/static/private";
import { redirect, type RequestHandler } from "@sveltejs/kit";
import pkce from "pkce-gen";

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

export const GET: RequestHandler = ({ cookies }) => {
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
