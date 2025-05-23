// src/pages/register.tsx
import React, { useState } from 'react';
// import NextButton from "../components/nextbutton";
import NextButton from '@/components/nextbutton';
import { useRouter } from 'next/router';



const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const router = useRouter();
// router.push('/question/1');

  const handleNext = () => {
    if (name.trim()) {
      // 이름 저장 로직이 있다면 여기에 추가
      // 예: localStorage.setItem('targetName', name);
      router.push('/question/1'); // 다음 질문 페이지로 이동
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-5xl mb-2">❤️</div>
      <div className="text-xl text-gray-600 mb-1">0/20</div>
      <h2 className="text-xl font-semibold mb-2">Q0.</h2>
      <p className="text-md text-gray-700 mb-6">상대의 이름을 입력해주세요</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="입력 완료"
        className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 mb-10"
      />

      <NextButton onClick={handleNext} disabled={!name.trim()} />
    </div>
  );
};

export default RegisterPage;
