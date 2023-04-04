/* eslint-disable @typescript-eslint/no-misused-promises */
import { Menu, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";
import { LoadingSpinner } from "./loading";
import { LogoutButton } from "./buttons";

export const UserBadge = () => {
  const { data: session } = useSession();

  return (
    <Menu as="div" className={"absolute right-10 top-10 "}>
      {!session || !session.user ? (
        <LoadingSpinner />
      ) : (
        <>
          <Menu.Button
            className={
              "flex items-center  justify-between  rounded-lg py-2 !text-black md:gap-4 md:bg-white md:px-4"
            }
          >
            <p className="hidden font-light  md:inline-flex">
              {session.user?.name}
            </p>
            <Image
              src={session.user?.image || ""}
              alt=""
              className="h-10 w-10 rounded-full"
              width={40}
              height={40}
            />
          </Menu.Button>
        </>
      )}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={"absolute right-0 mt-1 w-56 "}>
          <Menu.Item>
            <LogoutButton />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
