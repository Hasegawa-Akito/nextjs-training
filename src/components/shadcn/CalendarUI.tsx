import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export const CalendarUI = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar selected={date} onSelect={setDate} mode="single" />;
};
