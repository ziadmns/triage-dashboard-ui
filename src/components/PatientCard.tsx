
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface PatientCardProps {
  name: string;
  age: number;
  gender: string;
  urgency: number;
  triageLevel: 1 | 2 | 3 | 4 | 5;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  gender,
  urgency,
  triageLevel
}) => {
  const getBgColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-triage-level1/5 border-triage-level1/30';
      case 2: return 'bg-triage-level2/5 border-triage-level2/30';
      case 3: return 'bg-triage-level3/5 border-triage-level3/30';
      case 4: return 'bg-triage-level4/5 border-triage-level4/30';
      case 5: return 'bg-triage-level5/5 border-triage-level5/30';
      default: return 'bg-card border-border';
    }
  };

  const getUrgencyColor = (level: number) => {
    switch (level) {
      case 1: return 'text-triage-level1';
      case 2: return 'text-triage-level2';
      case 3: return 'text-triage-level3';
      case 4: return 'text-triage-level4';
      case 5: return 'text-triage-level5';
      default: return 'text-primary';
    }
  };

  return (
    <div className={cn(
      'p-3 mb-2 rounded-md border shadow-sm transition-all duration-200 hover:shadow-md',
      getBgColor(triageLevel)
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 text-xs">
            {name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <div>
            <h3 className="font-medium text-sm">{name}</h3>
            <p className="text-xs text-muted-foreground">{age} yrs, {gender}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className={cn(
            'text-sm font-bold',
            getUrgencyColor(triageLevel)
          )}>
            {urgency}%
          </span>
          <span className="text-xs text-muted-foreground">Urgency</span>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
