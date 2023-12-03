"use client";
import React from "react";
import PropTypes from "prop-types";
import { Percentual } from "../Percentual";

interface CardProps {
  titulo: string;
  icon: any;
  href: string;
  valor: string | number;
  percentual: string;
  isCurrency?: boolean;
}

const Card = ({
  titulo,
  icon,
  href,
  valor,
  percentual,
  isCurrency,
}: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col gap-6 justify-between w-full h-[150px] p-4">
      <div className="flex items-center">
        <p className="text-xs font-semibold max-[639px]:text-[10px] max-[375px]:text-[9px]">{titulo}</p>
        <div className=" ml-auto">{icon}</div>
      </div>
      <div>
      <div className=" flex items-center justify-between">
        <div className="text-lg max-[639px]:text-sm font-semibold flex flex-col">
            {isCurrency && "R$ "}
            {valor}
        </div>
        <div className=" text-gray-600 flex justify-start h-full">
          <div>
            <Percentual
              isPositive={parseFloat(percentual) < 0 ? false : true}
              value={percentual}
            />
          </div>
        </div>
      </div>
      <span className="text-[10px] max-[639px]:text-[8px] font-medium text-[#6C757D] ">
        Comparado ao mês passado
      </span>
      </div>
    </div>
  );
};

export default Card;
