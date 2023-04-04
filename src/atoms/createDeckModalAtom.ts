import { atom } from "recoil";

export const createDeckModalAtom = atom({
  key: "createDeckModalAtom",
  default: { open: false },
});
