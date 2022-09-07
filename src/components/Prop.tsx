// propsで渡される値が変こすると再描画される

type ChildrenProps = {
  text: string;
};

const Prop = (props: ChildrenProps) => {
  const { text } = props;
  console.log("再描画");
  return <div>{text}</div>;
};

export default Prop;
