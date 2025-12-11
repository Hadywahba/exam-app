"use client"

import { Pie, PieChart } from "recharts"


import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CorrectAnswers } from "@/components/providers/app/components/correct-answer.provider"
import { useContext } from "react"



// ============ الـ Component ==============

export function AnswerChart() {
      // context
      const { answers } = useContext(CorrectAnswers)!;
      // ======== الداتا بعد التعديل ==========

 const chartData = [
    { type: "Correct", value: answers?.correct ?? 0, fill: "#00BC7D" },
    { type: "Incorrect", value: answers?.wrong ?? 0, fill: "#EF4444" },
  ];
// ======== config الخاص بالـ Chart ========

const chartConfig = {
  correct: {
    label: "Correct",
    color: "#00BC7D",
  },
  incorrect: {
    label: "Incorrect",
    color: "#EF4444",
  },
} satisfies ChartConfig
      console.log(answers?.correct)
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[203px] w-[203px]"
        >
          <PieChart width={203} height={203}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  />}
            />

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="type"
              innerRadius={50}
              outerRadius={85}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>

     <CardFooter className="flex flex-col items-start  gap-3 text-sm px-6">
  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-sm bg-[#22c55e]" /> 
    <span className="font-medium text-sm text-black">Correct: {answers?.correct}</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="w-4 h-4 rounded-sm bg-[#ef4444]" /> 
    <span className="font-medium text-sm text-black">Incorrect: {answers?.wrong}</span>
  </div>
</CardFooter>

    </Card>
  )
}
