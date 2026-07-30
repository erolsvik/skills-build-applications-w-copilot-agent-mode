import mongoose, { Document } from 'mongoose';

export interface Workout {
  id: string;
  title: string;
  durationMinutes: number;
  difficulty: string;
}

export interface WorkoutDocument extends Workout, Document {}

const workoutSchema = new mongoose.Schema<WorkoutDocument>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.models.Workout || mongoose.model<WorkoutDocument>('Workout', workoutSchema);
export default WorkoutModel;
