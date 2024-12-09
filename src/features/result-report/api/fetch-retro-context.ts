import { HomeFunnelContext } from "@/src/pages/home/ui/home-page";
import { RetroResponse } from "../model";

export const fetchRetroContext = async (
  mainContext: HomeFunnelContext
): Promise<string | null> => {
  try {
    const response = await fetch(`${process.env.API_URL}/retrospect`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        teacherNm: mainContext.teacherNm,
        userNm: mainContext.userNm,
        team: mainContext.team,
        experience: mainContext.experience,
        retroType: mainContext.retroType,
        retroAnswer1: mainContext.retroAnswer1,
        retroAnswer2: mainContext.retroAnswer2,
        retroAnswer3: mainContext.retroAnswer3,
      }),
    });

    const data: RetroResponse = await response.json();
    return data.context;
  } catch (error) {
    console.error("Failed to fetch retro context:", error);
    return null;
  }
};
