const ProductsReducer = (state, action) => {
    console.log(state);
    const { Products } = state;
    console.log(Products);

    let Item;


    switch (action.type) {

        case "CATEGORY":
            Item = action.curItem;
            console.log(Item);
            console.log("you clicked category btn");
            const filtered = Products.Fakedata.filter((e) => e.type === Item);
            console.log(filtered);
            const pro = { Fakedata: filtered };
            console.log(pro);

            return {
                Products: pro
            }
            break;

        default: return state;
    }
}

export default ProductsReducer