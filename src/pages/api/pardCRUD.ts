import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

if (!API_URL) {
  throw new Error("🚨 API_URL이 정의되지 않았습니다! .env.local을 확인하세요.");
}

// 사용자명 POST → userId 반환
export const postUsername = async (username: string): Promise<number | null> => {
  try {
    const res = await axios.post(`${API_URL}/question/start`, { name: username });
    if (res.data?.id) {
      return res.data.id;
    } else {
      console.error("🚨 유저 ID가 응답되지 않음:", res.data);
      return null;
    }
  } catch (error) {
    console.error("🚨 사용자 등록 실패:", error);
    return null;
  }
};

// 질문 구조
export interface questionEntity {
  id: number;
  questionText: string;
  name: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

// 다음 질문 GET (name만 전달)
export const fetchNextQuestion = async (
  name: string
): Promise<questionEntity | null> => {
  try {
    const res = await axios.get(`${API_URL}/question/next`, {
      params: { name }
    });
    if (res.data && typeof res.data === "object") {
      return res.data;
    } else {
      console.error("🚨 질문 형식이 이상함:", res.data);
      return null;
    }
  } catch (error) {
    console.error("🚨 다음 질문 요청 실패:", error);
    return null;
  }
};

// 응답 DTO
export interface Answer {
  questionId: number;
  userAnswer: string; // ex: "option3" 또는 "나는 귀여워"
}

// 응답 저장 POST
export const submitAnswers = async (
  userId: number,
  answers: Answer[]
): Promise<boolean> => {
  try {
    const res = await axios.post(`${API_URL}/response`, {
      userId,
      answers
    });

    return res.status === 200 || res.status === 201;
  } catch (error) {
    console.error("🚨 응답 저장 실패:", error);
    return false;
  }
};