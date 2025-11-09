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
      width="400" 
      height="250" 
      viewBox="0 0 400 250" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Xbox Controller"
      className="w-full h-auto"
    >
      <ellipse cx="200" cy="125" rx="170" ry="100" className="fill-card-foreground stroke-border" strokeWidth="5"/>

      <circle cx="120" cy="85" r="22" className={cn(getClasses('left_stick_press'), 'stroke-primary')} strokeWidth="3"/>
      <circle cx="280" cy="155" r="22" className={cn(getClasses('right_stick_press'), 'stroke-primary')} strokeWidth="3"/>

      <g>
        <rect x="148" y="123" width="16" height="48" rx="4" className={getClasses('dpad_down')} />
        <rect x="133" y="139" width="46" height="16" rx="4" className={getClasses('dpad_left')} />
         {/* These are just decorative for the new dpad */}
        <rect x="148" y="123" width="16" height="16" rx="4" className={getClasses('dpad_up')} />
        <rect x="167" y="139" width="12" height="16" rx="4" className={getClasses('dpad_right')} />
      </g>
      
      <g className="font-sans text-xs fill-foreground" pointerEvents="none">
        <circle cx="320" cy="90" r="12" className={getClasses('y_button')} />
        <text x="316" y="94" fill="#facc15">Y</text>
        
        <circle cx="340" cy="120" r="12" className={getClasses('b_button')} />
        <text x="336" y="124" fill="#ef4444">B</text>

        <circle cx="320" cy="150" r="12" className={getClasses('a_button')} />
        <text x="316" y="154" fill="#22c55e">A</text>
        
        <circle cx="300" cy="120" r="12" className={getClasses('x_button')} />
        <text x="296" y="124" fill="#3b82f6">X</text>
      </g>
      
      <circle cx="200" cy="50" r="16" className="fill-background stroke-border" strokeWidth="2"/>
      <text x="194" y="57" fontFamily="Arial" fontSize="18" className="fill-primary">X</text>

      {/* Simplified buttons for view and menu */}
      <circle cx="170" cy="50" r="8" className={getClasses('view_button')}/>
      <circle cx="230" cy="50" r="8" className={getClasses('menu_button')}/>

      {/* Simplified bumpers and triggers */}
      <rect x="80" y="15" width="80" height="20" rx="5" className={getClasses('left_bumper')} />
      <rect x="240" y="15" width="80" height="20" rx="5" className={getClasses('right_bumper')} />
      <rect x="60" y="30" width="60" height="15" rx="5" className={getClasses('left_trigger')} />
      <rect x="280" y="30" width="60" height="15" rx="5" className={getClasses('right_trigger')} />
    </svg>
  );
}
