import type { ControllerMapping } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

type PrintableConfigProps = {
  mappings: ControllerMapping;
};

export default function PrintableConfig({ mappings }: PrintableConfigProps) {
  const entries = Object.entries(mappings) as [keyof ControllerMapping, string][];

  const formatKey = (key: string) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  return (
    <div className="hidden printable-area p-8 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Controller Configuration</h1>
        <p className="text-gray-600">Generated on: {new Date().toLocaleDateString()}</p>
      </div>
      
      <Card className="max-w-4xl mx-auto border-gray-300 shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl">Mappings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {entries.map(([key, value], index) => (
              <div key={key}>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <span className="font-semibold text-gray-700">{formatKey(key)}</span>
                  <span className="p-2 bg-gray-100 rounded-md text-gray-800 break-words">
                    {value || <span className="text-gray-400 italic">Not Assigned</span>}
                  </span>
                </div>
                {index < entries.length - 1 && <Separator className="mt-4 bg-gray-200" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
