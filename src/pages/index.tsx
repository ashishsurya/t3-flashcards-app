import type { NextPage } from "next";
import { CreateNewDeckFAB } from "~/components/buttons";
import { DecksWrapper } from "~/components/decks";
import { CreateNewDeck } from "~/components/modals";
import { UserBadge } from "~/components/user";

const Home: NextPage = () => {
  return (
    <div className="">
      <UserBadge />
      <CreateNewDeckFAB />
      <CreateNewDeck />
      <DecksWrapper />
    </div>
  );
};

export default Home;
