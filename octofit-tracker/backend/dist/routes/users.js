"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const users = await user_1.default.find().lean();
    res.json(users);
});
router.get('/:id', async (req, res) => {
    const user = await user_1.default.findOne({ id: req.params.id }).lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const count = await user_1.default.countDocuments();
    const newUser = new user_1.default({
        id: `u${count + 1}`,
        name: name || `User ${count + 1}`,
        email: email || `user${count + 1}@example.com`,
    });
    await newUser.save();
    res.status(201).json(newUser);
});
exports.default = router;
