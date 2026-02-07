export interface UserProfile {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  height: number;
  weight: number;
  goalWeight: number;
  fitnessGoal: 'weight-loss' | 'muscle-gain' | 'endurance' | 'general-fitness';
}

export interface WorkoutLog {
  id: number;
  date: string;
  type: string;
  duration: number; // in minutes
  caloriesBurned: number;
  exercises: {
    name: string;
    sets?: number;
    reps?: string;
    weight?: number;
    duration?: number; // in minutes
    distance?: number; // in km
  }[];
  notes: string;
}

export interface DailyStats {
  date: string;
  steps: number;
  caloriesBurned: number;
  activeMinutes: number;
  waterIntake: number; // in liters
}

// Mock user profile
export const userProfile: UserProfile = {
  id: 'usr123456',
  name: 'John Smith',
  email: 'john.smith@example.com',
  joinDate: '2023-01-15',
  height: 180, // cm
  weight: 82, // kg
  goalWeight: 75, // kg
  fitnessGoal: 'muscle-gain'
};

// Mock workout logs (last 5 workouts)
export const workoutLogs: WorkoutLog[] = [
  {
    id: 5,
    date: '2023-05-23',
    type: 'Strength Training',
    duration: 65,
    caloriesBurned: 450,
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '8, 8, 6, 6', weight: 85 },
      { name: 'Pull-ups', sets: 3, reps: '10, 8, 6' },
      { name: 'Squats', sets: 4, reps: '12, 10, 10, 8', weight: 100 },
      { name: 'Shoulder Press', sets: 3, reps: '10, 8, 8', weight: 50 }
    ],
    notes: 'Great session, increased bench weight by 5kg'
  },
  {
    id: 4,
    date: '2023-05-21',
    type: 'Cardio',
    duration: 40,
    caloriesBurned: 380,
    exercises: [
      { name: 'Running', duration: 25, distance: 5 },
      { name: 'Jump Rope', duration: 15 }
    ],
    notes: 'Felt tired but pushed through'
  },
  {
    id: 3,
    date: '2023-05-19',
    type: 'Strength Training',
    duration: 70,
    caloriesBurned: 520,
    exercises: [
      { name: 'Deadlift', sets: 4, reps: '8, 6, 6, 5', weight: 120 },
      { name: 'Barbell Rows', sets: 3, reps: '10, 10, 8', weight: 60 },
      { name: 'Lat Pulldown', sets: 3, reps: '12, 10, 10', weight: 65 },
      { name: 'Bicep Curls', sets: 3, reps: '12, 10, 10', weight: 15 }
    ],
    notes: 'Back felt strong today'
  },
  {
    id: 2,
    date: '2023-05-17',
    type: 'HIIT',
    duration: 30,
    caloriesBurned: 350,
    exercises: [
      { name: 'Circuit Training', duration: 30 }
    ],
    notes: 'Intense session, need to improve recovery between sets'
  },
  {
    id: 1,
    date: '2023-05-15',
    type: 'Strength Training',
    duration: 60,
    caloriesBurned: 400,
    exercises: [
      { name: 'Leg Press', sets: 4, reps: '12, 12, 10, 10', weight: 140 },
      { name: 'Leg Extensions', sets: 3, reps: '12, 12, 10', weight: 45 },
      { name: 'Leg Curls', sets: 3, reps: '12, 10, 10', weight: 40 },
      { name: 'Calf Raises', sets: 4, reps: '15, 15, 15, 15', weight: 100 }
    ],
    notes: 'Focused on form, especially during leg press'
  }
];

// Mock daily statistics (for the past week)
const today = new Date();
export const dailyStats: DailyStats[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(today);
  date.setDate(date.getDate() - i);
  
  // Generate more realistic data with some variation
  // Weekends (0 = Sunday, 6 = Saturday) have lower activity
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  
  // Base values
  let steps = isWeekend ? 
    Math.floor(Math.random() * 3000) + 3000 : // 3000-6000 steps on weekends
    Math.floor(Math.random() * 5000) + 7000;  // 7000-12000 steps on weekdays
  
  // Add some trend and randomization
  steps = Math.max(2000, Math.floor(steps * (1 + (Math.sin(i / 10) * 0.2))));
  
  // Calculate other metrics based on steps
  const caloriesBurned = Math.floor(steps * 0.04) + Math.floor(Math.random() * 200);
  const activeMinutes = Math.floor(steps / 130) + Math.floor(Math.random() * 15);
  
  // Water intake with some randomization
  const waterIntake = parseFloat((1.5 + Math.random() * 1.2).toFixed(1));
  
  return {
    date: date.toISOString().split('T')[0],
    steps,
    caloriesBurned,
    activeMinutes,
    waterIntake
  };
}); 