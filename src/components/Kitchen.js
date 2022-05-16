import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/kitchen.module.css";
import { KitchenOrder } from "./KitchenOrder";
import { AiFillHome} from "react-icons/ai";
import { GiSaucepan} from "react-icons/gi";




//Componente para despliegue de la página de cocina
export const Kitchen = () => {
    return (

        <section className={styles.Kitchen} >




            <header className={styles.meseroVista}>

                <h1 className={styles.nombreApp}>Hamburguesa</h1>


                <div className={styles.buttonContainer}>
                    <Link to="/cocina">
                        <button className={styles.cocina}>  <GiSaucepan className={styles.kitchenIcon} /> </button>
                    </Link>

                    <Link to="/">
                        <button className={styles.home}>  <AiFillHome className={styles.homeIcon} /> </button>
                    </Link>
                </div>



            </header>






            <div className={styles.containerOrders} >

                <KitchenOrder />

            </div>





        </section>
    )
};