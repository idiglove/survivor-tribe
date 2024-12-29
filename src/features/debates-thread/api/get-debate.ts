"use server";
import Debate from "@/shared/models/debate";

export const getDebate = async () => {
  try {
    const newDebate = await Debate.find({});
    return JSON.parse(JSON.stringify(newDebate));
  } catch (error) {
    console.log(error);
    return { message: "error creating debate" };
  }
};
