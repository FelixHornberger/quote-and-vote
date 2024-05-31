import ArgumenTextarea from "@/components/ArgumentTextarea";
import PostTaskButton from "@/components/buttons/PostTaskButton";
import Likertscale from "@/components/Likertscale";
import PostTaskHeader from "@/components/PostTaskHeader";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-between text-center">
            <div className="flex-coloum sm:justify-center sm:place-self-center text-center sm:w-[50%]">
                <PostTaskHeader></PostTaskHeader>
                <div className="text-left">
                    <Likertscale topic={'eligibilityAfter'} descriptionLeft="less likly" descriptionRight={"more likely"} />
                </div>
                <p className="my-3 text-left">Please write down anything new that you have learned about the programme of the party.
                </p>
                <ArgumenTextarea/>
                <PostTaskButton />
            </div>
        </main>
    );
}
