export type TeacherType = "taehwan" | "yeji" | "deokbae" | null;

/**
 * 선생님 정보를 담는 인터페이스
 * @property id - 선생님 고유 식별자
 * @property name - 선생님 이름
 * @property description - 선생님 소개 문구 배열
 * @property imagePath - 선생님 이미지 경로
 */
export interface TeacherInfo {
  id: TeacherType;
  name: string;
  description: string[];
  imagePath: string;
}
