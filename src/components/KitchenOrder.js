import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import styles from "../css/kitchenOrder.module.css";
import { KitchenButtons } from "./kitchenButtons";



//Componente para visualizar los pedidos en cocina
export const KitchenOrder = () => {

    //Estado de las ordenes
    const [orders, setOrders] = useState([]);

    //Función para acceder a la base de datos de Firestore y ordenar pedidos
    useEffect(() => {
        onSnapshot(
            query(collection(db, "Orders"), orderBy("date", "asc")),
            (snapshot) => {
                const products = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setOrders(products);
            },
            (error) => {
                console.log(error);
            }

        );
    }, []);


    return (
        orders.map((order) => (



            <section key={order.id} className={styles.boxContainer}>

                <main className={styles.text}>

                    <div className={styles.nombrePedido}>
                        <p className={styles.clientName}>Cliente: {order.client}</p>
                        <label>Mesa: {order.table}</label>

                    </div>


                    <table className={styles.mainTable}>

                        <div className={styles.title}>

                            <label>Productos</label>
                            <label>Cantidad</label>
                        </div>


                        {order.order.map((item) => (
                            <div key={item.id} className={styles.orderContainer}>

                                <label className={styles.trName}>
                                    {item.name}
                                </label>

                                <label className={styles.trQty}>
                                    {item.qty}
                                </label>
                            </div>
                        ))}
                    </table>
                </main>

                <div className={styles.kitchenButtons}> 
                    <KitchenButtons id={order.id} status={order.status} />
                </div>

                




            </section>



        ))



    )







}





