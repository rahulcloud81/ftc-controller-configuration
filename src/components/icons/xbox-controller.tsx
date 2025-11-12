'use client';

import type { ControllerMapping, MappingKey } from '@/lib/types';
import { cn } from '@/lib/utils';

type XboxControllerProps = {
  activeInput: MappingKey | null;
  mappings: ControllerMapping;
};

export default function XboxController({ activeInput, mappings }: XboxControllerProps) {
  const baseClasses = 'fill-muted-foreground transition-colors duration-200';
  const activeClasses = 'fill-primary';
  const getClasses = (key: MappingKey) => (activeInput === key ? cn(baseClasses, activeClasses) : baseClasses);

  const textClasses = "text-base fill-foreground dark:fill-chart-1 font-sans font-bold";
  const lineClasses = "stroke-chart-1";

  return (
    <svg width="650" height="500" 
      viewBox="-50 -50 600 500"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <path d="M60,150 C-20,250 10,250 100,220 L150,130 L350,130 L400,220 C490,250 520,250 440,150 C450,50 350,60 350,60 L150,60 C150,60 50,50 60,150Z" className="fill-card-foreground stroke-border" strokeWidth="4"/>
      
      {/* Left Stick */}
      <circle cx="170" cy="185" r="30" className={cn(getClasses('left_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="170" cy="185" r="25" className="fill-muted-foreground" />
      <path d="M170 215 V 285 H 120" className={lineClasses} strokeWidth="1"/>
      <text x="115" y="290" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.left_stick_press}</text>
      
      <path d="M140 185 H 20" className={lineClasses} strokeWidth="1"/>
      <text x="15" y="190" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.left_stick_x}</text>
      
      <path d="M170 155 V 310 H 120" className={lineClasses} strokeWidth="1"/>
      <text x="115" y="315" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.left_stick_y}</text>


      {/* Right Stick */}
      <circle cx="330" cy="185" r="30" className={cn(getClasses('right_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="330" cy="185" r="25" className="fill-muted-foreground" />
      <path d="M330 215 V 285 H 380" className={lineClasses} strokeWidth="1"/>
      <text x="385" y="290" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.right_stick_press}</text>
      
      <path d="M360 185 H 480" className={lineClasses} strokeWidth="1"/>
      <text x="485" y="190" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.right_stick_x}</text>

      <path d="M330 155 V 115 H 380" className={lineClasses} strokeWidth="1"/>
      <text x="385" y="120" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.right_stick_y}</text>

      {/* D-Pad */}
      <g>
        <rect x="98" y="115" width="24" height="60" rx="4" className={getClasses('dpad_down')} />
        <rect x="70" y="133" width="80" height="24" rx="4" className={getClasses('dpad_left')} />
        <path d="M98 133 H 122 V 115 H 98 Z" className={getClasses('dpad_up')} />
        <path d="M122 133 H 150 V 157 H 122 Z" className={getClasses('dpad_right')} />
      </g>
      <path d="M110 115 V 85 H 60" className={lineClasses} strokeWidth="1"/>
      <text x="55" y="90" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.dpad_up}</text>
      
      <path d="M110 175 V 205 H 60" className={lineClasses} strokeWidth="1"/>
      <text x="55" y="210" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.dpad_down}</text>

      <path d="M70 145 H 20" className={lineClasses} strokeWidth="1"/>
      <text x="15" y="150" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.dpad_left}</text>
      
      <path d="M150 145 H 200" className={lineClasses} strokeWidth="1"/>
      <text x="205" y="150" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.dpad_right}</text>
      
      {/* Face Buttons */}
      <g>
        {/* A Button */}
        <circle cx="375" cy="155" r="20" className={getClasses('a_button')} />
        <circle cx="375" cy="155" r="12" className="fill-chart-2" />
        <text x="375" y="160" textAnchor="middle" className="text-lg font-bold fill-white">A</text>

        {/* B Button */}
        <circle cx="415" cy="125" r="20" className={getClasses('b_button')} />
        <circle cx="415" cy="125" r="12" className="fill-chart-1" />
        <text x="415" y="130" textAnchor="middle" className="text-lg font-bold fill-white">B</text>

        {/* X Button */}
        <circle cx="335" cy="125" r="20" className={getClasses('x_button')} />
        <circle cx="335" cy="125" r="12" className="fill-chart-4" />
        <text x="335" y="130" textAnchor="middle" className="text-lg font-bold fill-white">X</text>

        {/* Y Button */}
        <circle cx="375" cy="95" r="20" className={getClasses('y_button')} />
        <circle cx="375" cy="95" r="12" className="fill-chart-5" />
        <text x="375" y="100" textAnchor="middle" className="text-lg font-bold fill-white">Y</text>
      </g>
      <path d="M375 175 V 230 H 330" className={lineClasses} strokeWidth="1"/>
      <text x="325" y="235" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.a_button}</text>
      
      <path d="M415 145 V 170 H 455" className={lineClasses} strokeWidth="1"/>
      <text x="460" y="175" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.b_button}</text>
      
      <path d="M335 105 V 85 H 285" className={lineClasses} strokeWidth="1"/>
      <text x="280" y="90" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.x_button}</text>
      
      <path d="M375 75 V 55 H 425" className={lineClasses} strokeWidth="1"/>
      <text x="430" y="60" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.y_button}</text>

      
      {/* Center Pad */}
      <rect x="190" y="80" width="120" height="70" rx="5" className="fill-muted-foreground/30"/>

      {/* Small Buttons */}
      <circle cx="210" cy="65" r="8" className={getClasses('view_button')}/>
      <path d="M218 69 L 230 80" className={lineClasses} strokeWidth="1"/>
      <text x="235" y="85" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.view_button}</text>
      
      <circle cx="290" cy="65" r="8" className={getClasses('menu_button')}/>
      <path d="M282 69 L 270 80" className={lineClasses} strokeWidth="1"/>
      <text x="265" y="85" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.menu_button}</text>
      
      {/* Bumpers */}
      <path d="M110,60 Q150,20 190,60" className={cn(getClasses('left_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>
      <path d="M150 40 V 10 H 90" className={lineClasses} strokeWidth="1"/>
      <text x="85" y="15" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.left_bumper}</text>
      
      <path d="M310,60 Q350,20 390,60" className={cn(getClasses('right_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>
      <path d="M350 40 V 10 H 410" className={lineClasses} strokeWidth="1"/>
      <text x="415" y="15" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.right_bumper}</text>


      {/* Triggers */}
      <path d="M110,60 Q130,0 170,30" className={cn(getClasses('left_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
      <path d="M130 20 L 120 -20 H 60" className={lineClasses} strokeWidth="1"/>
      <text x="55" y="-15" textAnchor="end" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.left_trigger}</text>
      
      <path d="M330,30 Q370,0 390,60" className={cn(getClasses('right_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
      <path d="M370 20 L 380 -20 H 440" className={lineClasses} strokeWidth="1"/>
      <text x="445" y="-15" textAnchor="start" className={textClasses} style={{ whiteSpace: 'pre-wrap' }}>{mappings.right_trigger}</text>
    </svg>
  );
}
