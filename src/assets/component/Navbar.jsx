import { SiFirebase } from "react-icons/si";
import { FiGrid } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <>
        <div className="flex justify-between items-center p-5 overflow-hidden">

<p className="text-md md:text-2xl flex">

<SiFirebase />
Authentication

</p>


   <div className="flex">

<button className="md:hidden" onClick={() => setClick(!click)}>
    {
    click ? <FiXSquare/> : <FiGrid/>
    }
</button>

<nav className="overflow-clip">
            <ul className={`
            md:flex p-1 mt-10 gap-4 absolute md:static md:right-0 backdrop-blur-sm
            duration-700 md:duration-0 border rounded-2xl  md:mt-0 md:border-0 md:backdrop-blur-0
            ${click ? 'right-10' : 'hidden'}
            `}>
                <NavLink to='/'><li className="btn p-5 md:m-0 m-3 ">Home</li></NavLink>
                <NavLink><li className="btn p-5 md:m-0 m-3 ">Content</li></NavLink>
            </ul>
</nav>
        </div>

        </div>
        </>
    );
};

export default Navbar;