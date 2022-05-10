const CheckOutReducer = (state, action) => {
    console.log(state);
    const { checkout } = state;
    console.log(checkout);

    let Item;
    let totalQty;
    let totalAmount;



    switch (action.type) {

        case "CHECKOUT":
            Item = action.Cart;
            totalQty = action.totalQty;
            totalAmount = action.totalAmount;
            console.log(Item, totalQty, totalAmount);


            return {
                checkout: { Item }, totalQty, totalAmount
            }
            break;



        default: return state;
    }
}

export default CheckOutReducer