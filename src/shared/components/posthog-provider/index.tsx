"use client";
import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

interface PostHogProviderProps {
  children: React.ReactNode;
}

const PostHogProvider = ({ children }: PostHogProviderProps) => {
  const isInitialized = useRef(false);  // Prevents re-initialization

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY && !isInitialized.current) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
        autocapture: true,
        person_profiles: "identified_only",
      });
      isInitialized.current = true;
    }
  }, []);

  return <PostHogReactProvider client={posthog}>{children}</PostHogReactProvider>;
};

export default PostHogProvider;
