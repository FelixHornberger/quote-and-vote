import ChatHistory from '@/components/chatSystem/ChatHistory';
import ChatInput from '@/components/chatSystem/ChatInput';
import second from '@/components/chatSystem/ChatInput'
import PartySelector from '@/components/chatSystem/PartySelector';

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="text-center place-items-center mb-3">
                <h1 >Welcome to my Study</h1>
            </div>
            <div className="px-5 flex justify-center">
                <div className="task-box mb-3 max-w-prose place-items-center px-5 border border-neutral-900">
                    <p className="text-center">
                        You are invited to take part in an online study investigating information gathering in elections. The study will be conducted by Felix Hornberger and supervised by Dr. David Elsweiler from the University of Regensburg. The duration of the study is 15 minutes. Students at the University of Regensburg will receive 0.25 credit hours. The study can only be started once and should be completed in one go.
                    </p>
                </div>
            </div>
    </main>
  );
}
