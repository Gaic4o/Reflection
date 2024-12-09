export interface ResultReportItem {
  context: string;
  goodPoint: string;
  improvement: string;
  cheerUp: string;
  feelingWhether: string;
}

export interface ResultReportProps {
  mainContext: HomeFunnelContext;
}

export interface RetroResponse {
  context: string;
}

export interface FeedbackResponse {
  goodPoint: string;
  improvement: string;
  cheerUp: string;
  feelingWhether: string;
}

export interface HomeFunnelContext {
  teacherNm: string;
  userNm: string;
  team: string;
  experience: string;
  retroType: ThreePeriodFormProps["type"];
  retroAnswer1: string;
  retroAnswer2: string;
  retroAnswer3: string;
}

export interface ThreePeriodFormProps {
  type: "KPT" | "YWT";
}

export interface ShareRequest {
  context: string;
  teacherNm: string;
  goodPoint: string;
  improvement: string;
  cheerUp: string;
  feelingWhether: string;
}

export interface ShareResponse {
  uuid: string;
}
