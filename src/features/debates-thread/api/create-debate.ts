"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/shared/lib/mongoose";
import { generateUsername } from "unique-username-generator";
import { DebateFormSchema } from "../components/form";

export const createDebate = async (
  formData: z.infer<typeof DebateFormSchema>
) => {
  const mongo = await connectToMongoDB();
  const { models } = mongo ?? {};
  const { post } = formData ?? {};
  const user = generateUsername("-", 0, 15);
  try {
    const newDebate = await models.debates.create({
      post,
      user,
    });
    revalidatePath("/");
    return newDebate.toString();
  } catch (error) {
    console.log(error);
    return { message: "error creating debate" };
  }
};
