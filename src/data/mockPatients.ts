import { Patient } from '@/components/TriageColumn';

const generateId = () => Math.random().toString(36).substring(2, 10);

const createPatient = (
  name: string, 
  age: number, 
  gender: string, 
  urgency: number, 
  triageLevel: 1 | 2 | 3 | 4 | 5
): Patient => ({
  id: generateId(),
  name,
  age,
  gender,
  urgency,
  triageLevel,
  chestPainType: ['Typical Angina', 'Atypical Angina', 'Non-Anginal', 'Asymptomatic'][Math.floor(Math.random() * 4)],
  cholesterol: Math.floor(Math.random() * (300 - 150) + 150),
  exerciseAngina: Math.random() > 0.5,
  plasmaGlucose: Math.floor(Math.random() * (200 - 70) + 70),
  skinThickness: Math.floor(Math.random() * (50 - 10) + 10),
  bmi: Number((Math.random() * (35 - 18) + 18).toFixed(1)),
  hypertension: Math.random() > 0.7,
  heartDisease: Math.random() > 0.8,
  residenceType: Math.random() > 0.5 ? 'Urban' : 'Rural',
  smokingStatus: ['Never', 'Former', 'Current'][Math.floor(Math.random() * 3)],
  symptoms: ['Chest Pain', 'Shortness of Breath', 'Fatigue'].filter(() => Math.random() > 0.5),
  temperature: Number((Math.random() * (39 - 36) + 36).toFixed(1)),
  heartRate: Math.floor(Math.random() * (120 - 60) + 60),
  respiratoryRate: Math.floor(Math.random() * (30 - 12) + 12),
  bloodPressure: `${Math.floor(Math.random() * (180 - 90) + 90)}/${Math.floor(Math.random() * (110 - 60) + 60)}`,
  spO2: Math.floor(Math.random() * (100 - 85) + 85),
  glasgowScore: Math.floor(Math.random() * (15 - 3) + 3),
  consciousness: ['Alert', 'Verbal', 'Pain', 'Unresponsive'][Math.floor(Math.random() * 4)],
  massiveBleeding: Math.random() > 0.9,
  respiratoryDistress: Math.random() > 0.8,
  riskFactors: ['Diabetes', 'Obesity', 'Smoking', 'Family History'].filter(() => Math.random() > 0.6)
});

export const mockPatients: Patient[] = [
  // Level 1 - Critical (Red)
  createPatient("James Wilson", 67, "Male", 98, 1),
  createPatient("Maria Garcia", 58, "Female", 95, 1),
  createPatient("Robert Johnson", 72, "Male", 92, 1),
  createPatient("Emily Williams", 45, "Female", 90, 1),
  createPatient("David Brown", 61, "Male", 87, 1),
  
  // Level 2 - Emergency (Orange)
  createPatient("Sarah Davis", 34, "Female", 89, 2),
  createPatient("Michael Martinez", 51, "Male", 85, 2),
  createPatient("Jennifer Robinson", 42, "Female", 82, 2),
  createPatient("William Thompson", 59, "Male", 80, 2),
  createPatient("Lisa Anderson", 36, "Female", 77, 2),
  createPatient("Thomas White", 67, "Male", 75, 2),
  createPatient("Karen Jackson", 44, "Female", 72, 2),
  
  // Level 3 - Urgent (Yellow)
  createPatient("Daniel Lee", 28, "Male", 70, 3),
  createPatient("Nancy Harris", 51, "Female", 68, 3),
  createPatient("Christopher Clark", 39, "Male", 65, 3),
  createPatient("Patricia Lewis", 47, "Female", 62, 3),
  createPatient("Matthew Walker", 56, "Male", 60, 3),
  createPatient("Elizabeth Hall", 33, "Female", 58, 3),
  createPatient("Anthony Allen", 41, "Male", 55, 3),
  createPatient("Susan Young", 48, "Female", 52, 3),
  
  // Level 4 - Standard (Green)
  createPatient("Jason Scott", 25, "Male", 48, 4),
  createPatient("Michelle Green", 37, "Female", 45, 4),
  createPatient("Kevin Adams", 29, "Male", 42, 4),
  createPatient("Amanda Baker", 31, "Female", 40, 4),
  createPatient("Ryan Nelson", 22, "Male", 38, 4),
  createPatient("Stephanie Hill", 26, "Female", 35, 4),
  createPatient("Brandon Wright", 24, "Male", 32, 4),
  createPatient("Rebecca King", 34, "Female", 30, 4),
  createPatient("Jonathan Evans", 27, "Male", 28, 4),
  createPatient("Lauren Carter", 30, "Female", 25, 4),
  
  // Level 5 - Non-urgent (Blue)
  createPatient("Brian Phillips", 19, "Male", 22, 5),
  createPatient("Megan Torres", 21, "Female", 20, 5),
  createPatient("Justin Mitchell", 18, "Male", 18, 5),
  createPatient("Heather Collins", 23, "Female", 15, 5),
  createPatient("Kyle Perez", 20, "Male", 12, 5),
  createPatient("Whitney Rogers", 25, "Female", 10, 5),
  createPatient("Zachary Reed", 22, "Male", 8, 5),
  createPatient("Ashley Cook", 24, "Female", 5, 5),
  createPatient("Tyler Bailey", 26, "Male", 3, 5),
];

export const getPatientsByLevel = (level: 1 | 2 | 3 | 4 | 5) => {
  return mockPatients.filter(patient => patient.triageLevel === level);
};

export const getPatientCounts = () => {
  const counts = [0, 0, 0, 0, 0];
  
  mockPatients.forEach(patient => {
    counts[patient.triageLevel - 1]++;
  });
  
  return counts;
};
