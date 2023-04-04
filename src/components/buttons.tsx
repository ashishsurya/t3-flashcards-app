/* eslint-disable @typescript-eslint/no-misused-promises */
import { signIn } from "next-auth/react";

export const SocialMediaLoginButton = ({
  provider,
  helperText,
}: {
  provider: "discord" | "twitter";
  helperText: string;
}) => {
  const login = async () => {
    await signIn(provider, { redirect: true, callbackUrl: "/" });
  };

  return (
    <div className="">
      <button
        onClick={login}
        className="rounded-md bg-white px-6 py-2 font-semibold capitalize tracking-wide text-black"
      >
        Sign in with {provider}
      </button>
      <p className="font-mono text-xs">{helperText}</p>
    </div>
  );
};
