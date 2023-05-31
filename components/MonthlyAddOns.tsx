"use client";

import { AppInfoType } from "@/app/page";
import { Checkbox } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

type AddOnsProps = {
  setAddOns: Dispatch<SetStateAction<AppInfoType[]>>;
  addOns: AppInfoType[];
  checked: boolean;
};

const MonthlyAddOns: React.FC<AddOnsProps> = ({
  setAddOns,
  addOns,
  checked,
}) => {
  const monthlyExtraServices: AppInfoType[] = [
    {
      id: 0,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: !checked ? "+$1/mo" : "+$10/mo",
      value: !checked ? 1 : 10!,
    },
    {
      id: 1,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: !checked ? "+$2/mo" : "+$20/mo",
      value: !checked ? 2 : 20,
    },
    {
      id: 2,
      title: "Customizable profile",
      desc: "Access to multiplayer games",
      price: !checked ? "+$2/mo" : "+20/mo",
      value: !checked ? 2 : 20,
    },
  ];

  const onClickHandler = (service: AppInfoType) => {
    setAddOns((prev) => {
      const prevAddOn = prev.find((addOn) => addOn.id === service.id);
      if (prevAddOn) {
        return prev.filter((addOn) => addOn.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  return (
    <div className="flex flex-col justify-between items-center w-full gap-4">
      {monthlyExtraServices.map((service, index) => {
        const addOnFound = addOns.find((addOn) => addOn.id === service.id);
        return (
          <div className="w-full" key={index}>
            <div
              className={clsx(
                "flex justify-start items-center w-full p-2 gap-4 rounded",
                {
                  "border-blue-purple border-solid border  bg-blue-pastel":
                    addOnFound,
                  "border-gray-light border-solid border": !addOnFound,
                }
              )}
            >
              <div onClick={() => onClickHandler(service)}>
                <Checkbox />
              </div>
              <div className="w-full">
                <h3>{service.title}</h3>
                <h4 className="text-[0.6rem] lg:text-[0.75rem]">
                  {service.desc}
                </h4>
              </div>
              <h4>{service.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyAddOns;
