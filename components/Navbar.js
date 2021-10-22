import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="py-4 border-b-2 border-gray-100">
                <div className="flex items-center mx-auto max-w-5xl w-11/12 justify-between">
                    <div className="text-4xl">
                        <Link href="/">A.</Link>
                    </div>
                    <div className="flex gap-10">
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/"><a>Resume</a></Link>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar
