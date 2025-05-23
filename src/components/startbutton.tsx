// components/StartButton.tsx
'use client';

import { useRouter } from "next/navigation";

export default function StartButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-lg mt-8 transition-all"
    >
      테스트 시작하기
    </button>
  );
}
