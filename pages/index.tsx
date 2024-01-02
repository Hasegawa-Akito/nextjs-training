import { CalendarUI } from "@/components/shadcn/CalendarUI";
import { Button } from "@/components/ui/button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleButton = () => {
    console.log("click");
  };
  return (
    <div>
      <CalendarUI />
      <div>
        <Button onClick={handleButton}>登録</Button>
      </div>
    </div>
  );
};

export default Home;
