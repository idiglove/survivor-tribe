"use client";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import createSubscriber from "../../api/create-subscriber";
import ModalButton from "@/shared/components/modal-button";

const GetUpdateButton = () => {
  const [email, setEmail] = useState("");
  const onClickGetUpdates = async (email: string) => {
    await createSubscriber(email);
  };
  return (
    <ModalButton
      text="Get Updates"
      dialogTitle="Get Updates"
      dialogDescription="Enter your email to get updates from Survivor Tribe Fan Site!"
      dialogContent={
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-200 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onClickGetUpdates(email)}
          >
            Subscribe
          </Button>
        </div>
      }
    />
  );
};

export default GetUpdateButton;
