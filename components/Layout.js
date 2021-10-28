import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useState } from 'react'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col">
                <Navbar toggle={toggle} isOpen={isOpen}/>
                <Sidebar toggle={toggle} isOpen={isOpen}/>
                <main>{children}</main>
            </div>
            
        </>
    )
}

export default Layout
