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
  <div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/2 font-semibold text-gray-700">Control</TableHead>
          <TableHead className="w-1/2 font-semibold text-gray-700">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {keys.map((key) => (
          <TableRow key={key}>
            <TableCell>{formatKey(key)}</TableCell>
            <TableCell className="break-words">
              {mappings[key] || <span className="text-gray-400 italic">Not Assigned</span>}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);


export default function PrintableConfig({ mappings }: PrintableConfigProps) {
  const leftColumnKeys = {
    'Shoulder Buttons': ['left_bumper', 'left_trigger'],
    'Left Thumbstick': ['left_stick_x', 'left_stick_y', 'left_stick_press'],
    'D-Pad': ['dpad_up', 'dpad_down', 'dpad_left', 'dpad_right'],
  };

  const rightColumnKeys = {
    'Shoulder Buttons ': ['right_bumper', 'right_trigger'],
    'Right Thumbstick': ['right_stick_x', 'right_stick_y', 'right_stick_press'],
    'Face Buttons': ['a_button', 'b_button', 'x_button', 'y_button'],
  };
  
  const centerKeys = {
    'Center Buttons': ['view_button', 'menu_button'],
  }

  return (
    <div className="hidden printable-area p-4 sm:p-8 font-sans">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Controller Configuration</h1>
        <p className="text-gray-600 text-sm sm:text-base">Generated on: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
                {Object.entries(leftColumnKeys).map(([title, keys]) => (
                    <MappingTable key={title} title={title} keys={keys as MappingKey[]} mappings={mappings} />
                ))}
            </div>
            <div className="space-y-6">
                {Object.entries(rightColumnKeys).map(([title, keys]) => (
                    <MappingTable key={title} title={title} keys={keys as MappingKey[]} mappings={mappings} />
                ))}
            </div>
        </div>
        <div className="max-w-xl mx-auto pt-4">
             {Object.entries(centerKeys).map(([title, keys]) => (
                <MappingTable key={title} title={title} keys={keys as MappingKey[]} mappings={mappings} />
            ))}
        </div>
      </div>
    </div>
  );
}