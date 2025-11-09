'use client';

import { useRef, type ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { FolderOpen, Save, Printer } from 'lucide-react';
import type { ControllerMapping } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

type HeaderProps = {
  onSave: () => void;
  onLoad: (data: ControllerMapping) => void;
  onPrint: () => void;
};

export default function Header({ onSave, onLoad, onPrint }: HeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleLoadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text === 'string') {
          const data = JSON.parse(text);
          onLoad(data);
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Load Failed',
          description: 'Failed to parse the JSON file.',
        });
      }
    };
    reader.onerror = () => {
       toast({
          variant: 'destructive',
          title: 'Load Failed',
          description: 'Failed to read the file.',
        });
    }
    reader.readAsText(file);
    
    // Reset file input to allow loading the same file again
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 no-print">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 mr-2 text-primary"><rect width="256" height="256" fill="none"></rect><path d="M168.2,128.9a134.4,134.4,0,0,1,28.8-3.4,48,48,0,1,1-32.9-63.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M87.8,128.9a134.4,134.4,0,0,0-28.8-3.4,48,48,0,1,0,32.9-63.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M128,152a72,72,0,0,1-72-72,2.8,2.8,0,0,1,0-1.7,72.1,72.1,0,0,1,144,0,2.8,2.8,0,0,1,0,1.7A72,72,0,0,1,128,152Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
          <span className="font-bold">Tech Titan Controller Mapping</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            className="hidden"
          />
          <Button variant="outline" size="sm" onClick={handleLoadClick}>
            <FolderOpen />
            Load
          </Button>
          <Button variant="outline" size="sm" onClick={onSave}>
            <Save />
            Save
          </Button>
          <Button variant="outline" size="sm" onClick={onPrint}>
            <Printer />
            Print
          </Button>
        </div>
      </div>
    </header>
  );
}
