"use client";
import Link from "next/link";
import MainButton from "../mainButton/MainButton";
import styles from "./Nav.module.scss";
const Nav = () => {
    const handleBook = () => {
        console.log("Clicked");
    };
    return (
        <nav className={`${styles.contentC}`}>
            <div className={`${styles.navLeft}`}>Icon</div>
            <div className={`${styles.navRight}`}>
                <ul className={`${styles.navItems}`}>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"about"}>About Us</Link>
                    </li>
                    <li>
                        <Link href={"service"}>Service</Link>
                    </li>
                    <li>
                        <Link href={"contact"}>Contact</Link>
                    </li>
                </ul>
                <MainButton title="Book Now" handleClick={handleBook} type={1} />
            </div>
        </nav>
    );
};

export default Nav;
type TNavProps = {};
