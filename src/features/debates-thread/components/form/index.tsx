"use client";
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

export function DebateForm() {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <PostInput
          name="post"
          control={form.control as unknown as Control<FieldValues>}
          label="What's your Survivor theory today?"
          placeholder="Make it long and interesting!"
          description="You don't need to login to post"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
