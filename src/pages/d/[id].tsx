/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LoadingSpinner } from "~/components/loading";
import { api } from "~/utils/api";

const DeckPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== "string") return null;

  const { data, error, isLoading } = api.deck.getDeckById.useQuery({ id });
  console.log({ data, error, isLoading });
  if (error) return <div>something went wrong</div>;
  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingSpinner size={80} />
      </div>
    );

  if (!data) return null;


  return (
    <div>
      <h1>Deck Page : {id}</h1>
    </div>
  );
};

export default DeckPage;
