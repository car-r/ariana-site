import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="py-4 border-b-2 border-gray-100">
                <div className="flex items-center mx-auto max-w-5xl w-11/12 justify-between">
                    <div className="text-4xl">
                        <Link href="/">A.</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/about">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                About
                            </a>
                        </Link>
                        <Link href="/resume">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                Resume
                            </a>
                        </Link>
                        <Link href="/content">
                            <a className="py-1 px-4 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all ease-in-out">
                                Content
                            </a>
                        </Link>
                    </div>
                    
                </div>
        </nav>
    )
}

export default Navbar
