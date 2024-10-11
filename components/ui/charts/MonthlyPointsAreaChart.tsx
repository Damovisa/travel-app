'use client';
import React from 'react';
import { CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

import { Suspense } from 'react';

interface MonthlyPointsAreaChartProps {
    data: Array<{ month: string; points: number }>
}

export default function MonthlyPointsAreaChart({ data }: MonthlyPointsAreaChartProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Card>
                <CardHeader>
                    <CardTitle>Monthly Points Activity</CardTitle>
                    <CardDescription>Track your points over the months</CardDescription>
                </CardHeader>
                <CardContent>
                    <AreaChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="points" stroke="#8884d8" fillOpacity={1} fill="url(#colorPoints)" />
                    </AreaChart>
                </CardContent>
            </Card>
        </Suspense>
    );
}
