import { api } from "~/utils/api";
import { LoadingSpinner } from "./loading";

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
  const { data, isLoading } = api.deck.getDecks.useQuery();

  if (isLoading) return <LoadingSpinner size={50} />;
  if (!data) return <div>Something went wrong.....</div>;
  if (data.length === 0) return <div>No decks create some.....</div>;

  return (
    <div>
      {data.map((deck) => {
        return <li key={deck.id}>{deck.title}</li>;
      })}
    </div>
  );
};
