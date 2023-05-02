import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { CreateNewDeckFAB } from "~/components/buttons";
import { DecksWrapper } from "~/components/decks";
import { LoadingSpinner } from "~/components/loading";
import { CreateNewDeck, ForceLogin } from "~/components/modals";
import { UserBadge } from "~/components/user";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Home: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  const deckId = router.query.deckId;

  console.log(deckId);

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
      <div className={plus_jakarta_sans.className}>
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
