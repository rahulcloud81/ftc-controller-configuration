'use client';

import { Input, type InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MappingInputProps extends InputProps {
  label: string;
}

export default function MappingInput({ label, name, ...props }: MappingInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} {...props} />
    </div>
  );
}
