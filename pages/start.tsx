import { NextPage } from "next";
import StartLink from "../src/components/atoms/link/StartLink";

const Start: NextPage = () => {
  return (
    <section className="h-screen bg-cover bg-gray-900">
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="max-w-2xl text-center">
          <StartLink gameType="poker" />
          <StartLink gameType="mahjong" />
        </div>
      </div>
    </section>
  );
};

export default Start;
