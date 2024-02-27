import { GetStaticProps } from "next";

type SSGProps = {
  message: string;
};

const SSG = (props: SSGProps) => {
  return <h1>{props.message}</h1>;
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `時刻は${timestamp}です`;
  console.log(message);

  return {
    props: {
      message: message,
    },
  };
};

export default SSG;
