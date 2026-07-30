import mongoose, { Document } from 'mongoose';

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  score: number;
}

export interface LeaderboardDocument extends LeaderboardEntry, Document {}

const leaderboardSchema = new mongoose.Schema<LeaderboardDocument>(
  {
    rank: { type: Number, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model<LeaderboardDocument>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;
