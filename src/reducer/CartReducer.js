const CartReducer = (state, action) => {
    console.log(state);

    const { Cart, totalAmount, totalQty } = state;

    let Item;
    let index;
    let updatedQty;
    let updatedPrice;

    switch (action.type) {
        case "ADD_TO_CART":
            // console.log("you clicked add cart btn");
            const chk = Cart.find((e) => e.id === action.id);
            // console.log(chk);
            if (chk) {
                return state;
            } else {
                Item = action.curItem;
                Item["qty"] = 1; // create quantity in the cart
                updatedQty = totalQty + 1;
                updatedPrice = totalAmount + Item.price;

                return {
                    Cart: [Item, ...Cart], totalAmount: updatedPrice, totalQty: updatedQty
                    // Cart: [...Cart, Item]
                }
            }
            break;

        case "INC":
            console.log("you clicked increament btn");
            Item = action.curItem;
            console.log(Item);
            Item.qty = Item.qty + 1; // inc quantity
            updatedQty = totalQty + 1;
            updatedPrice = totalAmount + Item.price;

            index = Cart.findIndex((e) => e.id === action.id);
            console.log(index);
            Cart[index] = Item;

            return {
                Cart: [...Cart], totalAmount: updatedPrice, totalQty: updatedQty
                // Cart: [...Cart]
            }
            break;

        case "DEC":
            Item = action.curItem;
            if (Item.qty > 1) {

                Item.qty = Item.qty - 1;
                updatedQty = totalQty - 1;
                updatedPrice = totalAmount - Item.price;

                index = Cart.findIndex((e) => e.id === action.id);
                Cart[index] = Item;

                return {
                    Cart: [...Cart], totalAmount: updatedPrice, totalQty: updatedQty
                    // Cart: [...Cart]
                }
            } else {
                return state;
            }
            break;

        case "DEL":
            const filtered = Cart.filter(Item => Item.id !== action.id);
            console.log(filtered);
            // console.log(action.id);
            Item = action.curItem;
            updatedQty = totalQty - Item.qty;
            updatedPrice = totalAmount - Item.price * Item.qty;

            return {
                Cart: [...filtered], totalAmount: updatedPrice, totalQty: updatedQty
                // Cart: [...filtered]
            }
            break;


        default: return state;
    }

}

export default CartReducer