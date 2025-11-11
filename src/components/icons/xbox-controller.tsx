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
    <svg width="400" height="250" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <path d="M60,150 C-20,250 10,250 100,220 L150,130 L350,130 L400,220 C490,250 520,250 440,150 C450,50 350,60 350,60 L150,60 C150,60 50,50 60,150Z" className="fill-card-foreground stroke-border" strokeWidth="4"/>
      
      {/* Left Stick */}
      <circle cx="170" cy="185" r="30" className={cn(getClasses('left_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="170" cy="185" r="25" className="fill-muted-foreground" />

      {/* Right Stick */}
      <circle cx="330" cy="185" r="30" className={cn(getClasses('right_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="330" cy="185" r="25" className="fill-muted-foreground" />

      {/* D-Pad */}
      <g>
        <rect x="98" y="115" width="24" height="60" rx="4" className={getClasses('dpad_down')} />
        <rect x="70" y="133" width="80" height="24" rx="4" className={getClasses('dpad_left')} />
        <path d="M98 133 H 122 V 115 H 98 Z" className={getClasses('dpad_up')} />
        <path d="M122 133 H 150 V 157 H 122 Z" className={getClasses('dpad_right')} />
      </g>
      
      {/* Face Buttons */}
      <g className="font-sans text-xs fill-foreground" pointerEvents="none">
        <circle cx="410" cy="155" r="15" className={getClasses('y_button')} />
        <path d="M402 147 L410 163 L418 147 Z" fill="#6EE7B7" stroke="#000" strokeWidth="1"/>
        <circle cx="445" cy="125" r="15" className={getClasses('b_button')} />
        <circle cx="445" cy="125" r="8" fill="#F87171" stroke="#000" strokeWidth="1" />
        <circle cx="375" cy="125" r="15" className={getClasses('a_button')} />
        <rect x="367" y="117" width="16" height="16" fill="#93C5FD" stroke="#000" strokeWidth="1"/>
        <circle cx="410" cy="95" r="15" className={getClasses('x_button')} />
        <line x1="402" y1="103" x2="418" y2="87" stroke="#FBBF24" strokeWidth="2"/>
        <line x1="402" y1="87" x2="418" y2="103" stroke="#FBBF24" strokeWidth="2"/>
      </g>
      
      {/* Center Pad */}
      <rect x="190" y="80" width="120" height="70" rx="5" className="fill-muted-foreground/30"/>

      {/* Small Buttons */}
      <circle cx="210" cy="65" r="8" className={getClasses('view_button')}/>
      <circle cx="290" cy="65" r="8" className={getClasses('menu_button')}/>
      
      {/* Bumpers */}
      <path d="M110,60 Q150,20 190,60" className={cn(getClasses('left_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>
      <path d="M310,60 Q350,20 390,60" className={cn(getClasses('right_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>

      {/* Triggers */}
      <path d="M110,60 Q130,0 170,30" className={cn(getClasses('left_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
      <path d="M330,30 Q370,0 390,60" className={cn(getClasses('right_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
    </svg>
  );
}
