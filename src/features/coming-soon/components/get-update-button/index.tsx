"use client";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import createSubscriber from "../../api/create-subscriber";
import ModalButton from "@/shared/components/modal-button";

interface GetUpdateButtonProps {
  text?: string;
  dialogTitle?: string;
  dialogDescription?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

const GetUpdateButton = ({
  text = "Get Updates",
  dialogTitle = "Get Updates",
  dialogDescription = "Enter your email to get updates from Survivor Tribe Fan Site!",
  buttonText = "Subscribe",
  onSubscribe,
}: GetUpdateButtonProps) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const onClickGetUpdates = async (email: string) => {
    await createSubscriber(email);
    setIsSubscribed(true);
    onSubscribe?.(email);
  };
  return (
    <ModalButton
      text={text}
      dialogTitle={dialogTitle}
      dialogDescription={dialogDescription}
      dialogContent={
        <div className="flex flex-col gap-4">
          {isSubscribed ? (
            <p className="text-secondary font-bold">
              You have successfully subscribed!
            </p>
          ) : (
            <>
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
                {buttonText}
              </Button>
            </>
          )}
        </div>
      }
    />
  );
};

export default GetUpdateButton;
