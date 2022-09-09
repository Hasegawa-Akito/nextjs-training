import { NextPage } from "next";
import { useRouter } from "next/router";

const Hook: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default Hook;
