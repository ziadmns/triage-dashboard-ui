
import React from 'react';
import TriageColumn from '@/components/TriageColumn';
import TriageCountSummary from '@/components/TriageCountSummary';
import { getPatientsByLevel, getPatientCounts } from '@/data/mockPatients';

const Index = () => {
  // Get patients for each triage level
  const criticalPatients = getPatientsByLevel(1);
  const emergencyPatients = getPatientsByLevel(2);
  const urgentPatients = getPatientsByLevel(3);
  const standardPatients = getPatientsByLevel(4);
  const nonUrgentPatients = getPatientsByLevel(5);
  
  // Get count of patients in each level
  const patientCounts = getPatientCounts();
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold text-center">Emergency Department Triage Dashboard</h1>
      </header>
      
      <div className="flex-grow p-4 flex flex-col">
        <main className="flex flex-1 gap-3 overflow-hidden">
          <TriageColumn 
            level={1} 
            title="Critical" 
            patients={criticalPatients} 
          />
          <TriageColumn 
            level={2} 
            title="Emergency" 
            patients={emergencyPatients} 
          />
          <TriageColumn 
            level={3} 
            title="Urgent" 
            patients={urgentPatients} 
          />
          <TriageColumn 
            level={4} 
            title="Standard" 
            patients={standardPatients} 
          />
          <TriageColumn 
            level={5} 
            title="Non-urgent" 
            patients={nonUrgentPatients} 
          />
        </main>
        
        <TriageCountSummary counts={patientCounts} />
      </div>
    </div>
  );
};

export default Index;
