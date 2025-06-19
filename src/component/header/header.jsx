import React, { useState } from "react";
import logo from '../../photo/keep_2020q4_48dp.png'
import style from '../header/header.module.css'
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
function Header() {  
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    return (
     
        <>
            <header>
                <div className={style.iconBars} >
                    <a href=""><i class="fa-solid fa-bars "></i></a>
                </div>
                <div className={style.logo} >
                    <a className={style.chuLogo} href=""> <img className={style.hinhLogo} src={logo} alt="logo" /></a>
                    <a href="">Ghi chú</a>
                </div>

                <div className={style.timKiem}>
                    <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <div className={style.User}>
                    <a href=""><i class="fa-regular fa-circle-user"></i></a>
                </div>
                <a href="/login">Đăng kí</a>
                <Link to="/Sign_in">duy gay</Link>

            </header>
        </>
    );
}
export default Header;