const DetailsReducer = (state, action) => {

    let Item;


    switch (action.type) {
        case "VIEW_DETAILS":
            // console.log("you clicked ViewMore btn");
            Item = action.curItem;
            return {
                Details: [Item]
            }
            break;

        default: return state;
    }

}

export default DetailsReducer