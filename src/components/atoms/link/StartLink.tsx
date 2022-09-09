import Link from "next/link";

type StartProps = {
  gameType: string;
};

const StartLink = (props: StartProps) => {
  const { gameType } = props;
  return (
    <Link href={"/" + gameType}>
      <h1 className="text-6xl mb-20 sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">
        {gameType}
      </h1>
    </Link>
  );
};

export default StartLink;
