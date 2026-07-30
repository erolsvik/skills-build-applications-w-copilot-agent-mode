import mongoose, { Document } from 'mongoose';

export interface Activity {
  id: string;
  userId: string;
  type: string;
  durationMinutes: number;
  calories: number;
}

export interface ActivityDocument extends Activity, Document {}

const activitySchema = new mongoose.Schema<ActivityDocument>(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number, required: true },
  },
  { timestamps: true }
);

const ActivityModel = mongoose.models.Activity || mongoose.model<ActivityDocument>('Activity', activitySchema);
export default ActivityModel;
