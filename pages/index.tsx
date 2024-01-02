import { CalendarUI } from "@/components/shadcn/CalendarUI";
import { FormUI } from "@/components/shadcn/FormUI";
import { Button } from "@/components/ui/button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleButton = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button onClick={handleButton}>登録</Button>
      </div>
      <FormUI />
    </div>
  );
};

export default Home;
