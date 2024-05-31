'use client'

import { useTimeDataStore } from "@/zustand/time";
import Link from "next/link"


const TaskButton = ({ }) => {

    const {setTimeData} = useTimeDataStore();

    const handleClick = (e: React.MouseEvent) => {
        setTimeData({task: new Date().toLocaleTimeString()})
    }

    return (
        <div className='text-center'>
            <Link href={"/post-task"}>
                <button className='bg-custom-accent p-2 font-semibold mt-3' onClick={handleClick}>Next Page</button>
            </Link>
        </div>
    )
}

export default TaskButton