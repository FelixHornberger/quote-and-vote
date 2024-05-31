'use client'

import { useHrefStore } from "@/zustand/href"
import NavButton from "@/components/buttons/NavButton";

export default function Home() {
  
  const {href} = useHrefStore();
    
  let stringToDisplay = `On the next page, you will see the party programme as a PDF. It may take up to 5 seconds to load the PDF. 
      You can spend as much time as you like looking at the party programme. 
      As soon as you have all the information about the party programme, you can go to the next page.`

  if (href === '/chat') {
    stringToDisplay = `On the next page, you can chat with a chatbot about the party programme. 
    You can chat for as long as you like. 
    When you have all the information about the party programme that is important to you, you can go to the next page.`
  }
  
  return (
    <main className="flex flex-col items-center justify-between">
      <h1 className="my-3">Task Description</h1>
      <p className="px-5 sm:w-[50%] self-center">
              {stringToDisplay}
          </p>
          <NavButton href={href}></NavButton>
    </main>
  );
}
    