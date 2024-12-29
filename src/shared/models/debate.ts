import mongoose, { Document, Model } from "mongoose";

export interface IDebate {
  post: string;
  user: string;
}

export interface IDebateDocument extends IDebate, Document {
  createdAt: Date;
  updatedAt: Date;
}

export const debateSchema = new mongoose.Schema<IDebateDocument>(
  {
    post: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

const Debate: Model<IDebateDocument> =
  mongoose.models?.debates || mongoose.model("debates", debateSchema);

export default Debate;
