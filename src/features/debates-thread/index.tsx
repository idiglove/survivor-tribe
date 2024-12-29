"use client";
import { useEffect, useState } from "react";
import { WATCH_PARAMOUNT } from "@/shared/constants";
import { DebateForm } from "./components/form";
import { getDebate } from "./api/get-debate";

const DebatesThread = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const debates = await getDebate();
      setData(debates);
    };
    fetchData();
  }, []);
  return (
    <div id={WATCH_PARAMOUNT} className="flex flex-col items-center px-8">
      <h2 className="w-full text-3xl font-bold text-center my-8">
        Debate about Survivor Theories here!
      </h2>
      <DebateForm debates={data} />
    </div>
  );
};

export default DebatesThread;
