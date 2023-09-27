'use client'
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface CardProps {
    titulo: string;
    icon: any;
    href: string;
    valor: string;
    percentual: string;
}

const Card = ({ titulo, icon, href, valor, percentual }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg flex flex-col gap-6 justify-between w-full h-[150px] p-4" >
            <div className="  flex items-center">
                <p className="  text-xl font-semibold">{titulo}</p>
                <div className=" ml-auto">
                    {icon}
                </div>
            </div>
            <div className=" flex items-center justify-between">
                <div className=" text-lg font-semibold">{valor}</div>
                <div className=" text-gray-600">{percentual}</div>
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