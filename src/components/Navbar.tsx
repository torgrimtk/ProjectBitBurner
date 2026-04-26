import { useState } from "react"
import { NavLink } from "react-router-dom"
import { X, Menu } from "lucide-react"

const NavLinks = () => {
    return (
        <>
            <NavLink to='/' className='text-green-400 hover:text-green-300 text-sm transition-colors'>
                Home
            </NavLink>
            <NavLink to='/hidden' className='text-green-400 hover:text-green-300 text-sm transition-colors'>
                Hidden Posts
            </NavLink>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className='flex justify-between items-center px-6 py-4 bg-black text-gray-200'>
                <div className='flex items-center gap-2 text-green-400 font-semibold text-lg'>
                    <img src="/BitBurnerAvatar2.png" alt="BitburnerAvatar" className="h-8 w-8" />
                    Project BitBurner
                </div>

                <div>
                    <div className='hidden md:flex gap-6'>
                        <NavLinks />
                    </div>
                    <div className='block md:hidden'>
                        <button onClick={toggleNavbar}>
                            {isOpen ? <X color='#E4E7EB' /> : <Menu color='#E4E7EB' />}
                        </button>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className='text-gray-200 flex flex-col basis-full items-center md:hidden'>
                    <NavLinks />
                </div>
            )}
        </>
    )

}

export default Nav