import React from 'react';

interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-xs py-3 rounded text-white font-semibold transition-colors duration-300
        ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-pink-400 hover:bg-pink-500'}
      `}
    >
      다음으로
    </button>
  );
};

export default NextButton;
