import ArgumenTextarea from "@/components/ArgumentTextarea";
import SubmitButton from "@/components/buttons/SubmitButton";
import Likertscale from "@/components/Likertscale";
import PostTaskHeader from "@/components/PostTaskHeader";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-between text-center">
            <PostTaskHeader></PostTaskHeader>
            <Likertscale topic={'eligibilityAfter'} descriptionLeft="I would never vote for this party" descriptionRight={"I would vote for this party"} />
            <p className="my-3">Please write down anything new that you have learned about the programme of the party.
            </p>
            <ArgumenTextarea/>
            <SubmitButton />
        </main>
    );
}
