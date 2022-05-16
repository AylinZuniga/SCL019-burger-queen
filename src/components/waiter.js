import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/waiter.module.css";
import { Order } from "./order";
import { AiFillHome} from "react-icons/ai";
import { GiSaucepan} from "react-icons/gi";

//componente vista mesero
export const Waiter = () => {







    return (

        <section className={styles.Waiter}>



            <header className={styles.meseroVista}>

                <h1 className={styles.nombreApp}>Hamburguesa</h1>

                
                <div className={styles.buttonContainer}> 
                <Link to="/cocina">
                    <button className={styles.cocina}>  <GiSaucepan className={styles.kitchenIcon}/> </button>
                </Link>

                <Link to="/">
                    <button className={styles.home}>  <AiFillHome className={styles.homeIcon}/> </button>
                </Link>
                </div>

                

            </header>




            <Order />



        </section>




    );

};





