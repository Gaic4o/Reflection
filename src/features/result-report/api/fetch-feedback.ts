import { FeedbackResponse } from "../model";

export const fetchFeedback = async (
  context: string
): Promise<FeedbackResponse | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ context }),
    });

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch feedback:", error);
    return null;
  }
};
