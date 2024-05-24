'use client'

import { useVPStore } from "@/zustand/vp";
import SubmitVPButton from "../buttons/SubmitVPButton";
import DegreeProgramm from "./DegreeProgramm";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Martikel from "./Matrikel";

export default function VPInformation() {

    const { vp } = useVPStore();

    return (
        <>
        { vp &&
            <> 
            <div className="flex felx-col justify-center">
                <div className="text-center sm:w-[50%] justify-center px-5">
                    <p className="mb-3">
                        If you are a student at the University of Regensburg and need VP hours, enter your details here, otherwise you can close the page.
                    </p>
                    <div className="mb-3">
                        <p>Firstname:</p>
                        <FirstName />
                    </div>
                    <div className="mb-3">
                        <p>Lastname:</p>
                        <LastName />
                    </div>
                    <div className="mb-3">
                        <p>Degree Programm:</p>
                        <DegreeProgramm />
                    </div>
                    <div className="mb-3">
                        <p>Martikel:</p>
                        <Martikel />
                    </div>
                    <SubmitVPButton />
                </div>
            </div>
            </>
        }    
        </>
    );
}