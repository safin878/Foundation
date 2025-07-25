"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const ActivitySchema = new mongoose_1.Schema({
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    bannerImage: { type: String, required: true },
    location: { type: String, required: true },
    impactArea: {
        directBeneficiaries: { type: String, required: true },
        indirectBeneficiaries: { type: String, required: true },
        schools: { type: String, required: true },
        communities: { type: String, required: true },
    },
    summary: { type: String, required: true },
    stats: [
        {
            icon: { type: String, required: true },
            value: { type: String, required: true },
            label: { type: String, required: true },
        },
    ],
    objectives: [{ type: String, required: true }],
    outcomes: [
        {
            title: { type: String, required: true },
            icon: { type: String, required: true },
            content: { type: String, required: true },
        },
    ],
    card: {
        type: {
            type: { type: String, required: true },
            date: { type: String, required: true },
            title: { type: String, required: true },
            imageUrl: { type: String, required: true },
        },
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Activities", ActivitySchema);
