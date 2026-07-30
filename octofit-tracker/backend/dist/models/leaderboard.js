"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const leaderboardSchema = new mongoose_1.default.Schema({
    rank: { type: Number, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    score: { type: Number, required: true },
}, { timestamps: true });
const LeaderboardModel = mongoose_1.default.models.Leaderboard || mongoose_1.default.model('Leaderboard', leaderboardSchema);
exports.default = LeaderboardModel;
