import type { NextPage } from "next";
import { UserBadge } from "~/components/user";

const Home: NextPage = () => {
  return (
    <div>
      <UserBadge />
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
