import React, { Fragment, useState, useContext } from "react";
import { link } from "react-router-dom";
import { Menu } from "./menu";
import styles from "../css/waiter.module.css";
import { Order } from "./order";

//componente vista mesero
export const Waiter = (props) => {

    const {addItem}=props


    


return (

    <section className={styles.Waiter}>



        <header>
            <h1 className={styles.nombreApp}>Hamburguesa</h1>
        </header>


        <Order/>
        


    </section>




);

};





