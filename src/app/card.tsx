"use client";

import CountUp from "react-countup";

interface CardProps {
  title: number;
  subtitle: string;
}

export default function Card({ title, subtitle }: CardProps) {
  return (
    <div className="p-4 border-b border-gray-300 m-5">
      <h1 className="text-3xl font-bold text-gray-800">
        +<CountUp start={0} end={title} duration={3} />
      </h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
  );
}
