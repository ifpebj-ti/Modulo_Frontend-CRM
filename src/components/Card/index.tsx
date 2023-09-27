import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

interface CardProps {
    titulo: string;
    imagemSrc: string;
    href: string;
    valor: string;
    percentual: string;
}

const Card = ({ titulo, imagemSrc, href, valor, percentual }: CardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 grid grid-cols-4 grid-rows-2 gap-1" >
            <div className="col-span-4  flex items-center">
                <p className=" col-span-3 text-xl font-semibold">{titulo}</p>
                <div className="col-span-1 ml-auto">
                    <Image src="/frontend/public/users.png" alt="logo Card" width={20} height={20} />
                </div>
            </div>
            <div className="col-span-4 flex items-center">
                <div className="col-span-3 text-lg font-semibold">{valor}</div>
                <div className="col-span-1 text-gray-600">{percentual}</div>
            </div>
        </div>


    );
};

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagemSrc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    percentual: PropTypes.string.isRequired,
};

export default Card;