'use client';

import Image from 'next/image';

export default function ImageController() {
  return (
    <Image
      src="https://fireworks.so/images/enterprise/pages/homepage-enterprise/contact-us-hero.png"
      alt="Xbox Controller"
      width={400}
      height={250}
      className="w-full h-auto"
      data-ai-hint="game controller"
    />
  );
}
