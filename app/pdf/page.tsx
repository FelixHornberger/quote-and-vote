import NavButton from "@/components/buttons/NavButton";
import ManifestoComponent from "@/components/ManifestoComponent";

export default function Home() {

  
    return (
        <main className="flex flex-col items-center justify-between h-screen">
            <div className="text-center place-items-center mb-3 w-full">
                <h2 >Take a look at the manifesto and then click the button to get to the next page when you&apos;re done.</h2>
            </div>
            <ManifestoComponent></ManifestoComponent>
        <NavButton href="/post-task"></NavButton>
        </main>
    );
}
