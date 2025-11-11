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

  const textClasses = "text-xs fill-foreground font-sans";
  const lineClasses = "stroke-border";

  return (
    <svg width="600" height="400"
     viewBox="-50 -50 600 400"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <path d="M60,150 C-20,250 10,250 100,220 L150,130 L350,130 L400,220 C490,250 520,250 440,150 C450,50 350,60 350,60 L150,60 C150,60 50,50 60,150Z" className="fill-card-foreground stroke-border" strokeWidth="4"/>
      
      {/* Left Stick */}
      <circle cx="170" cy="185" r="30" className={cn(getClasses('left_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="170" cy="185" r="25" className="fill-muted-foreground" />
      <path d="M170 215 V 235 H 130" className={lineClasses} strokeWidth="1"/>
      <text x="125" y="240" textAnchor="end" className={textClasses}>{mappings.left_stick_press}</text>
      
      <path d="M140 185 H 100" className={lineClasses} strokeWidth="1"/>
      <text x="95" y="190" textAnchor="end" className={textClasses}>{mappings.left_stick_x}</text>
      
      <path d="M170 155 V 135 H 130" className={lineClasses} strokeWidth="1"/>
      <text x="125" y="140" textAnchor="end" className={textClasses}>{mappings.left_stick_y}</text>


      {/* Right Stick */}
      <circle cx="330" cy="185" r="30" className={cn(getClasses('right_stick_press'), 'stroke-primary fill-muted-foreground/50')} strokeWidth="2"/>
      <circle cx="330" cy="185" r="25" className="fill-muted-foreground" />
      <path d="M330 215 V 235 H 370" className={lineClasses} strokeWidth="1"/>
      <text x="375" y="240" textAnchor="start" className={textClasses}>{mappings.right_stick_press}</text>
      
      <path d="M360 185 H 400" className={lineClasses} strokeWidth="1"/>
      <text x="405" y="190" textAnchor="start" className={textClasses}>{mappings.right_stick_x}</text>

      <path d="M330 155 V 135 H 370" className={lineClasses} strokeWidth="1"/>
      <text x="375" y="140" textAnchor="start" className={textClasses}>{mappings.right_stick_y}</text>

      {/* D-Pad */}
      <g>
        <rect x="98" y="115" width="24" height="60" rx="4" className={getClasses('dpad_down')} />
        <rect x="70" y="133" width="80" height="24" rx="4" className={getClasses('dpad_left')} />
        <path d="M98 133 H 122 V 115 H 98 Z" className={getClasses('dpad_up')} />
        <path d="M122 133 H 150 V 157 H 122 Z" className={getClasses('dpad_right')} />
      </g>
      <path d="M110 115 V 95 H 70" className={lineClasses} strokeWidth="1"/>
      <text x="65" y="100" textAnchor="end" className={textClasses}>{mappings.dpad_up}</text>
      
      <path d="M110 175 V 195 H 70" className={lineClasses} strokeWidth="1"/>
      <text x="65" y="200" textAnchor="end" className={textClasses}>{mappings.dpad_down}</text>

      <path d="M70 145 H 40" className={lineClasses} strokeWidth="1"/>
      <text x="35" y="150" textAnchor="end" className={textClasses}>{mappings.dpad_left}</text>
      
      <path d="M150 145 H 180" className={lineClasses} strokeWidth="1"/>
      <text x="185" y="150" textAnchor="start" className={textClasses}>{mappings.dpad_right}</text>
      
      {/* Face Buttons */}
      <g pointerEvents="none">
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
      <path d="M375 140 V 160 H 340" className={lineClasses} strokeWidth="1"/>
      <text x="335" y="165" textAnchor="end" className={textClasses}>{mappings.a_button}</text>
      
      <path d="M445 140 V 160 H 480" className={lineClasses} strokeWidth="1"/>
      <text x="485" y="165" textAnchor="start" className={textClasses}>{mappings.b_button}</text>
      
      <path d="M410 80 V 60 H 450" className={lineClasses} strokeWidth="1"/>
      <text x="455" y="65" textAnchor="start" className={textClasses}>{mappings.x_button}</text>
      
      <path d="M410 170 V 190 H 450" className={lineClasses} strokeWidth="1"/>
      <text x="455" y="195" textAnchor="start" className={textClasses}>{mappings.y_button}</text>

      
      {/* Center Pad */}
      <rect x="190" y="80" width="120" height="70" rx="5" className="fill-muted-foreground/30"/>

      {/* Small Buttons */}
      <circle cx="210" cy="65" r="8" className={getClasses('view_button')}/>
      <path d="M218 69 L 230 80" className={lineClasses} strokeWidth="1"/>
      <text x="235" y="85" textAnchor="start" className={textClasses}>{mappings.view_button}</text>
      
      <circle cx="290" cy="65" r="8" className={getClasses('menu_button')}/>
      <path d="M282 69 L 270 80" className={lineClasses} strokeWidth="1"/>
      <text x="265" y="85" textAnchor="end" className={textClasses}>{mappings.menu_button}</text>
      
      {/* Bumpers */}
      <path d="M110,60 Q150,20 190,60" className={cn(getClasses('left_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>
      <path d="M150 40 V 20 H 100" className={lineClasses} strokeWidth="1"/>
      <text x="95" y="25" textAnchor="end" className={textClasses}>{mappings.left_bumper}</text>
      
      <path d="M310,60 Q350,20 390,60" className={cn(getClasses('right_bumper'), 'stroke-border')} strokeWidth="15" fill="none"/>
      <path d="M350 40 V 20 H 400" className={lineClasses} strokeWidth="1"/>
      <text x="405" y="25" textAnchor="start" className={textClasses}>{mappings.right_bumper}</text>


      {/* Triggers */}
      <path d="M110,60 Q130,0 170,30" className={cn(getClasses('left_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
      <path d="M130 20 L 120 0 H 70" className={lineClasses} strokeWidth="1"/>
      <text x="65" y="5" textAnchor="end" className={textClasses}>{mappings.left_trigger}</text>
      
      <path d="M330,30 Q370,0 390,60" className={cn(getClasses('right_trigger'), 'stroke-muted-foreground/50')} strokeWidth="15" fill="none"/>
      <path d="M370 20 L 380 0 H 430" className={lineClasses} strokeWidth="1"/>
      <text x="435" y="5" textAnchor="start" className={textClasses}>{mappings.right_trigger}</text>
    </svg>
  );
}
