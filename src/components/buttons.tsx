/* eslint-disable @typescript-eslint/no-misused-promises */
import { ArrowLeftOnRectangleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { signIn, signOut } from "next-auth/react";
import { JetBrains_Mono } from "next/font/google";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { createDeckModalAtom } from "~/atoms/createDeckModalAtom";

const jetBrains_Mono = JetBrains_Mono({ subsets: ["latin"] });

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
    <div className={jetBrains_Mono.className}>
      <button
        onClick={login}
        className="rounded-md bg-white px-6 py-2 font-semibold capitalize tracking-wide text-black"
      >
        Sign in with {provider}
      </button>
      <p className=" text-xs">{helperText}</p>
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
      className="flex w-full items-center justify-center space-x-3 rounded-lg bg-red-500 py-1 font-medium tracking-tight text-white"
    >
      <p>Sign out</p>
      <ArrowLeftOnRectangleIcon className="h-7 w-7" />
    </button>
  );
};

export const CreateNewDeckFAB = () => {
  const setNewDeckModalState = useSetRecoilState(createDeckModalAtom);

  const onOpen = useCallback(
    () => setNewDeckModalState({ open: true }),
    [setNewDeckModalState]
  );

  return (
    <button
      onClick={onOpen}
      type="button"
      className="absolute bottom-10 right-10  rounded-full border  p-4 text-center font-medium duration-500  hover:scale-110 hover:bg-white  hover:text-black focus:bg-white focus:text-black focus:outline-none"
    >
      <PlusIcon className="h-5 w-5 text-base" />
      <span className="sr-only">Add New Deck FAB</span>
    </button>
  );
};
