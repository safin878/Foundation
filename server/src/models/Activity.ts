import mongoose, { Document, Schema } from "mongoose";
import { ImpactArea, Stat, Outcome } from "../types/activity";

export interface IActivity extends Document {
  slug: string;
  title: string;
  bannerImage: string;
  location: string;
  impactArea: ImpactArea;
  summary: string;
  stats: Stat[];
  objectives: string[];
  outcomes: Outcome[];
}

const ActivitySchema: Schema = new Schema(
  {
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
  },
  { timestamps: true }
);

export default mongoose.model<IActivity>("Activities", ActivitySchema);
