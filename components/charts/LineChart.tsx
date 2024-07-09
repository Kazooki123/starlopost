/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5MvOFLO8JIa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import { ClassAttributes, HTMLAttributes, JSX, SVGProps } from "react";

export default function LineCharts() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LineChartIcon className="h-6 w-6 text-primary" />
          <h2 className="text-lg font-semibold">StarloPost Analytics</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Today
          </Button>
          <Button variant="outline" size="sm">
            This Week
          </Button>
          <Button variant="outline" size="sm">
            This Month
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <LinechartChart className="aspect-[9/4]" />
        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col items-start">
            <span className="text-muted-foreground">Visitors</span>
            <span className="text-2xl font-semibold">3,456</span>
            <span className="text-green-500">+5.2%</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-muted-foreground">Page Views</span>
            <span className="text-2xl font-semibold">12,345</span>
            <span className="text-red-500">-2.1%</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-muted-foreground">Bounce Rate</span>
            <span className="text-2xl font-semibold">42.3%</span>
            <span className="text-green-500">-1.5%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LineChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function LinechartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
