export interface WorkoutPlan {
  id: number;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
  image: string;
  calories: string;
  workouts: Workout[];
}

export interface Workout {
  day: number;
  name: string;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  duration?: string;
}

export const workoutPlans: WorkoutPlan[] = [
  {
    id: 1,
    title: 'Full Body Strength',
    level: 'beginner',
    duration: '4 weeks',
    description: 'Perfect for beginners looking to build a foundation of strength. This plan focuses on full-body workouts with basic movements.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    calories: '300-400',
    workouts: [
      {
        day: 1,
        name: 'Full Body Basics',
        exercises: [
          { name: 'Bodyweight Squats', sets: 3, reps: '12', rest: '60 sec' },
          { name: 'Push-ups (modified if needed)', sets: 3, reps: '8-10', rest: '60 sec' },
          { name: 'Dumbbell Rows', sets: 3, reps: '10 each side', rest: '60 sec' },
          { name: 'Glute Bridges', sets: 3, reps: '15', rest: '45 sec' },
          { name: 'Plank', sets: 3, reps: '30 sec hold', rest: '45 sec' }
        ]
      },
      {
        day: 2,
        name: 'Active Recovery',
        exercises: [
          { name: 'Walking', sets: 1, reps: '20-30 min', rest: 'N/A' },
          { name: 'Light Stretching', sets: 1, reps: '10-15 min', rest: 'N/A' }
        ]
      },
      {
        day: 3,
        name: 'Lower Body Focus',
        exercises: [
          { name: 'Goblet Squats', sets: 3, reps: '12', rest: '60 sec' },
          { name: 'Lunges', sets: 3, reps: '10 each leg', rest: '60 sec' },
          { name: 'Romanian Deadlift', sets: 3, reps: '10', rest: '60 sec' },
          { name: 'Calf Raises', sets: 3, reps: '15', rest: '45 sec' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Hypertrophy Program',
    level: 'intermediate',
    duration: '8 weeks',
    description: 'A program designed for muscle growth, with a focus on progressive overload and proper nutrition.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
    calories: '400-500',
    workouts: [
      {
        day: 1,
        name: 'Chest and Triceps',
        exercises: [
          { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90 sec' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10-12', rest: '75 sec' },
          { name: 'Cable Flyes', sets: 3, reps: '12-15', rest: '60 sec' },
          { name: 'Tricep Pushdowns', sets: 3, reps: '12', rest: '60 sec' },
          { name: 'Overhead Tricep Extension', sets: 3, reps: '10-12', rest: '60 sec' }
        ]
      },
      {
        day: 2,
        name: 'Back and Biceps',
        exercises: [
          { name: 'Pull-ups/Lat Pulldowns', sets: 4, reps: '8-10', rest: '90 sec' },
          { name: 'Bent Over Rows', sets: 3, reps: '10-12', rest: '75 sec' },
          { name: 'Seated Cable Rows', sets: 3, reps: '12', rest: '60 sec' },
          { name: 'Barbell Curls', sets: 3, reps: '10-12', rest: '60 sec' },
          { name: 'Hammer Curls', sets: 3, reps: '12', rest: '60 sec' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Athletic Performance',
    level: 'advanced',
    duration: '12 weeks',
    description: 'Designed for athletes looking to improve performance, power, and functional strength with complex movement patterns.',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80',
    calories: '500-700',
    workouts: [
      {
        day: 1,
        name: 'Power and Explosiveness',
        exercises: [
          { name: 'Power Cleans', sets: 5, reps: '3-5', rest: '2 min' },
          { name: 'Box Jumps', sets: 4, reps: '6', rest: '90 sec' },
          { name: 'Medicine Ball Throws', sets: 3, reps: '8', rest: '90 sec' },
          { name: 'Plyometric Push-ups', sets: 3, reps: '8-10', rest: '90 sec' }
        ]
      },
      {
        day: 2,
        name: 'Strength and Conditioning',
        exercises: [
          { name: 'Front Squat', sets: 4, reps: '6', rest: '2 min' },
          { name: 'Pull-ups', sets: 4, reps: '8-10', rest: '90 sec' },
          { name: 'Barbell Push Press', sets: 4, reps: '6-8', rest: '90 sec' },
          { name: 'Kettlebell Swings', sets: 3, reps: '15', rest: '75 sec' },
          { name: 'Sled Push/Pull', sets: 3, reps: '30 sec work', rest: '90 sec' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'HIIT Fat Burner',
    level: 'intermediate',
    duration: '6 weeks',
    description: 'High-intensity interval training to maximize calorie burn and boost metabolism for rapid fat loss.',
    image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=600&q=80',
    calories: '500-600',
    workouts: [
      {
        day: 1,
        name: 'Cardio Blast',
        exercises: [
          { name: 'Burpees', sets: 4, reps: '10', rest: '30 sec' },
          { name: 'Mountain Climbers', sets: 4, reps: '30 sec', rest: '20 sec' },
          { name: 'Jump Squats', sets: 4, reps: '15', rest: '30 sec' },
          { name: 'High Knees', sets: 4, reps: '30 sec', rest: '20 sec' }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Yoga & Flexibility',
    level: 'beginner',
    duration: '4 weeks',
    description: 'Improve flexibility, balance, and mental clarity with this yoga-focused program perfect for recovery days.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    calories: '150-250',
    workouts: [
      {
        day: 1,
        name: 'Morning Flow',
        exercises: [
          { name: 'Sun Salutation', sets: 5, reps: 'Full sequence', rest: '30 sec' },
          { name: 'Warrior Poses', sets: 3, reps: '30 sec each side', rest: '15 sec' },
          { name: 'Tree Pose', sets: 3, reps: '45 sec each leg', rest: '15 sec' }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Powerlifting Basics',
    level: 'advanced',
    duration: '10 weeks',
    description: 'Master the big three lifts - squat, bench, deadlift - with a focus on strength and proper form.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    calories: '400-500',
    workouts: [
      {
        day: 1,
        name: 'Squat Day',
        exercises: [
          { name: 'Back Squat', sets: 5, reps: '5', rest: '3 min' },
          { name: 'Pause Squats', sets: 3, reps: '3', rest: '2 min' },
          { name: 'Leg Press', sets: 3, reps: '10', rest: '90 sec' }
        ]
      }
    ]
  }
];