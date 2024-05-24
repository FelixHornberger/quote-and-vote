'use client'

import { useLikertscaleGradingStore } from '@/zustand/likertscale';
import { ChangeEvent } from 'react';


function Likertscale({topic, descriptionLeft, descriptionRight}: 
    {topic: string, descriptionLeft: string, descriptionRight: string}) {

  const setLikertscaleGrade = useLikertscaleGradingStore((state) => state.setLikertscaleGrade)

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(e.target.value, 10);
    setLikertscaleGrade({ [topic]: selectedValue });
  };
  return (
    <div className='flex justify-center text-center w-full'>
      <div className="inline-grid sm:flex sm:content-center sm:justify-center">
        <p className="">{descriptionLeft}</p>
        <ul className="list-none px-5 place-content-around place-items-center inline-grid sm:flex" id={topic}>
          {[...Array(7).keys()].map((index) => (
            <li key={index} className="px-2 scale-150">
              <input
                id={`${topic}-answer-${index + 1}-li`}
                type="radio"
                name={topic}
                value={index - 3}
                onChange={handleRadioChange}
              />
            </li>
          ))}
        </ul>
        <p>{descriptionRight}</p>
      </div>
    </div>
  );
}

export default Likertscale;