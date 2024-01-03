import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { ComponentProps, ReactNode } from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
type CalendarProps = ComponentProps<typeof Calendar>;

export const PopoverCalendar = (props: CalendarProps) => {
  return (
    <Popover>
      {/* PopoverTriggerが期待する子要素の型とは一致しない場合
          asChildを指定することで、子要素のクローンを作成してプロパティを上書きし
          エラーを回避できる
       */}
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          {props.selected
            ? format(props.selected as Date, "PPP")
            : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar {...props} />
      </PopoverContent>
    </Popover>
  );
};
