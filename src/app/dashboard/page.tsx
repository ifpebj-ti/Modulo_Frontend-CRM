import React from 'react';
import Card from '@/components/Card';

interface CardProps {
  titulo: string;
  imagemSrc: string;
  href: string;
  valor: string;
  percentual: string;
}

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24 ">
      <div className='bg-blue-400 p-4'>Dashboard</div>
      <div className="grid grid-cols-3 w-6/12 gap-5">
        <Card titulo="Título do Card" imagemSrc="exemplo.com/imagem.jpg" valor="Valor do Card" percentual="Percentual do Card" href={'#'} />
        <Card titulo="Título do Card" imagemSrc="exemplo.com/imagem.jpg" valor="Valor do Card" percentual="Percentual do Card" href={'#'} />
        <Card titulo="Título do Card" imagemSrc="exemplo.com/imagem.jpg" valor="Valor do Card" percentual="Percentual do Card" href={'#'} />
      </div>
    </main>
  );
}

