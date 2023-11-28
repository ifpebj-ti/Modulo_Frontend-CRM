"use client";
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Percentual } from "../Percentual";

interface CardProps {
  titulo: string;
  icon: any;
  href: string;
  valor: number | string;
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
      <div className="  flex items-center">
        <p className="  text-[12px] font-semibold">{titulo}</p>
        <div className=" ml-auto">{icon}</div>
      </div>
      <div className=" flex items-center justify-between">
        <div className=" text-lg font-semibold flex flex-col">
          {isCurrency && "R$ "}
          {valor}
          <span className="text-[10px] font-medium text-[#6C757D] ">
            Comparado ao mês passado
          </span>
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
    </div>
  );
};

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  percentual: PropTypes.string.isRequired,
};

export default Card;
