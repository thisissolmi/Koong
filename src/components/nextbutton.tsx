// 'use client';

// import { useState, useEffect } from 'react';

// export default function QuestionForm() {
//   const [question, setQuestion] = useState(null);
//   const [answer, setAnswer] = useState('');
//   const [loading, setLoading] = useState(false);

//   const loadQuestion = async () => {
//     const res = await fetch('/api/questions/next');
//     const data = await res.json();
//     setQuestion(data);
//     setAnswer('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     await fetch('/api/answers', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ questionId: question.id, answer }),
//     });
//     await loadQuestion();
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadQuestion();
//   }, []);

//   if (!question) return <p>로딩 중...</p>;

//   return (
//     <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
//       <div className="mb-4">{question.text}</div>
//       <input
//         value={answer}
//         onChange={(e) => setAnswer(e.target.value)}
//         className="w-full border p-2 mb-4"
//         required
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         {loading ? '다음 질문 불러오는 중...' : '다음'}
//       </button>
//     </form>
//   );
// }
