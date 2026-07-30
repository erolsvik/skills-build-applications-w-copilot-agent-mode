"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const workoutSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
}, { timestamps: true });
const WorkoutModel = mongoose_1.default.models.Workout || mongoose_1.default.model('Workout', workoutSchema);
exports.default = WorkoutModel;
