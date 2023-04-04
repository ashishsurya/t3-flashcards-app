import type { NextPage } from "next";
import Head from "next/head";
import { CreateNewDeckFAB } from "~/components/buttons";
import { DecksWrapper } from "~/components/decks";
import { CreateNewDeck } from "~/components/modals";
import { UserBadge } from "~/components/user";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>App &middot; Flashcards</title>
      </Head>
      <UserBadge />
      <CreateNewDeckFAB />
      <CreateNewDeck />
      <DecksWrapper />
    </div>
  );
};

export default Home;
 