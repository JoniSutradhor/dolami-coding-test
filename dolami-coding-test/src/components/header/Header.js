import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {Box, TextField} from "@mui/material";

const Header = ()=> {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="header shadow-md w-full fixed top-0 left-0 z-30">
                <div className="md:flex py-4 md:px-1 items-center justify-between">
                    <div className="font-bold cursor-pointer flex items-center">
                        <img src="logo.png" alt="" width="200" height="170"/>
                    </div>
                    <div>
                        <p className="border-b-2" style={{color: "white", fontSize: 20, marginTop:8}}>Go to Marketpage</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="justify-between">
                        <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden">
                            {open ? <CloseIcon /> : <MenuIcon />}
                        </div>
                        <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-10] left-0 w-full md:w-auto md:pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100" : "top-[-490px]"} md:opacity-100 opacity-0`}>
                            <div className="flex justify-around md:ml-8 md:mr-3 text-xl md:my-0 my-7 gap-5">
                                <div>
                                    <label className="relative text-gray-400 focus-within:text-gray-600 block">
                                        <svg className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-0" style={{marginTop: 7}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 40 40" width="25px" height="25px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
                                        <input style={{borderRadius:4, height: 35, width: 400, marginTop: 7}}/>
                                    </label>
                                </div>
                                <Box
                                    component="span"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        backgroundColor: "#34353A",
                                        borderRadius: 3
                                    }}
                                >
                                    <NotificationsNoneIcon style={{color: "white", height: 30, width: 40, marginTop: 10, marginLeft: 5}}></NotificationsNoneIcon>
                                </Box>
                                <Box
                                    component="span"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        backgroundColor: "#34353A",
                                        borderRadius: 3
                                    }}
                                >
                                    <ShoppingCartOutlinedIcon style={{color: "white", height: 30, width: 40, marginTop: 10, marginLeft: 5}}></ShoppingCartOutlinedIcon>
                                </Box>
                                <Box
                                    component="span"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        backgroundColor: "white",
                                        borderRadius: 3
                                    }}
                                >
                                    <img style={{height: 30, width: 30, marginTop: 10, marginLeft: 10}} src="logo192.png"/>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;