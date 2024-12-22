"use client";
import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

interface PostHogProviderProps {
  children: React.ReactNode;
}

const PostHogProvider = ({ children }: PostHogProviderProps) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    });
  }
  return (
    <PostHogReactProvider client={posthog}>{children}</PostHogReactProvider>
  );
};

export default PostHogProvider;