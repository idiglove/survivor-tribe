"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Control, FieldValues } from "react-hook-form";

interface PostInputProps {
  control?: Control<FieldValues>;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  disabled?: boolean;
}

export function PostInput({
  control,
  name,
  label,
  placeholder,
  description,
  disabled,
}: PostInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none"
              disabled={disabled}
              style={{
                resize: "vertical",
              }}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
