const SearchReducer = (state, action) => {
    console.log(state);
    const { Search } = state;
    console.log(Search);

    let Item;
    let Menudata;



    switch (action.type) {

        case "SEARCH":
            Item = action.srchItem;
            console.log(Item.toString().toLowerCase());

            Menudata = action.Fakedata;
            console.log(Menudata);

            console.log("you clicked search btn");

            // const filtered = Menudata.filter((e) => e.type.toLowerCase() == Item.toLowerCase());
            const filtered = Menudata.filter((data) => {
                return Object.values(data).join("").toLowerCase().includes(Item.toLowerCase());
            });

            console.log(filtered);
            const pro = { Fakedata: filtered };
            console.log(pro);

            return {
                Products: pro, Menudata
            }
            break;



        default: return state;
    }
}

export default SearchReducer