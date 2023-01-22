import clsx from "clsx";
import dayjs from "dayjs";
import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { generateProgressPercentage } from "../utils/generate-progress-percentage";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BEETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {
  date: Date;
  amount?: number;
  completed?: number;
}

export function HabitDay({
  amount = 0,
  date,
  completed = 0,
  ...rest
}: HabitDayProps) {

  const amountAccomplishedPorcentage = amount > 0 ? generateProgressPercentage(amount, completed) : 0;

  const today = dayjs().startOf('day').toDate();
  const ifCurrentDay = dayjs(date).isSame(today, 'day');

  return (
    <TouchableOpacity
     {...rest}
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: amountAccomplishedPorcentage === 0,
        ["bg-violet-900 border-violet-700"]: amountAccomplishedPorcentage > 0 && amountAccomplishedPorcentage < 20,
        ["bg-violet-800 border-violet-600"]: amountAccomplishedPorcentage >= 20 && amountAccomplishedPorcentage < 40,
        ["bg-violet-700 border-violet-500"]: amountAccomplishedPorcentage >= 40 && amountAccomplishedPorcentage < 60,
        ["bg-violet-600 border-violet-500"]: amountAccomplishedPorcentage >= 60 && amountAccomplishedPorcentage < 80,
        ["bg-violet-500 border-violet-400"]: amountAccomplishedPorcentage >= 80,
        ["bg-border-white border-4"]: ifCurrentDay,
      })}
      style={{
        width: DAY_SIZE,
        height: DAY_SIZE,
      }}
      activeOpacity={0.7}
    />      
  )
}