"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { generateUsername } from "unique-username-generator";
import Debate from "@/shared/models/debate";
import { connectToMongoDB } from "@/shared/lib/mongoose";
import { DebateFormSchema } from "../components/form";
import { cookies } from "next/headers";

export const createDebate = async (
  formData: z.infer<typeof DebateFormSchema>
) => {
  await connectToMongoDB();
  const { post } = formData ?? {};
  let user;
  const cookieStore = cookies();
  const userFromStorage = cookieStore.get("user");

  if (userFromStorage) {
    user = userFromStorage.value;
  } else {
    user = generateUsername("-", 0, 15);
    cookieStore.set("user", user);
  }

  try {
    const newDebate = await Debate.create({
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
