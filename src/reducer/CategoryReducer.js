const CategoryReducer = (state, action) => {
    console.log(state);
    const { Category } = state;
    console.log(Category);

    let Item;
    let Menudata;
    let Catdata;

    switch (action.type) {

        case "CATEGORY":
            Item = action.curItem;
            console.log(Item);

            Menudata = action.Fakedata;
            console.log(Menudata);


            console.log("you clicked category btn");
            const filtered = Menudata.filter((e) => e.type === Item);
            console.log(filtered);
            const pro = { Fakedata: filtered };
            console.log(pro);

            Catdata = action.uniqueList;
            console.log(Catdata);

            return {
                Products: pro, uniqueList: Catdata, Menudata
            }
            break;

        case "CATEGORY1":
            Item = action.curItem;
            console.log(Item);

            Menudata = action.Menudata;
            console.log(Menudata);

            console.log("you clicked category1 btn");
            const filtered1 = Menudata.filter((e) => e.type === Item);
            console.log(filtered1);
            const pro1 = { Fakedata: filtered1 };
            console.log(pro1);

            Catdata = action.uniqueList;
            console.log(Catdata);

            return {
                Products: pro1, uniqueList: Catdata, Menudata
            }
            break;


        default: return state;
    }
}

export default CategoryReducer