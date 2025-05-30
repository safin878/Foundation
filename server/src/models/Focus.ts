import mongoose, { Schema, Document } from "mongoose";

export interface IFocus extends Document {
  _id: number;
  title: string;
  image: string;
  description: string;
}

const focusSchema = new Schema<IFocus>(
  {
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Focus = mongoose.model<IFocus>("Focus", focusSchema);

export default Focus;
