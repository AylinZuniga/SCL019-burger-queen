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
                <header>
                    <h1>Pedido Mesa {order.table}</h1>

                </header>

                <main className={styles.text}>
                    <p className={styles.clientName}>Nombre Cliente: {order.client}</p>
                    <table className={styles.mainTable}>
                        <thead>
                            <tr className={styles.title}>
                                <th>Productos</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        {order.order.map((item) => (
                            <tbody key={item.id} className={styles.table}>
                                <tr className={styles.trName}>
                                    <td>{item.name}</td>
                                </tr>
                                <tr className={styles.trQty}>
                                    <td>{item.qty}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </main>
                <KitchenButtons id={order.id} status={order.status} />


            </section>



        ))



    )







}





