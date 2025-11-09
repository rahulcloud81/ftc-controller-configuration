import type { ControllerMapping, MappingKey } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PrintableConfigProps = {
  mappings: ControllerMapping;
};

const formatKey = (key: string) => {
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

const MappingTable = ({ title, keys, mappings }: { title: string; keys: MappingKey[]; mappings: ControllerMapping }) => (
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
        {keys.map((key) => (
          <TableRow key={key}>
            <TableCell className="font-semibold">{formatKey(key)}</TableCell>
            <TableCell className="break-words font-code">
              {mappings[key] || <span className="text-gray-400 italic">Not Assigned</span>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);


export default function PrintableConfig({ mappings }: PrintableConfigProps) {
  const layout = {
    'Shoulder Buttons': ['left_bumper', 'right_bumper', 'left_trigger', 'right_trigger'],
    'D-Pad': ['dpad_up', 'dpad_down', 'dpad_left', 'dpad_right'],
    'Thumbsticks': ['left_stick_x', 'left_stick_y', 'left_stick_press', 'right_stick_x', 'right_stick_y', 'right_stick_press'],
    'Face Buttons': ['a_button', 'b_button', 'x_button', 'y_button'],
  };

  return (
    <div className="hidden printable-area p-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 font-headline">Controller Configuration</h1>
        <p className="text-gray-600 text-lg">Generated on: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-8">
        {Object.entries(layout).map(([title, keys]) => (
            <MappingTable key={title} title={title} keys={keys as MappingKey[]} mappings={mappings} />
        ))}
      </div>
    </div>
  );
}
