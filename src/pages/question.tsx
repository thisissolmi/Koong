'use client';

import { useState } from 'react';
import styles from './question.module.css';
// import NextButton from '@/components/nextbutton';

export default function QuestionCard() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {/* 상단: 하트 + 질문 */}
      <div className={styles.header}>
        <div className={styles.heartWrapper}>
          <div className={styles.heart}>❤️</div>
        </div>
        <h2 className={styles.questionNumber}>Q7.</h2>
        <p className={styles.questionText}>
          text <span className={styles.highlight}>text</span> text
        </p>
      </div>

      {/* 선택지 */}
      <div className={styles.options}>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`${styles.option} ${
              selected === index ? styles.selected : ''
            }`}
          >
            text
          </button>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        disabled={selected === null}
        className={`${styles.nextButton} ${
          selected === null ? styles.disabled : ''
        }`}
      >
        {/* <NextButton /> */}
        다음으로
      </button>
    </div>
  );
}
