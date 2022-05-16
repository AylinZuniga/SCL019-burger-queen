import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/home.module.css";

export const Home = () => {
    return (

        <section className={styles.home}>

            <header>
                <h1 className={styles.nombreApp}>Hamburguesa</h1>

            </header>

            <div className={styles.buttonContainer} >

                <Link to="/mesero">
                    <button className={styles.mesero} > Mesero </button>
                </Link>

                <Link to="/cocina">
                    <button className={styles.cocina}> Cocina</button>
                </Link>

            </div>






        </section>




    );

};