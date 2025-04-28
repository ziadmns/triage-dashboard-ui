import { Patient } from '@/components/TriageColumn';

// Helper function to convert gender number to string
const getGenderString = (gender: number): string => {
  return gender === 1.0 ? 'Male' : 'Female';
};

// Helper function to convert chest pain type number to string
const getChestPainType = (type: number): string => {
  const types = {
    1: 'Typical Angina',
    2: 'Atypical Angina',
    3: 'Non-Anginal',
    4: 'Asymptomatic'
  };
  return types[type as keyof typeof types] || 'Unknown';
};

const patientData = [
  {
    "ID": 0,
    "age": 40,
    "gender": 1.0,
    "chest pain type": 2,
    "cholesterol": 294,
    "exercise angina": 0,
    "plasma glucose": 108.0,
    "skin_thickness": 43,
    "bmi": 19.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Difficulty breathing, Headache",
    "Temperature (°C)": 37.5,
    "Heart Rate (bpm)": 86,
    "Respiratory Rate (breaths/min)": 12,
    "Blood Pressure (mmHg)": "123/78",
    "SpO2 (%)": 99,
    "Glasgow Score": 14,
    "Consciousness": "Awake",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "None",
    "display_triage_level": 3,
    "priority_score": 50,
    "priority_score_percentage": 55.56
  },
  {
    "ID": 1,
    "age": 49,
    "gender": 0.0,
    "chest pain type": 3,
    "cholesterol": 180,
    "exercise angina": 0,
    "plasma glucose": 75.0,
    "skin_thickness": 47,
    "bmi": 18.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Chest pain, Weakness",
    "Temperature (°C)": 37.3,
    "Heart Rate (bpm)": 123,
    "Respiratory Rate (breaths/min)": 24,
    "Blood Pressure (mmHg)": "93/58",
    "SpO2 (%)": 86,
    "Glasgow Score": 9,
    "Consciousness": "Responds to Pain",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "Hypertension, Cardiovascular disease",
    "display_triage_level": 2,
    "priority_score": 70,
    "priority_score_percentage": 51.85
  },
  {
    "ID": 2,
    "age": 37,
    "gender": 1.0,
    "chest pain type": 2,
    "cholesterol": 294,
    "exercise angina": 0,
    "plasma glucose": 98.0,
    "skin_thickness": 53,
    "bmi": 23.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Difficulty breathing",
    "Temperature (°C)": 36.7,
    "Heart Rate (bpm)": 94,
    "Respiratory Rate (breaths/min)": 14,
    "Blood Pressure (mmHg)": "130/82",
    "SpO2 (%)": 95,
    "Glasgow Score": 13,
    "Consciousness": "Awake",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "Cardiovascular disease",
    "display_triage_level": 4,
    "priority_score": 20,
    "priority_score_percentage": 30.77
  },
  {
    "ID": 3,
    "age": 48,
    "gender": 0.0,
    "chest pain type": 4,
    "cholesterol": 214,
    "exercise angina": 1,
    "plasma glucose": 72.0,
    "skin_thickness": 51,
    "bmi": 18.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Fever",
    "Temperature (°C)": 39.4,
    "Heart Rate (bpm)": 124,
    "Respiratory Rate (breaths/min)": 28,
    "Blood Pressure (mmHg)": "136/71",
    "SpO2 (%)": 88,
    "Glasgow Score": 10,
    "Consciousness": "Responds to Pain",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "Cancer",
    "display_triage_level": 2,
    "priority_score": 95,
    "priority_score_percentage": 70.37
  },
  {
    "ID": 4,
    "age": 54,
    "gender": 1.0,
    "chest pain type": 3,
    "cholesterol": 195,
    "exercise angina": 0,
    "plasma glucose": 108.0,
    "skin_thickness": 90,
    "bmi": 21.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Weakness",
    "Temperature (°C)": 37.5,
    "Heart Rate (bpm)": 70,
    "Respiratory Rate (breaths/min)": 20,
    "Blood Pressure (mmHg)": "122/79",
    "SpO2 (%)": 99,
    "Glasgow Score": 13,
    "Consciousness": "Awake",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "Cancer",
    "display_triage_level": 5,
    "priority_score": 25,
    "priority_score_percentage": 41.67
  },
  {
    "ID": 5,
    "age": 39,
    "gender": 1.0,
    "chest pain type": 3,
    "cholesterol": 294,
    "exercise angina": 0,
    "plasma glucose": 86.0,
    "skin_thickness": 49,
    "bmi": 21.0,
    "hypertension": 0,
    "heart_disease": 0,
    "Residence_type": "Urban",
    "smoking_status": "never smoked",
    "Symptom": "Abdominal pain",
    "Temperature (°C)": 37.5,
    "Heart Rate (bpm)": 123,
    "Respiratory Rate (breaths/min)": 25,
    "Blood Pressure (mmHg)": "145/65",
    "SpO2 (%)": 92,
    "Glasgow Score": 11,
    "Consciousness": "Responds to Pain",
    "Massive Bleeding": NaN,
    "Respiratory Distress": NaN,
    "Risk Factors": "Hypertension, Diabetes",
    "display_triage_level": 2,
    "priority_score": 55,
    "priority_score_percentage": 40.74
  }
];

export const mockPatients: Patient[] = patientData.map(p => ({
  id: p.ID.toString(),
  name: `Patient ${p.ID + 1}`,
  age: p.age,
  gender: getGenderString(p.gender),
  urgency: p.priority_score_percentage, // Use the new priority score percentage
  triageLevel: p.display_triage_level as 1 | 2 | 3 | 4 | 5,
  chestPainType: getChestPainType(p['chest pain type']),
  cholesterol: p.cholesterol,
  exerciseAngina: p['exercise angina'] === 1,
  plasmaGlucose: p['plasma glucose'],
  skinThickness: p.skin_thickness,
  bmi: p.bmi,
  hypertension: p.hypertension === 1,
  heartDisease: p.heart_disease === 1,
  residenceType: p.Residence_type,
  smokingStatus: p.smoking_status,
  symptoms: p.Symptom.split(', '),
  temperature: p['Temperature (°C)'],
  heartRate: p['Heart Rate (bpm)'],
  respiratoryRate: p['Respiratory Rate (breaths/min)'],
  bloodPressure: p['Blood Pressure (mmHg)'],
  spO2: p['SpO2 (%)'],
  glasgowScore: p['Glasgow Score'],
  consciousness: p.Consciousness,
  massiveBleeding: false,
  respiratoryDistress: false,
  riskFactors: p['Risk Factors'] === 'None' ? [] : p['Risk Factors'].split(', ')
}));

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
