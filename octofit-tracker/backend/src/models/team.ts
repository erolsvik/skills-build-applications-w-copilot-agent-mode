import mongoose, { Document } from 'mongoose';

export interface Team {
  id: string;
  name: string;
  members: string[];
}

export interface TeamDocument extends Team, Document {}

const teamSchema = new mongoose.Schema<TeamDocument>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    members: { type: [String], default: [] },
  },
  { timestamps: true }
);

const TeamModel = mongoose.models.Team || mongoose.model<TeamDocument>('Team', teamSchema);
export default TeamModel;
