"use strict";
// import { Request, Response } from "express";
// import Focus from "../models/Focus";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFocusByTitle = exports.getAllFocus = void 0;
const Focus_1 = __importDefault(require("../models/Focus"));
//GET all focus topics
const getAllFocus = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const topics = yield Focus_1.default.find();
        res.json(topics);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch topics", error });
    }
});
exports.getAllFocus = getAllFocus;
// GET  topics by id
const getFocusByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.params;
    try {
        const decodedTitle = decodeURIComponent(title);
        const topic = yield Focus_1.default.findOne({
            title: { $regex: new RegExp(`^${decodedTitle}$`, "i") },
        });
        if (!topic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        return res.json(topic);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch topic", error });
    }
});
exports.getFocusByTitle = getFocusByTitle;
