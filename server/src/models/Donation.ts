import { Document, model, Schema } from "mongoose";

export interface Donation extends Document {
  transactionId: string;
  amount: number;
  name: string;
  email: string;
  phone: string;
  status: "pending" | "completed" | "failed";
  sslcommerzTranId?: string;
  sslcommerzValId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const donationSchema = new Schema<Donation>(
  {
    transactionId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    sslcommerzTranId: { type: String },
    sslcommerzValId: { type: String },
  },
  {
    timestamps: true,
  }
);

export const DonationModel = model<Donation>("Donation", donationSchema);
