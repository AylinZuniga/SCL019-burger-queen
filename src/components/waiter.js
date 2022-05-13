import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/waiter.module.css";
import { Order } from "./order";

//componente vista mesero
export const Waiter = () => {







    return (

        <section className={styles.Waiter}>



            <header>
                <h1 className={styles.nombreApp}>Hamburguesa</h1>

                <Link to="/cocina">
                    <button className={styles.cocina} />
                </Link>
            </header>


            <Order />



        </section>




    );

};





