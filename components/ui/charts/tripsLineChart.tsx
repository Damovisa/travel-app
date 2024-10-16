'use client';
import React from 'react';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card"
import {
    ChartTooltip,
    ChartTooltipContent,
    ChartContainer,
    ChartConfig
} from "@/components/ui/chart"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

import { Suspense } from 'react';

interface TripData {
    name: string;
    uv: number;
}

export default function TripsLineChart({ tripData }: { tripData: TripData[] }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
                <CardContent>
                <h2>Random Chart</h2>
                    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                        <LineChart data={tripData} margin={{
                            top: 20,
                            right: 20,
                            left: 20,
                            bottom: 10
                        }}>
                            <CartesianGrid vertical={false} />
                            <XAxis dataKey="name" />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="uv"
                                type="natural"
                                stroke="var(--color-desktop)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    Showing some sample data generated by Copilot i have no idea what it is
                </CardFooter>
         
        </Suspense>
    );
}
