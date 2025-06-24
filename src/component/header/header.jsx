import React, { useState } from "react";
import { useEffect } from "react";

import logo from '../../photo/keep_2020q4_48dp.png';
import style from '../header/header.module.css';
import { Link } from "react-router-dom";

function Header() {
    const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true"; 
    });

    
    const [selectedMenu, setSelectedMenu] = useState(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (option) => {
        console.log("Bạn đã chọn:", option); 
        setIsDropdownOpen(false);
         if (option === "che-do-toi") {
        setDarkMode(prev => !prev);
    }
    setIsDropdownOpen(false);
    };
    
    useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark-theme"); 
    } else {
        document.body.classList.remove("dark-theme");
    }
     localStorage.setItem("darkMode", darkMode);
}, [darkMode]);



    return (
        <>
            <header className={style.header}>
                <div className={style.iconBars}>
                    <a href="#"><i className="fa-solid fa-bars"></i></a>
                </div>

                <div className={style.logo}>
                    <a className={style.chuLogo} href="/">
                        <img className={style.hinhLogo} src={logo} alt="logo" />
                    </a>
                    <a className={style.ghiChu} href="#">Keep</a>
                </div>

                <div className={style.timKiem}>
                    <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>

                <div className={style.User}>
                    <a href="#"><i className="fa-regular fa-circle-user"></i></a>
                </div>

                {/* Cài đặt */}
                <div className={style.settingWrapper}>
                    <button className={style.settingBtn} onClick={toggleDropdown}>
                        <i className="fa-solid fa-gear"></i>
                    </button>

                    {isDropdownOpen && (
                        <div className={style.dropdownMenu}>
                            <div onClick={() => handleMenuClick("cai-dat")}>Cài đặt</div>

                            <div onClick={() => handleMenuClick("che-do-toi")}>
                            {darkMode ? "Chế độ sáng" : "Chế độ tối"}
                            </div>

                            <Link to="/tro-giup"><div onClick={() => handleMenuClick("tro-giup")}>Trợ giúp</div></Link>

                            <div onClick={() => handleMenuClick("phim-tat")}>Phím tắt</div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;
