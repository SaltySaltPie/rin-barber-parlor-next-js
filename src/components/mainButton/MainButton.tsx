"use client";
import styles from "./MainButton.module.scss";
const MainButton = ({ title, handleClick, type }: TMainButtonProps) => {
    return (
        <button className={`${styles.contentC} ${styles['style' + type]}`} onClick={handleClick}>
            {title}
        </button>
    );
};

export default MainButton;
type TMainButtonProps = {
    title: string;
    handleClick: () => void;
    type: 1 | 2 | 3;
};
