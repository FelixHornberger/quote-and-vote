'use client'

import { useQuizStore } from '@/zustand/quiz';
import React, { useState } from 'react';

interface QuesitonElementPreStudyProps {
    question: string;
    labels: string[];
    answerKey: string;
}

const QuesitonElementPreStudy: React.FC<QuesitonElementPreStudyProps> = ({
    question,
    labels,
    answerKey,
}) => {

    const {quizData, setQuizAnswer} = useQuizStore();
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedValue(value);
    setQuizAnswer({ [answerKey]: value }); // Update the store with the selected value
  };

  return (
    <div className="flex flex-col border border-neutral-900 p-5 mb-3">
      <div className="flex-col text-center sm:text-left justify-center sm:justify-normal mb-3">
        <h2 className="whitespace-pre-line">{question}</h2>
      </div>
      <div className="flex my-5 sm:my-0 justify-center sm:justify-start">
        <ul className="list-none inline-grid sm:flex flex-wrap">
          {labels.map((label, index) => (
            <label
            key={index}
            htmlFor={`option-${answerKey}-${index}`}
            className={`inline-flex items-center px-4 py-2 border-2 rounded cursor-pointer text-lg transition-all m-2.5 ${
              quizData[answerKey] === label ? 'border-black' : ''
            }`}
          >
              <input
                id={`option-${answerKey}-${index}`}
                type="radio"
                name={answerKey}
                value={label}
                onChange={handleRadioChange}
                checked={selectedValue === label}
                className="hidden"
              />
              {label}
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuesitonElementPreStudy;