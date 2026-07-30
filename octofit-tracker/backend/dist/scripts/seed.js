"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const team_1 = __importDefault(require("../models/team"));
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const workout_1 = __importDefault(require("../models/workout"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Seed the octofit_db database with test data');
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.default.deleteMany({}),
            team_1.default.deleteMany({}),
            activity_1.default.deleteMany({}),
            leaderboard_1.default.deleteMany({}),
            workout_1.default.deleteMany({}),
        ]);
        const users = await user_1.default.create([
            { id: 'u1', name: 'Avery Jones', email: 'avery.jones@example.com' },
            { id: 'u2', name: 'Sam Lee', email: 'sam.lee@example.com' },
            { id: 'u3', name: 'Jordan Patel', email: 'jordan.patel@example.com' },
        ]);
        const teams = await team_1.default.create([
            { id: 't1', name: 'Octo Warriors', members: ['u1', 'u2'] },
            { id: 't2', name: 'Fit Falcons', members: ['u2', 'u3'] },
        ]);
        const workouts = await workout_1.default.create([
            { id: 'w1', title: 'Full Body Strength', durationMinutes: 40, difficulty: 'intermediate' },
            { id: 'w2', title: 'Morning Cardio', durationMinutes: 25, difficulty: 'beginner' },
            { id: 'w3', title: 'HIIT Power Session', durationMinutes: 30, difficulty: 'advanced' },
        ]);
        const activities = await activity_1.default.create([
            { id: 'a1', userId: 'u1', type: 'run', durationMinutes: 30, calories: 280 },
            { id: 'a2', userId: 'u2', type: 'yoga', durationMinutes: 45, calories: 160 },
            { id: 'a3', userId: 'u3', type: 'cycling', durationMinutes: 50, calories: 420 },
        ]);
        const leaderboard = await leaderboard_1.default.create([
            { rank: 1, userId: 'u1', name: 'Avery Jones', score: 980 },
            { rank: 2, userId: 'u3', name: 'Jordan Patel', score: 930 },
            { rank: 3, userId: 'u2', name: 'Sam Lee', score: 860 },
        ]);
        console.log(`Seeded ${users.length} users, ${teams.length} teams, ${workouts.length} workouts, ${activities.length} activities, and ${leaderboard.length} leaderboard entries.`);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
