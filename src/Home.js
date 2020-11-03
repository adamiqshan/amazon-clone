import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home" >
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase3/V4/Phase3_Rec_PC_Hero_ENGLISH_1X._CB417897749_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="123456"
                    title="The Monk Who Sold His Ferrari"
                    price={3}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
                />
            </div>
        </div >

    )
}

export default Home
