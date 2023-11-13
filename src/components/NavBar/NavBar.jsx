import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// manually create nav bar
const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];

    return (
        <nav className="p-6 bg-slate-500 text-white">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-16' : '-top-60'  /* open ? '' : 'hidden' */} bg-slate-500 font-bold text-white rounded-lg p-2 px-4`}>
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}>
                        </Link>)
                }
            </ul>
        </nav >
    );
};

export default NavBar;