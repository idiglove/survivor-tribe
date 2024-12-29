"use client";
import dayjs from "dayjs";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/shared/components/ui/form";
import { useToast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/components/ui/button";
import { PostInput } from "@/shared/components/post-input";
import { createDebate } from "../../api/create-debate";

export const DebateFormSchema = z.object({
  post: z
    .string()
    .min(10, {
      message: "Your post should be lengthy otherwise it will be boring.",
    })
    .max(500, {
      message: "That's too much debate for one post.",
    }),
});

interface DebateFormProps {
  debates: {
    post: string;
    user: string;
    createdAt: string;
  }[];
}

export function DebateForm({ debates }: DebateFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof DebateFormSchema>>({
    resolver: zodResolver(DebateFormSchema),
  });

  function onSubmit(data: z.infer<typeof DebateFormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    createDebate(data);
  }

  return (
    <div className="flex flex-col text-center w-full items-center gap-8">
      <div className="flex flex-col gap-4">
        {debates?.map((debate, i) => {
          return (
            <div key={i} className="flex flex-col gap-2">
              <p className="text-xl">{debate.post}</p>
              <div className="flex gap-2 items-center">
                <Image
                  src="/user-placeholder.png"
                  alt="user placeholder"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <h4 className="font-semibold text-md">{debate.user}</h4>
              </div>
              <span className="text-xs">
                {dayjs(debate.createdAt).format("MMMM DD YYYY")}
              </span>
            </div>
          );
        })}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <PostInput
            name="post"
            control={form.control as unknown as Control<FieldValues>}
            label="What's your Survivor theory today?"
            placeholder="Make it long and interesting!"
            description="You don't need to login to post. As long you don't clear the cache, you can keep posting with the same username."
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
