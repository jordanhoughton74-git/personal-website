import Link from 'next/link';

export default function Header(){
    return (
    <>
    <nav className="text-center sticky top-0 z-20 mt-5 grid-cols-3 space-x-6 font-semibold italic">
        <Link href="#about"><a className="hover:text-indigo-700">About</a></Link>
        <Link href="#employment"><a className="hover:text-yellow-700">Employment</a></Link>
        <Link href="#education"><a className="hover:text-green-700">Education</a></Link>
    </nav>
    </>
    )
}