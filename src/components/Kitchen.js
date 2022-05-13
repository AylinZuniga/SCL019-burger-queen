import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/kitchen.module.css";
import {KitchenOrder} from "./KitchenOrder";



//Componente para despliegue de la página de cocina
export const Kitchen = () => {
    return (


        <section className={styles.Kitchen} >

            <header className={styles.headerstyle} >
                <h1 className={styles.nombreApp}>Hamburguesa</h1>

                <Link to="/" className={styles.meseroContainer}>
                    <button className={styles.mesero} />
                </Link>
            </header>

            <div className={styles.containerOrders} >

                <KitchenOrder/>

            </div>





        </section>
    )
};