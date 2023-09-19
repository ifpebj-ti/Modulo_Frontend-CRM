'use client'
import { Cube } from '@phosphor-icons/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-fc-color-50 p-4 flex justify-center items-center gap-">
      <Cube color="teal" weight="duotone" />
        Login Page</div>
    </main>
  );
}
