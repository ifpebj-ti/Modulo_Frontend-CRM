'use client'
import { Cube } from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-400 p-4 flex justify-center items-center gap-2 text-white">
      <Cube color="teal" weight="duotone" />
        Login Page</div>
    </main>
  );
}
