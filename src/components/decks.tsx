import { api } from "~/utils/api";
import { LoadingSpinner } from "./loading";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

dayjs.extend(relativeTime);

export const DecksWrapper = () => {
  return (
    <div className="min-h-screen px-4 md:px-16">
      <h2 className="pt-40 text-3xl font-bold tracking-tighter ">
        All your decks, 👇
      </h2>
      <Decks />
    </div>
  );
};

export const Decks = () => {
  const { data: decks, isLoading } = api.deck.getDecks.useQuery();
  const router = useRouter();



  const handleDeckClick = useCallback((deckId: string) => {
    console.log("DECK CLICKED");
    router.push(`/d/${deckId}`);
  }, [router]);



  if (isLoading) return <LoadingSpinner size={50} />;
  if (!decks) return <div>Something went wrong.....</div>;
  if (decks.length === 0) return <div>No decks create some.....</div>;

  return (
    <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {decks.map((deck) => {
        return (
          <li key={deck.id} onClick={() => handleDeckClick(deck.id)}>
            <div className="flex h-48 cursor-pointer flex-col items-start rounded-lg border border-slate-600 bg-black p-4 hover:border-white">
              <p className="font-bold tracking-tight">{deck.title}</p>
              <p className="flex-1 text-sm">
                {" "}
                {deck._count.flashcards} flashcard(s) inside.
              </p>
              <p className="text-xs text-[#888]">
                {dayjs(deck.createdAt).fromNow()}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
