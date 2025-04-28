
import React from 'react';
import { cn } from '@/lib/utils';

interface TriageCountSummaryProps {
  counts: number[];
}

const TriageCountSummary: React.FC<TriageCountSummaryProps> = ({ counts }) => {
  const getBgColor = (index: number) => {
    switch (index + 1) {
      case 1: return 'bg-triage-level1';
      case 2: return 'bg-triage-level2';
      case 3: return 'bg-triage-level3';
      case 4: return 'bg-triage-level4';
      case 5: return 'bg-triage-level5';
      default: return 'bg-primary';
    }
  };

  const getLabel = (index: number) => {
    switch (index + 1) {
      case 1: return 'Critical';
      case 2: return 'Emergency';
      case 3: return 'Urgent';
      case 4: return 'Standard';
      case 5: return 'Non-urgent';
      default: return 'Unknown';
    }
  };
  
  return (
    <div className="flex justify-around gap-2 p-4 border-t mt-auto">
      {counts.map((count, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={cn(
            'flex items-center justify-center w-16 h-16 rounded-md text-white font-bold',
            getBgColor(index)
          )}>
            {count}
          </div>
          <span className="text-xs mt-1 font-medium">{getLabel(index)}</span>
        </div>
      ))}
    </div>
  );
};

export default TriageCountSummary;
