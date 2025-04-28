
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Patient } from './TriageColumn';
import { Heart, ThermometerSun, HeartPulse, Droplet, BriefcaseMedical } from 'lucide-react';

interface PatientDetailsDialogProps {
  patient: Patient;
  open: boolean;
  onClose: () => void;
}

const PatientDetailsDialog: React.FC<PatientDetailsDialogProps> = ({
  patient,
  open,
  onClose
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{patient.name}'s Medical Details</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Basic Information
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">Age:</p>
              <p>{patient.age} years</p>
              <p className="text-muted-foreground">Gender:</p>
              <p>{patient.gender}</p>
              <p className="text-muted-foreground">Residence:</p>
              <p>{patient.residenceType}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ThermometerSun className="h-5 w-5 text-orange-500" />
              Vital Signs
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">Temperature:</p>
              <p>{patient.temperature}°C</p>
              <p className="text-muted-foreground">Heart Rate:</p>
              <p>{patient.heartRate} bpm</p>
              <p className="text-muted-foreground">Blood Pressure:</p>
              <p>{patient.bloodPressure} mmHg</p>
              <p className="text-muted-foreground">SpO2:</p>
              <p>{patient.spO2}%</p>
              <p className="text-muted-foreground">Respiratory Rate:</p>
              <p>{patient.respiratoryRate} breaths/min</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-pink-500" />
              Cardiac Status
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">Chest Pain Type:</p>
              <p>{patient.chestPainType}</p>
              <p className="text-muted-foreground">Cholesterol:</p>
              <p>{patient.cholesterol} mg/dL</p>
              <p className="text-muted-foreground">Exercise Angina:</p>
              <p>{patient.exerciseAngina ? 'Yes' : 'No'}</p>
              <p className="text-muted-foreground">Heart Disease:</p>
              <p>{patient.heartDisease ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <BriefcaseMedical className="h-5 w-5 text-blue-500" />
              Clinical Assessment
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">Glasgow Score:</p>
              <p>{patient.glasgowScore}</p>
              <p className="text-muted-foreground">Consciousness:</p>
              <p>{patient.consciousness}</p>
              <p className="text-muted-foreground">Respiratory Distress:</p>
              <p>{patient.respiratoryDistress ? 'Yes' : 'No'}</p>
            </div>
          </div>

          <div className="col-span-full space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Droplet className="h-5 w-5 text-purple-500" />
              Additional Information
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">BMI:</p>
              <p>{patient.bmi}</p>
              <p className="text-muted-foreground">Plasma Glucose:</p>
              <p>{patient.plasmaGlucose} mg/dL</p>
              <p className="text-muted-foreground">Smoking Status:</p>
              <p>{patient.smokingStatus}</p>
              <p className="text-muted-foreground">Symptoms:</p>
              <p>{patient.symptoms.join(', ') || 'None'}</p>
              <p className="text-muted-foreground">Risk Factors:</p>
              <p>{patient.riskFactors.join(', ') || 'None'}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PatientDetailsDialog;
