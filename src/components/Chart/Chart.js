"use client";

import { clsx } from "@/utils/common";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1月", uv: 4000, pv: 2400 },
  { name: "2月", uv: 3000, pv: 1398 },
  { name: "3月", uv: 2000, pv: 9800 },
  { name: "4月", uv: 2780, pv: 3108 },
  { name: "5月", uv: 1890, pv: 3208 },
  { name: "6月", uv: 1860, pv: 3308 },
  { name: "7月", uv: 1290, pv: 3408 },
  { name: "8月", uv: 1390, pv: 3508 },
  { name: "9月", uv: 1590, pv: 3608 },
  { name: "10月", uv: 1690, pv: 3208 },
  { name: "11月", uv: 1790, pv: 3108 },
  { name: "12月", uv: 1990, pv: 3008 },
];

export default function Chart({ className, aspect = 589 / 294 }) {
  return (
    <div
      className={clsx(
        "bg-ds-dark-600 py-[6px] pl-[54px] pr-[98px]",
        className
      )}
    >
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#fff" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#FFCC21"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8FE9D0"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
