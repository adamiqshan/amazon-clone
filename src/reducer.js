export const initialState = {
    basket: [{
        id: "123456",
        title: "The Monk Who Sold His Ferrari",
        price: 3,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
    },
    {
        id: "123456",
        title: "The Monk Who Sold His Ferrari",
        price: 3,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
    }]
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    console.log(action)

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn
                    ('Cant remove product (id:${action.id}) as its not available in the cart')
            }

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer