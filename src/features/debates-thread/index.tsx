import * as React from "react";
import { WATCH_PARAMOUNT } from "@/shared/constants";
import { DebateForm } from "./components/form";

const DebatesThread = () => {
  return (
    <div id={WATCH_PARAMOUNT} className="flex flex-col items-center px-8">
      <h2 className="w-full text-3xl font-bold text-center my-8">
        Debate about Survivor Theories here!
      </h2>
      <DebateForm />
    </div>
  );
};

export default DebatesThread;
