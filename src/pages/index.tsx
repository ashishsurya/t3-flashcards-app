import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { CreateNewDeckFAB } from "~/components/buttons";
import { DecksWrapper } from "~/components/decks";
import { LoadingSpinner } from "~/components/loading";
import { CreateNewDeck, ForceLogin } from "~/components/modals";
import { UserBadge } from "~/components/user";

const Home: NextPage = () => {
  const { data, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size={80} />
      </div>
    );
  } else if (status === "unauthenticated") {
    return <ForceLogin />;
  } else {
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
  }
};

export default Home;
