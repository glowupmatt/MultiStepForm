"use client";

import clsx from "clsx";
import { PlanType } from "@/app/page";
import { Dispatch, SetStateAction } from "react";
import { PaymentPlanType } from "@/app/page";

type PlanSelectionProps = {
  setPlan: Dispatch<SetStateAction<PlanType>>;
  plan: PlanType;
  checked: PaymentPlanType;
};

const MonthyPlan: React.FC<PlanSelectionProps> = ({
  setPlan,
  plan,
  checked,
}) => {
  const planDataMonthly = [
    {
      id: 0,
      title: "Arcade",
      price: !checked ? "$9/mo" : "$90/year",
      img: "/images/icon-arcade.svg",
      value: !checked ? 9 : 90,
    },
    {
      id: 1,
      title: "Advanced",
      price: !checked ? "$12/mo" : "$120/year",
      img: "/images/icon-advanced.svg",
      value: !checked ? 12 : 120,
    },
    {
      id: 2,
      title: "Pro",
      price: !checked ? "$15/mo" : "$150/year",
      img: "/images/icon-pro.svg",
      value: !checked ? 15 : 150,
    },
  ];

  const onClickHandler = (info: PlanType) => {
    setPlan(info);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      {planDataMonthly.map((info, index) => {
        return (
          <button
            key={index}
            onClick={() => onClickHandler(info)}
            className={clsx(
              "flex justify-start w-full p-2 gap-3 rounded border-solid border-blue-purple border",
              {
                "border-gray-light bg-blue-pastel": plan.id === index,
                "border-blue-purple bg-white": plan.id !== index,
              }
            )}
          >
            <img alt="" src={info.img} />
            <div className="text-start">
              <h3>{info.title}</h3>
              <h4 className="text-gray-cool">{info.price}</h4>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MonthyPlan;
