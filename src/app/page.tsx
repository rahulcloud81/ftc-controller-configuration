'use client';

import { useState, useEffect } from 'react';
import type { ControllerMapping, MappingKey } from '@/lib/types';
import { initialMappings } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/header';
import XboxController from '@/components/icons/xbox-controller';
import MappingForm from '@/components/mapping-form';
import PrintableConfig from '@/components/printable-config';
import { saveMappings } from './actions';

export default function Home() {
  const [mappings, setMappings] = useState<ControllerMapping>(initialMappings);
  const [activeInput, setActiveInput] = useState<MappingKey | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadInitialConfig = async () => {
      try {
        const response = await fetch('/controller-config.json');
        if (response.ok) {
          const data = await response.json();
          handleLoad(data, true);
        } else {
          // You could choose to show a toast here if the default file not loading is an error
        }
      } catch (error) {
        // You could choose to show a toast here if the fetch fails
      }
    };
    loadInitialConfig();
  }, []);

  const handleMappingChange = (key: MappingKey, value: string) => {
    setMappings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    const result = await saveMappings(mappings);
    if (result.success) {
      toast({
        title: 'Profile Saved',
        description: 'Your controller configuration has been saved to the server.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Save Failed',
        description: result.error,
      });
    }
  };

  const handleDownload = () => {
     try {
      const dataStr = JSON.stringify(mappings, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'controller-config.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast({
        title: 'Profile Downloaded',
        description: 'Your controller configuration has been downloaded.',
      });
    } catch (error) {
       toast({
        variant: 'destructive',
        title: 'Download Failed',
        description: 'Could not create a downloadable file.',
      });
    }
  };

  const handleLoad = (data: ControllerMapping, isInitialLoad = false) => {
    // Basic validation
    const isValid = Object.keys(initialMappings).every((key) =>
      Object.prototype.hasOwnProperty.call(data, key)
    );
    if (isValid) {
      setMappings(data);
      if (!isInitialLoad) {
        toast({
          title: 'Profile Loaded',
          description: 'Controller configuration has been successfully loaded.',
        });
      }
    } else if (!isInitialLoad) {
      toast({
        variant: 'destructive',
        title: 'Load Failed',
        description: 'The selected file is not a valid configuration profile.',
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSave={handleSave} onDownload={handleDownload} onLoad={handleLoad} onPrint={handlePrint} />
      <main className="flex-1 container mx-auto px-4 py-8 no-print">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-full max-w-lg sticky top-8">
              <XboxController activeInput={activeInput} mappings={mappings} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <MappingForm
              mappings={mappings}
              onMappingChange={handleMappingChange}
              setActiveInput={setActiveInput}
            />
          </div>
        </div>
      </main>
      <PrintableConfig mappings={mappings} />
    </div>
  );
}
