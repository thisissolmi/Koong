// pages/landing.tsx
import StartButton from "@/components/startbutton";
import heartImage from "../assets/3a96134c-af02-44b3-acb8-358b87f88dd7.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
        <div className="text-sm text-rose-500 font-semibold mb-2">
          00명이 지금 테스트에 참여하고 있어요! 
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">혹시 나... 짝사랑 중일까?</h1>
        <p className="text-gray-700 mb-6">
          마음이 살랑거릴 때, 조심스럽게 내 감정을 들여다보는 시간. <br />
          아래 질문들을 하나씩 천천히 읽어보고, 내 마음에 가장 가까운 정도를 골라보자.
        </p>
        <img
            src="/heartlogo.png"
            alt="하트 캐릭터"
            className="w-32 h-30 mx-auto mb-6"
        />
        <StartButton />
      </div>
    </div>
  );
}
