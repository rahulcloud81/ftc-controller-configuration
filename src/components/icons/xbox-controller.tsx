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

  const stickRingBase = 'fill-none stroke-border transition-colors duration-200';
  const stickRingActive = 'stroke-primary';
  const getStickRingClasses = (key: MappingKey) => (activeInput === key ? cn(stickRingBase, stickRingActive) : stickRingBase);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 750"
      aria-label="Xbox Controller"
      className="w-full h-auto"
    >
      {/* Body */}
      <path
        d="M61.8,453.3C22.6,401.1,5,328.6,5,258.9c0-89.8,31.3-164.3,91.8-210.4C157.2,2.4,242.4,0,323.5,0h353.1 c81.1,0,166.3,2.4,226.7,48.5c60.5,46.1,91.8,120.6,91.8,210.4c0,69.8-17.6,142.2-61.8,194.4c-35.4,41.8-82.4,71.1-137.9,86.3 c-44.5,12.2-94.3,16.4-149.2,16.4H472.7c-54.9,0-104.7-4.2-149.2-16.4C268,524.4,221,495.1,185.7,453.3"
        className="fill-card-foreground"
      />
      <path
        d="M62.2,453C23,400.8,5.4,328.4,5.4,258.6c0-89.8,31.3-164.3,91.8-210.4C157.6,2.2,242.8,0,323.8,0h353.1 c81.1,0,166.3,2.4,226.7,48.5c60.5,46.1,91.8,120.6,91.8,210.4c0,69.8-17.6,142.2-61.8,194.4c-35.4,41.8-82.4,71.1-137.9,86.3 c-44.5,12.2-94.3,16.4-149.2,16.4H473c-54.9,0-104.7-4.2-149.2-16.4C268.4,524.1,221.4,494.8,186,453"
        fill="none"
        className="stroke-border"
        strokeWidth="2"
      />

      {/* Triggers and Bumpers */}
      <g className="fill-muted-foreground">
        <path className={getClasses('left_trigger')} data-name="left_trigger" d="M141.5,124.5h181V52.4h-130c-28.2,0-51,22.8-51,51V124.5z" />
        <path className={getClasses('right_trigger')} data-name="right_trigger" d="M677.5,124.5h181v-72.1h-130c-28.2,0-51,22.8-51,51V124.5z" />
        <path className={cn(getClasses('left_bumper'), 'fill-card-foreground stroke-border stroke-2')} data-name="left_bumper" d="M187.5,148.9h181v-49.4h-181V148.9z" />
        <path className={cn(getClasses('right_bumper'), 'fill-card-foreground stroke-border stroke-2')} data-name="right_bumper" d="M631.5,148.9h181v-49.4h-181V148.9z" />
      </g>
      
      {/* Center piece */}
      <path d="M331,52.4L331,52.4c95.2,0,172.4,77.2,172.4,172.4v0v26.4H331V52.4z" transform="translate(496.5 251.2) rotate(90) scale(1, -1) translate(-496.5 -251.2)" className="fill-muted-foreground" />
      <path d="M414,83.4h172c4.4,0,8,3.6,8,8v12.2c0,4.4-3.6,8-8,8H414c-4.4,0-8-3.6-8-8V91.4 C406,87,409.6,83.4,414,83.4z" className="fill-card-foreground" />

      {/* Xbox button */}
      <circle cx="500" cy="103" r="35" className="fill-background" />
      <path
        d="M500,78.3c-12.7,0-23,10.3-23,23s10.3,23,23,23s23-10.3,23-23S512.7,78.3,500,78.3z M518.2,110.1 c-4.4-2.8-9.4-4.4-14.7-4.4h-7.1l-6,14.6h-5.6l8.4-20.2c2.4-5.9,8-10,14.4-10h2.4c8,0,14.4,6.5,14.4,14.4 c0,5.7-3.3,10.6-8.2,12.9L518.2,110.1z M500.8,90.4h-1.6c-2.4,0-4.5,1.9-4.8,4.3l-2.9,7.1h7.8c3.9,0,7-3.1,7-7 C506.2,91.9,503.7,90.4,500.8,90.4z"
        className="fill-foreground"
      />

      {/* View & Menu Buttons */}
      <g className={getClasses('view_button')} data-name="view_button">
        <circle cx="410" cy="259" r="16" />
        <rect x="403" y="252" width="6" height="6" rx="1" ry="1" className="fill-background" />
        <rect x="411" y="252" width="6" height="6" rx="1" ry="1" className="fill-background" />
        <rect x="403" y="260" width="6" height="6" rx="1" ry="1" className="fill-background" />
        <path d="M411,260h-2v2h-2v-4h4v-2h2v5c0,0.6-0.4,1-1,1h-5v-2h4V260z" className="fill-background" />
      </g>
      <g className={getClasses('menu_button')} data-name="menu_button">
        <circle cx="590" cy="259" r="16" />
        <rect x="582" y="253" width="16" height="2" className="fill-background" />
        <rect x="582" y="258" width="16" height="2" className="fill-background" />
        <rect x="582" y="263" width="16" height="2" className="fill-background" />
      </g>

      {/* D-Pad */}
      <circle cx="340" cy="380" r="58" className="fill-background" />
      <g>
        <path className={getClasses('dpad_up')} data-name="dpad_up" d="M328.5,348.5h23v-30h-23V348.5z" />
        <path className={getClasses('dpad_down')} data-name="dpad_down" d="M328.5,441.5h23v-30h-23V441.5z" />
        <path className={getClasses('dpad_left')} data-name="dpad_left" d="M307.5,400.5v-23h-30v23H307.5z" />
        <path className={getClasses('dpad_right')} data-name="dpad_right" d="M394.5,400.5v-23h-30v23H394.5z" />
        <path
          d="M358,380 h-36 a4,4 0 0 0 -4,4 v36 a4,4 0 0 0 4,4 h36 a4,4 0 0 0 4,-4 v-36 a4,4 0 0 0 -4,-4 Z M340,358 a4,4 0 0 0 -4,-4 h-36 a4,4 0 0 0 -4,4 v36 a4,4 0 0 0 4,4 h36 a4,4 0 0 0 4,-4 v-36 Z"
          transform="rotate(45 340 380)"
          className="fill-background"
        />
        <path d="M340,354.5c-2.5,0-4.5,2-4.5,4.5v12h-12c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5h12v12c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5v-12h12 c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5h-12v-12C344.5,356.5,342.5,354.5,340,354.5z" className="fill-muted-foreground" />
      </g>

      {/* Face Buttons */}
      <circle cx="700" cy="380" r="58" className="fill-background" />
      <g className="font-sans text-4xl text-center fill-foreground" pointerEvents="none">
        <circle className={getClasses('y_button')} data-name="y_button" cx="700" cy="330" r="22" />
        <circle className={getClasses('b_button')} data-name="b_button" cx="750" cy="380" r="22" />
        <circle className={getClasses('a_button')} data-name="a_button" cx="700" cy="430" r="22" />
        <circle className={getClasses('x_button')} data-name="x_button" cx="650" cy="380" r="22" />
        <text x="700" y="342" fill="#facc15">Y</text>
        <text x="750" y="392" fill="#ef4444">B</text>
        <text x="700" y="442" fill="#22c55e">A</text>
        <text x="650" y="392" fill="#3b82f6">X</text>
      </g>
      
      {/* Left Stick */}
      <circle className={getStickRingClasses('left_stick_press')} data-name="left_stick_press_ring" cx="220" cy="259" r="58" strokeWidth="2" />
      <circle className={getClasses('left_stick_press')} data-name="left_stick_press" cx="220" cy="259" r="52" />
      <circle cx="220" cy="259" r="42" className="fill-primary/20" />
      <circle cx="220" cy="259" r="20" className="fill-primary/40" />

      {/* Right Stick */}
      <circle className={getStickRingClasses('right_stick_press')} data-name="right_stick_press_ring" cx="570" cy="460" r="58" strokeWidth="2" />
      <circle className={getClasses('right_stick_press')} data-name="right_stick_press" cx="570" cy="460" r="52" />
      <circle cx="570" cy="460" r="42" className="fill-primary/20" />
      <circle cx="570" cy="460" r="20" className="fill-primary/40" />
    </svg>
  );
}
