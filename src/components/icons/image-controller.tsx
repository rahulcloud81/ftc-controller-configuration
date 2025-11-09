'use client';

import Image from 'next/image';

export default function ImageController() {
  return (
    <Image
      src="/xbox-controller.png"
      alt="Xbox Controller"
      width={400}
      height={250}
      className="w-full h-auto"
      data-ai-hint="game controller"
    />
  );
}
