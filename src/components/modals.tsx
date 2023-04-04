/* eslint-disable @typescript-eslint/no-misused-promises */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { createDeckModalAtom } from "~/atoms/createDeckModalAtom";
import { api } from "~/utils/api";
import { LoadingSpinner } from "./loading";

export const CreateNewDeck = () => {
  const [input, setInput] = useState("");
  const ctx = api.useContext();
  const { mutateAsync, isLoading: isPosting } = api.deck.create.useMutation();
  const [newDeckModalState, setNewDeckModalState] =
    useRecoilState(createDeckModalAtom);

  const onClose = useCallback(
    () => setNewDeckModalState({ open: false }),
    [setNewDeckModalState]
  );

  const createnewDeck = useCallback(async () => {
    await mutateAsync({ title: input });
    void ctx.deck.getDecks.invalidate();
    setNewDeckModalState({ open: false });
  }, [ctx.deck.getDecks, input, mutateAsync, setNewDeckModalState]);

  return (
    <ModalLayout show={newDeckModalState.open} onClose={onClose}>
      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle text-white shadow-xl transition-all">
        <Dialog.Title
          as="h2"
          className={"text-center text-2xl font-bold tracking-tighter"}
        >
          Create a New Deck
        </Dialog.Title>
        <Dialog.Description
          as="div"
          className="flex w-full flex-col items-center space-y-4 pt-10"
        >
          <div className="w-full self-start">
            <label htmlFor="new-deck-input">
              <p className="pb-2">Deck Title : </p>
            </label>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="w-full rounded-md border border-slate-400 bg-transparent px-4  py-2 focus:outline-none"
              placeholder="Enter title of new deck"
              id="new-deck-input"
            />
          </div>
          <div className="self-end">
            <button
              onClick={onClose}
              className="bg-transparent text-red-400 hover:shadow-none"
            >
              Cancel
            </button>
            <button
              onClick={createnewDeck}
              className="!bg-black  bg-transparent  text-center hover:shadow-none"
            >
              {isPosting ? <LoadingSpinner /> : "Create"}
            </button>
          </div>
        </Dialog.Description>
      </Dialog.Panel>
    </ModalLayout>
  );
};

export const ModalLayout = ({
  children,
  show,
  onClose,
}: {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
