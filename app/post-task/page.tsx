import ArgumenTextarea from "@/components/ArgumentTextarea";
import PostTaskButton from "@/components/buttons/PostTaskButton";
import Likertscale from "@/components/Likertscale";
import PostTaskHeader from "@/components/PostTaskHeader";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-between text-center ">
            <div className="flex-coloum sm:justify-center sm:place-self-center text-center w-[75%] sm:w-[50%]">
                <PostTaskHeader></PostTaskHeader>
                <div className="flex flex-col border-2 border-neutral-900 p-5 mb-3">
                    <div className="text-left">
                        <Likertscale topic={'eligibilityAfter'} descriptionLeft="less likely" descriptionRight={"more likely"} />
                        <p>If your opinion didn&apos;t change, click the button in the middle.</p>
                    </div>
                </div>
                <p className="mt-3.5 text-left">Write down anything new you have learnt about the party&apos;s manifesto.</p>
                <ArgumenTextarea/>
                <PostTaskButton />
            </div>
        </main>
    );
}
