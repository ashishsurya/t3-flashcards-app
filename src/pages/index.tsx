import type { NextPage } from "next";
import { CreateNewDeckFAB } from "~/components/buttons";
import { UserBadge } from "~/components/user";

const Home: NextPage = () => {
  return (
    <div>
      <UserBadge />
      <CreateNewDeckFAB />
    </div>
  );
};

export default Home;
