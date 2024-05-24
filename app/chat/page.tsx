import ChatHistory from '@/components/chatSystem/ChatHistory';
import ChatInput from '@/components/chatSystem/ChatInput';
import PartySelected from '@/components/chatSystem/PartySelected';
import PartySelector from '@/components/PartySelector';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id='task-root' className="flex-col flex w-full min-h-[100vh]">
            <div className='flex-1 overflow-hidden'>
                <div className='relative h-full'>
                    <div className='w-full h-full overflow-y-auto'>
                        <div className='flex flex-col'>
                            <div className='fixed top-0 w-full h-[40px]'>
                                <div className='flex flex-row w-full border-b border-custom-text bg-custom-bg justify-center text-center'>
                                    <PartySelected/>
                                </div>
                            </div>
                            <ChatHistory/>
                        </div>
                    </div>
                </div>
            </div>
            <ChatInput />
        </ div>
    </main>
  );
}
