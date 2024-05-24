import Link from "next/link"

const TaskButton = ({ }) => {
    return (
        <div className='text-center'>
            <Link href={"/post-task"}>
                <button className='bg-custom-accent p-2 font-semibold mt-3'>Next Page</button>
            </Link>
        </div>
    )
}

export default TaskButton