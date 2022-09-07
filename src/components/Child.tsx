// propsでstateを変更する関数受け取り

type ChildrenProps = {
  text: string;
  setText: (id: string) => void;
};

const Child = (props: ChildrenProps) => {
  const { text, setText } = props;
  return <div onClick={() => setText("second")}>{text}</div>;
};

export default Child;
