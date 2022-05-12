import React, { useState} from "react";
import data from "../data/menu.json";
import styles from "../css/menu.module.css";





//componente menu

export const Menu = (props) => {

    const{ addItem }= props;



    const [product, setProduct] = useState(data.productos);

    const productsType = (option) => { 

        switch (option) {

            case "Desayuno":
                const breakfast = data.productos.filter((elem) => elem.type === option);
                setProduct(breakfast);
                console.log(breakfast);
                break;

            case "Principal":
                const main = data.productos.filter((elem) => elem.type === option);
                setProduct(main);
                break;

            default:
        }
    };



    return (

        <section className={styles.menuContainer} >

            <ul className={styles.buttonsMenuContainer}>
                <button onClick={() => productsType("Desayuno")} className={styles.buttonsMenu}>Desayuno</button>
                <button onClick={() => productsType("Principal")} className={styles.buttonsMenu} >Principal</button>

            </ul>

            <div className={styles.productContainer}>

                {product.map((comida) => (
                    <button onClick={() => addItem(comida)} className={styles.buttonsProducts} key={comida.id}> {`${comida.name} $${comida.price}`} </button>
                )
                )}

            </div>

        </section>

        




    )
    
}


