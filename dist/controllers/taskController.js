"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskModel_1 = require("../models/taskModel");
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel_1.Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.Task.findById(req.params.id);
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
            return; // Ensure the function returns void
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = new taskModel_1.Task(req.body);
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(400).json({ message: 'Error creating task', error });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTask = yield taskModel_1.Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            res.status(404).json({ message: 'Task not found' });
            return; // Ensure the function returns void
        }
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(400).json({ message: 'Error updating task', error });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield taskModel_1.Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            res.status(404).json({ message: 'Task not found' });
            return; // Ensure the function returns void
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});
exports.deleteTask = deleteTask;
