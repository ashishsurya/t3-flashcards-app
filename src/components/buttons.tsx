/* eslint-disable @typescript-eslint/no-misused-promises */
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { signIn, signOut } from "next-auth/react";
import { useCallback } from "react";

export const SocialMediaLoginButton = ({
  provider,
  helperText,
}: {
  provider: "discord";
  helperText: string;
}) => {
  const login = useCallback(async () => {
    await signIn(provider, { redirect: true, callbackUrl: "/" });
  }, [provider]);

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

export const LogoutButton = () => {
  const handleLogout = useCallback(async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  }, []);

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center justify-center space-x-3 rounded-lg bg-red-500 py-3 font-medium tracking-tight text-white"
    >
      <p>Sign out</p>
      <ArrowLeftOnRectangleIcon className="h-7 w-7" />
    </button>
  );
};
