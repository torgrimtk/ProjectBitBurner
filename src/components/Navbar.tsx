import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='flex justify-between items-center px-6 py-4 bg-black'>
            <div className='flex items-center gap-2 text-green-400 font-semibold text-lg'>
                <img src="/BitBurnerAvatar2.png" alt="BitburnerAvatar" className="h-8 w-8" />
                Project BitBurner
            </div>

            <div className='flex gap-6'>
                <NavLink to='/' className='text-green-400 hover:text-green-300 text-sm transition-colors'>
                    Home
                </NavLink>
                <NavLink to='/hidden' className='text-green-400 hover:text-green-300 text-sm transition-colors'>
                    Hidden Posts
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav