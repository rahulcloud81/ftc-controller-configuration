'use server';

import fs from 'fs/promises';
import path from 'path';
import type { ControllerMapping } from '@/lib/types';

export async function saveMappings(mappings: ControllerMapping) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'controller-config.json');
    const dataStr = JSON.stringify(mappings, null, 2);
    await fs.writeFile(filePath, dataStr, 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Failed to save mappings:', error);
    return { success: false, error: 'Failed to save configuration.' };
  }
}
