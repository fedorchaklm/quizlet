import {lusitana} from '@/ui/fonts'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Quizlet',
    description: 'Quizlet description'
}

export default function HomePage() {
    return (
        <div className='text-white'>
            Home Page
            <p className={`${lusitana.className}`}>Hello</p>
        </div>

    )
}
