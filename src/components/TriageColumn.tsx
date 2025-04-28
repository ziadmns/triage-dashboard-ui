
import React from 'react';
import { cn } from '@/lib/utils';
import PatientCard from './PatientCard';

export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  urgency: number;
  triageLevel: 1 | 2 | 3 | 4 | 5;
};

interface TriageColumnProps {
  level: 1 | 2 | 3 | 4 | 5;
  title: string;
  patients: Patient[];
}

const getLevelColor = (level: number) => {
  switch (level) {
    case 1: return 'bg-triage-level1 text-white';
    case 2: return 'bg-triage-level2 text-white';
    case 3: return 'bg-triage-level3 text-white';
    case 4: return 'bg-triage-level4 text-white';
    case 5: return 'bg-triage-level5 text-white';
    default: return 'bg-primary text-primary-foreground';
  }
};

const getBorderColor = (level: number) => {
  switch (level) {
    case 1: return 'border-triage-level1';
    case 2: return 'border-triage-level2';
    case 3: return 'border-triage-level3';
    case 4: return 'border-triage-level4';
    case 5: return 'border-triage-level5';
    default: return 'border-border';
  }
};

const TriageColumn: React.FC<TriageColumnProps> = ({ level, title, patients }) => {
  // Sort patients by urgency (highest first)
  const sortedPatients = [...patients].sort((a, b) => b.urgency - a.urgency);
  
  return (
    <div className={cn(
      'flex flex-col h-full min-w-[220px] flex-1',
      'border-t-4',
      getBorderColor(level)
    )}>
      <div className={cn(
        'p-2 text-center font-semibold',
        getLevelColor(level)
      )}>
        {title}
      </div>
      <div className="flex-1 p-2 overflow-y-auto bg-background/50">
        {sortedPatients.length === 0 ? (
          <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
            No patients
          </div>
        ) : (
          sortedPatients.map(patient => (
            <PatientCard
              key={patient.id}
              name={patient.name}
              age={patient.age}
              gender={patient.gender}
              urgency={patient.urgency}
              triageLevel={level}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TriageColumn;
