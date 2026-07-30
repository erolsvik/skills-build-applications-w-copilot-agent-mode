"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = __importDefault(require("../models/activity"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const activities = await activity_1.default.find().lean();
    res.json(activities);
});
router.get('/:id', async (req, res) => {
    const activity = await activity_1.default.findOne({ id: req.params.id }).lean();
    if (!activity) {
        return res.status(404).json({ message: 'Activity not found' });
    }
    res.json(activity);
});
router.post('/', async (req, res) => {
    const { userId, type, durationMinutes, calories } = req.body;
    const count = await activity_1.default.countDocuments();
    const newActivity = new activity_1.default({
        id: `a${count + 1}`,
        userId: userId || 'u1',
        type: type || 'workout',
        durationMinutes: durationMinutes || 30,
        calories: calories || 0,
    });
    await newActivity.save();
    res.status(201).json(newActivity);
});
exports.default = router;
