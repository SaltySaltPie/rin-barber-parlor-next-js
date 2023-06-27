import MainButton from "@/components/mainButton/MainButton";
import styles from "./HomeHero.module.scss";
const HomeHero = () => {
    return (
        <article className={`${styles.contentC}`}>
            <div className={`${styles.hero}`}>
                <div className={`${styles.title1}`}>Welcome To Choppers Motherfuckers</div>
                <div className={`${styles.title2}`}>Best Hair Salon For A Professional Look</div>
                <div className={`${styles.title3}`}>Choppers offers high performance customized facials to provide you with visible results.</div>
                <div className={`${styles.buttonsC}`}>
                    <MainButton title="Book Now" type={1} />
                    <MainButton title="All Service" type={2} />
                </div>
            </div>
        </article>
    );
};

export default HomeHero;
type THomeHeroProps = {};
