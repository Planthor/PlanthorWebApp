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

export const GET: RequestHandler= ({cookies})=>{
  throw redirect(307,"https://localhost:5001/Account/Login")

}
