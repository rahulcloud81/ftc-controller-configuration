'use client';

import type { ControllerMapping, MappingKey } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MappingInput from './mapping-input';

type MappingFormProps = {
  mappings: ControllerMapping;
  onMappingChange: (key: MappingKey, value: string) => void;
  setActiveInput: (key: MappingKey | null) => void;
};

const inputGroups: { title: string; keys: MappingKey[]; gridCols: string }[] = [
  {
    title: 'Face Buttons',
    keys: ['a_button', 'b_button', 'x_button', 'y_button'],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
  },
  {
    title: 'D-Pad',
    keys: ['dpad_up', 'dpad_down', 'dpad_left', 'dpad_right'],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
  },
  {
    title: 'Shoulder Buttons',
    keys: ['left_bumper', 'right_bumper', 'left_trigger', 'right_trigger'],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
  },
  {
    title: 'Thumbsticks',
    keys: [
      'left_stick_x',
      'left_stick_y',
      'left_stick_press',
      'right_stick_x',
      'right_stick_y',
      'right_stick_press',
    ],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
  },
   {
    title: 'Center Buttons',
    keys: ['view_button', 'menu_button'],
    gridCols: 'grid-cols-1 sm:grid-cols-2',
  },
];

export default function MappingForm({
  mappings,
  onMappingChange,
  setActiveInput,
}: MappingFormProps) {
  return (
    <div className="space-y-6">
      {inputGroups.map((group) => (
        <Card key={group.title}>
          <CardHeader>
            <CardTitle>{group.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`grid ${group.gridCols} gap-4`}>
              {group.keys.map((key) => (
                <MappingInput
                  key={key}
                  label={key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  name={key}
                  value={mappings[key]}
                  onChange={(e) => onMappingChange(key, e.target.value)}
                  onFocus={() => setActiveInput(key)}
                  onBlur={() => setActiveInput(null)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
