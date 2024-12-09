import { ShareRequest, ShareResponse } from "../model";

export const fetchShare = async (
  shareData: ShareRequest
): Promise<string | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shareData),
    });

    if (!response.ok) {
      throw new Error("Share request failed");
    }

    const data: ShareResponse = await response.json();
    return data.uuid;
  } catch (error) {
    console.error("Failed to share:", error);
    return null;
  }
};
