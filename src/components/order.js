import React, { useState } from "react";
import { Menu } from "./menu";
import styles from "../css/order.module.css";


export const Order = () => {

  const [cartProduct, setCartProduct] = useState([]);

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

  const onRemove = (product) => {
    console.log(cartProduct, product)
    const exist = cartProduct.find((item) => item.id === product.id);
    if (exist) {
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
  const itemsPrice = cartProduct.reduce((a, c) => {
    return a + c.price * c.qty;
  }, 0);








  return (


    <main className={styles.generalContainer} >

      <section className={styles.orderContainer}>

        <input type="text" placeholder="Customer's name" />

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

        <button className={styles.orderButton} >
              Enviar Pedido
            </button>





      </section>







      <Menu

        addItem={addItem}


      />


    </main>



  )


}




// {/* <button className={styles.orderButton} onClick={() => sendOrder()}>
//               Enviar Pedido
//             </button> */}