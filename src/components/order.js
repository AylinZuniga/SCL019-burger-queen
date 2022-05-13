import React, { useState } from "react";
import { Menu } from "./menu";
import styles from "../css/order.module.css";
import { db } from "../firebase.js"
import { collection, addDoc} from "firebase/firestore";



export const Order = () => {

  const [cartProduct, setCartProduct] = useState([]);
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");


  //Función para añadir productos al carro y aumentar cantidad
  const addItem = (product) => {
    console.log(cartProduct, product)
    const exist = cartProduct.find((item) => item.id === product.id);
    if (exist) {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartProduct([...cartProduct, { ...product, qty: 1 }]);
    }
  };

  // Funcion restar productos

  //Función para restar cantidad
  const onRemove = (product) => {
    const exist = cartProduct.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartProduct(cartProduct.filter((item) => item.id !== product.id));
    } else {
      setCartProduct(
        cartProduct.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  ////Función para eliminar productos
  const removeProducts = (product) => {
    const exist = cartProduct.find((item) => item.id === product.id);
    if (exist.qty) {
      setCartProduct(cartProduct.filter((item) => item.id !== product.id));
    }
  };

  //Función para el total
  const itemsPrice = cartProduct.reduce((a, c) => { //al arreglo cartProduct reduce toma un arreglo de entrada y nos entrega ptra cosa, reduce el alegrlo a un valor unico, y lo ocupamos para obetener la suma del precio y el reduce acumula la suma en el acumulador, 
    return a + c.price * c.qty;
  }, 0);


  //Función para guardar orden de cliente a Firestore
  const resumeOrder = async () => {
    console.log("envio a db")
    try {
      await addDoc(collection(db, "Orders"), {
        client: client,
        table: table,
        total: itemsPrice,
        order: cartProduct,
        date: new Date(),
        status: "Pendiente",
      });
      setCartProduct([])
    } catch (error) {
      throw new Error(error);
    }

  };




  return (


    <main className={styles.generalContainer} >

      <section className={styles.orderContainer}>

        <input type="text" placeholder="Pedido de"
          onChange={(e) => { setClient(e.target.value) }} />
          <input type="text" placeholder="Mesa"
          onChange={(e) => { setTable(e.target.value) }} />



        <div>{cartProduct.length === 0 && <div> Agrega productos al pedido </div>}</div>
        {cartProduct.map((item) => (

          <div key={item.id} className={styles.boxOrder}>

            <div className={styles.products}>
              <p>{item.name}</p>
              <p>${item.price} </p>

            </div>
            <div className={styles.buttons}>
              <button
                className={styles.plusLess}
                onClick={() => addItem(item)}
              >
                +
              </button>
              <p className={styles.number}>{item.qty}</p>
              <button
                className={styles.plusLess}
                onClick={() => onRemove(item)}
              >
                -
              </button>
            </div>

            <button
              className={styles.x}
              onClick={() => removeProducts(item)}
            >
              x
            </button>
          </div>

        ))}

        <aside className={styles.boxText}>
          <p>Total $ {itemsPrice} </p>

        </aside>

        <button className={styles.orderButton} onClick={resumeOrder} >
          Enviar Pedido
        </button>





      </section>







      <Menu

        addItem={addItem}


      />


    </main>



  );


};




// {/* <button className={styles.orderButton} onClick={() => sendOrder()}>
//               Enviar Pedido
//             </button> */}