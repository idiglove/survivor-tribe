"use server";
const createSubscriber = async (email: string) => {
  const data = {
    email,
    trigger_automation: false,
  };
  const response = await fetch("https://api.sender.net/v2/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDER_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default createSubscriber;
