import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/shared/lib/mongoose";
import Debate from "@/shared/models/debate";

export const createDebate = async (formData: FormData) => {
  await connectToMongoDB();
  const post = formData.get("post");
  const user = formData.get("user");
  try {
    const newDebate = await Debate.create({
      post,
      user,
    });
    newDebate.save();
    revalidatePath("/");
    return newDebate.toString();
  } catch (error) {
    console.log(error);
    return { message: "error creating debate" };
  }
};
