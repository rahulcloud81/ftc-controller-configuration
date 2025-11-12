'use client';

import { useState, useEffect } from 'react';
import type { ControllerMapping, MappingKey } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { APP_TITLE } from '@/lib/config';

type PrintableConfigProps = {
  mappings: ControllerMapping;
};

const formatKey = (key: string) => {
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

const MappingTable = ({ title, keys, mappings }: { title: string; keys: MappingKey[]; mappings: ControllerMapping }) => {
  const mappedKeys = keys.filter(key => mappings[key]);

  if (mappedKeys.length === 0) {
    return null;
  }

  return (
    <div className="break-inside-avoid">
      <h3 className="font-bold text-xl mb-3 font-headline">{title}</h3>
      <Table className="border text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2 font-bold text-gray-800 text-lg">Control</TableHead>
            <TableHead className="w-1/2 font-bold text-gray-800 text-lg">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mappedKeys.map((key) => (
            <TableRow key={key}>
              <TableCell className="font-semibold">{formatKey(key)}</TableCell>
              <TableCell className="break-words font-code">
                {mappings[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default function PrintableConfig({ mappings }: PrintableConfigProps) {
  const [generatedDate, setGeneratedDate] = useState('');

  useEffect(() => {
    setGeneratedDate(new Date().toLocaleDateString());
  }, []);

  const printLayout: { [key: string]: MappingKey[] } = {
     'Face Buttons': ['a_button', 'b_button', 'x_button', 'y_button'],
     'Shoulder Buttons': ['left_bumper', 'right_bumper', 'left_trigger', 'right_trigger'],
     'D-Pad': ['dpad_up', 'dpad_down', 'dpad_left', 'dpad_right'],
     'Thumbsticks': ['left_stick_press', 'right_stick_press', 'left_stick_x', 'left_stick_y', 'right_stick_x', 'right_stick_y'],
  };

  return (
    <div className="hidden printable-area p-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 font-headline">{APP_TITLE}</h1>
        <p className="text-gray-600 text-lg">Generated on: {generatedDate}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(printLayout).map(([title, keys]) => (
          <MappingTable key={title} title={title} keys={keys as MappingKey[]} mappings={mappings} />
        ))}
      </div>
    </div>
  );
}