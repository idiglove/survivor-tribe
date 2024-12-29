import { WATCH_PARAMOUNT } from "@/shared/constants";
import { DebateForm } from "./components/form";
import { getDebate } from "./api/get-debate";

const DebatesThread = async () => {
  const debates = await getDebate();
  return (
    <div id={WATCH_PARAMOUNT} className="flex flex-col items-center px-8">
      <h2 className="w-full text-3xl font-bold text-center my-8">
        Debate about Survivor Theories here!
      </h2>
      <DebateForm debates={debates} />
    </div>
  );
};

export default DebatesThread;
