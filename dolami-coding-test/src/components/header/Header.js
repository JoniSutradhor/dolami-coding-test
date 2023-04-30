import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const Header = ()=> {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="header shadow-md w-full fixed top-0 left-0 z-30">
                <div className="md:flex py-4 md:px-1 items-center justify-between">
                    <div className="font-bold cursor-pointer flex items-center ">
                        <img src="logo.png" alt="" width="100" height="150"/>
                    </div>
                    <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden">
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-red-800 md:z-auto z-[-10] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-0`}>
                        <div className="md:ml-8 text-xl md:my-0 my-7">
                            <NotificationsNoneIcon></NotificationsNoneIcon>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;