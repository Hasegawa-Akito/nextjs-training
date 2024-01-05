import { FormUI } from "@/components/shadcn/FormUI";
import { Button } from "@/components/ui/button";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        toast
      </Button>
      <FormUI />
      <Toaster />
    </div>
  );
};

export default Home;
