'use client';

import type { MappingKey } from '@/lib/types';
import { cn } from '@/lib/utils';

type XboxControllerProps = {
  activeInput: MappingKey | null;
};

export default function XboxController({ activeInput }: XboxControllerProps) {
  const baseClasses = 'fill-muted-foreground transition-colors duration-200';
  const activeClasses = 'fill-primary';

  const getClasses = (key: MappingKey) => (activeInput === key ? cn(baseClasses, activeClasses) : baseClasses);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 690"
      aria-label="Xbox Controller"
      className="w-full h-auto"
    >
      <g className="fill-card-foreground">
        {/* Main Body */}
        <path d="M500,165c-150,0-280,30-350,80-70,50-80,130-80,200s10,150,80,200c70,50,200,80,350,80s280-30,350-80c70-50,80-130,80-200s-10-150-80-200c-70-50-200-80-350-80Z" />
      </g>
      
      {/* Left Stick */}
      <circle className={getClasses('left_stick_press')} data-name="left_stick_press" cx="290" cy="340" r="70" />
      <circle cx="290" cy="340" r="50" className="fill-background" />
      
      {/* Right Stick */}
      <circle className={getClasses('right_stick_press')} data-name="right_stick_press" cx="640" cy="460" r="70" />
      <circle cx="640" cy="460" r="50" className="fill-background" />

      {/* D-Pad */}
      <g>
        <path className={getClasses('dpad_up')} data-name="dpad_up" d="M430,345v-60h-60v60Z" transform="translate(0 -15)"/>
        <path className={getClasses('dpad_down')} data-name="dpad_down" d="M430,345v-60h-60v60Z" transform="translate(0 65) rotate(180 400 315)" />
        <path className={getClasses('dpad_left')} data-name="dpad_left" d="M430,345v-60h-60v60Z" transform="translate(-40 25) rotate(-90 400 315)" />
        <path className={getClasses('dpad_right')} data-name="dpad_right" d="M430,345v-60h-60v60Z" transform="translate(40 25) rotate(90 400 315)" />
      </g>
      
      {/* Face Buttons */}
      <circle className={getClasses('y_button')} data-name="y_button" cx="740" cy="270" r="30" />
      <circle className={getClasses('b_button')} data-name="b_button" cx="810" cy="340" r="30" />
      <circle className={getClasses('a_button')} data-name="a_button" cx="740" cy="410" r="30" />
      <circle className={getClasses('x_button')} data-name="x_button" cx="670" cy="340" r="30" />

      {/* Center Buttons */}
      <circle className={getClasses('view_button')} data-name="view_button" cx="420" cy="340" r="20" />
      <circle className={getClasses('menu_button')} data-name="menu_button" cx="580" cy="340" r="20" />

      {/* Xbox button */}
      <circle cx="500" cy="280" r="35" className="fill-muted-foreground/50"/>
      <path d="M523,268a20,20,0,1,1-30.8,25.6M477,268a20,20,0,1,0,30.8,25.6" className="fill-none stroke-background stroke-[10px]" strokeLinecap="round" />

      {/* Bumpers & Triggers */}
      <path className={cn(getClasses('left_bumper'), 'fill-card-foreground stroke-border stroke-2')} data-name="left_bumper" d="M190,240 h200 a10,10 0 0 1 10,10 v20 a10,10 0 0 1 -10,10 h-200 a20,20 0 0 1 -20,-20 v-10 a10,10 0 0 1 10,-10Z" />
      <path className={cn(getClasses('right_bumper'), 'fill-card-foreground stroke-border stroke-2')} data-name="right_bumper" d="M610,240 h200 a10,10 0 0 1 10,10 v20 a10,10 0 0 1 -10,10 h-200 a20,20 0 0 0 20,-20 v-10 a10,10 0 0 0 -10,-10Z" />
      <path className={getClasses('left_trigger')} data-name="left_trigger" d="M190,180 h180 a10,10 0 0 1 10,10 v40 a10,10 0 0 1 -10,10 h-180 a20,20 0 0 1 -20,-30 v-10 a20,20 0 0 1 20,-20Z" />
      <path className={getClasses('right_trigger')} data-name="right_trigger" d="M630,180 h180 a10,10 0 0 1 10,10 v40 a10,10 0 0 1 -10,10 h-180 a20,20 0 0 0 20,-30 v-10 a20,20 0 0 0 -20,-20Z" />

      <g className="fill-foreground font-sans text-2xl text-center" pointerEvents="none">
        <text x="740" y="278">Y</text>
        <text x="810" y="348">B</text>
        <text x="740" y="418">A</text>
        <text x="670" y="348">X</text>
      </g>
    </svg>
  );
}
