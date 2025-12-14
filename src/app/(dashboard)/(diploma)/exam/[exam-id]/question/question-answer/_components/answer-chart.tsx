'use client';

import { Pie, PieChart } from 'recharts';

import { Card, CardContent, CardFooter } from '@/components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CorrectAnswers } from '@/components/providers/app/components/correct-answer.provider';
import { useContext } from 'react';

export function AnswerChart() {
  // context
  const { answers } = useContext(CorrectAnswers)!;

  // Constant
  const chartData = [
    { type: 'Correct', value: answers?.correct ?? 0, fill: '#00BC7D' },
    { type: 'Incorrect', value: answers?.wrong ?? 0, fill: '#EF4444' },
  ];

  const chartConfig = {
    correct: {
      label: 'Correct',
      color: '#00BC7D',
    },
    incorrect: {
      label: 'Incorrect',
      color: '#EF4444',
    },
  } satisfies ChartConfig;
 
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[203px] w-[203px]"
        >
          <PieChart width={203} height={203}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

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

      <CardFooter className="flex flex-col items-start gap-3 px-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-sm bg-[#22c55e]" />
          <span className="text-sm font-medium text-black">
            Correct: {answers?.correct}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-sm bg-[#ef4444]" />
          <span className="text-sm font-medium text-black">
            Incorrect: {answers?.wrong}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
