"use client";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
const sidebarNavItems = [
  {
    title: "CrackDsa",
    value: 0,
  },
  {
    title: "Technical Sub Council HBTU",
    value: 1,
  },
];

const experience = [
  {
    title: "Software Developer Engineer",
    date: "Jan 2025 - Current ",
    company: "Samsung",
    responsibilities: [
      "Performed hyperparameter tuning on a deep neural network model by optimizing 5 key parameters - learning rate, optimizer, number of layers, number of epochs, and dropout rate resulting in a significant 9% increase in accuracy",
      "Executed data pre-processing and feature selection by carefully retaining the top 60% (30 out of 50) top features, optimizing them to significantly enhance model performance and prediction accuracy by 15 percentage point",
      "Created deep learning model achieving 87% accuracy through effective architecture design and efficient optimization",
    ],
  },
  {
    title: "Teaching Assistant",
    date: "Jan 2024 - April 2024",
    company: "TLE Eliminators",
    responsibilities: [
      "Collaborated closely with over 50 students in the TLE Eliminator program, providing timely assistance and clear explanations for queries related to Data Structures and Algorithms and Competitive Programming challenges",
      "Solved 500+ queries with detailed explanations, while promoting an engaging and collaborative learning environment",
    ],
  },
];

export default function SettingsLayout() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <div className="sm:my-36 space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <nav
              className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
              )}
            >
              {sidebarNavItems.map((item) => (
                <button
                  onClick={() => setActiveTab(item.value)}
                  key={item.value}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    activeTab === item.value
                      ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",
                    "justify-start"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <div className="mb-4">
              <p className="text-lg font-bold">{experience[activeTab].title}</p>
              <p className="text-sm text-gray-500">
                {experience[activeTab].date}
              </p>
              <ul className="list-disc pl-6 mt-5">
                {experience[activeTab].responsibilities.map(
                  (responsibility, idx) => (
                    <li className="my-5" key={idx}>
                      {responsibility}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
