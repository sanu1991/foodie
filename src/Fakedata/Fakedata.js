// upload image using imgbb.com

var Fakedata = [
    {
        id: 1,
        type: "Mocktail",
        name: "Summerberry Cooler",
        image: "https://i.ibb.co/tsWkNM7/Summerberry.png",
        recipes: "Raspberry, apple juice, strawberry and concentrated lemonade altogether make for a frosty summer treat that everyone will adore.",
        price: 120
    },
    {
        id: 2,
        type: "Mocktail",
        name: "Citrus Strawberry Mocktail",
        image: "https://i.ibb.co/87PRNWQ/Strawberry.png",
        recipes: "Refresh and rehydrate with this citrusy drink! Several ingredients combine to create this colorful treat, made with strawberry, orange juice, icing sugar, sparkling powder, and a hint of basil.",
        price: 140
    },
    {
        id: 3,
        type: "Mocktail",
        name: "Sparkling Cherry Limeade",
        image: "https://i.ibb.co/jy7zZVL/Cherry.png",
        recipes: "Cherry juice, lemon wedges, lime juice and sugar pair together deliciously with sparkling water. This is just what you need!",
        price: 100
    },
    {
        id: 4,
        type: "Mocktail",
        name: "Mint Zing",
        image: "https://i.ibb.co/S6m728W/MintZing.png",
        recipes: "Quench your thirst with this refreshing drink, loaded with fresh fruits and herbs. It's a low calorie sweet fruity drink that will give your digestive system a healthy boost!",
        price: 120
    },
    {
        id: 5,
        type: "Mocktail",
        name: "Beach Tropicana",
        image: "https://i.ibb.co/r5Bt5Hs/Tropicana.png",
        recipes: "The flavor combination is so addictive you'll find yourself craving for more.",
        price: 130
    },
    {
        id: 6,
        type: "Indian Main Course Veg",
        name: "Paneer Butter Masala",
        image: "https://i.ibb.co/Lt4BcNF/Paneer1.png",
        recipes: "Paneer Butter Masala is one of India’s most popular paneer recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is a best one that I have been making for a long time.",
        price: 150
    },
    {
        id: 7,
        type: "Indian Main Course Veg",
        name: "Paneer Manchurian",
        image: "https://i.ibb.co/vPmnZJr/Paneer2.png",
        recipes: "This Paneer Manchurian Gravy of crispy paneer cubes in a sour & umami gravy or sauce. You will find this Paneer Manchurian with sauce in many restaurants serving Chinese food.",
        price: 120
    },
    {
        id: 8,
        type: "Indian Main Course Veg",
        name: "Baby Corn Manchurian",
        image: "https://i.ibb.co/GRTPkCy/Babycorn.png",
        recipes: "The recipe of Baby corn manchurian gravy has spicy, sweet, umami and sour tastes that taste great with veg fried rice or veg noodles or hakka noodles.",
        price: 180
    },
    {
        id: 9,
        type: "Indian Main Course Veg",
        name: "Kadai Mushroom",
        image: "https://i.ibb.co/QkTv6k3/Mushroom.png",
        recipes: "Kadai Mushroom is such a super easy and delicious dish of sautéed button mushrooms, onions, bell peppers (capsicum) in a spiced, tangy tomato sauce. The recipe comes together in 30 minutes and so delish with naan, roti and even bread rolls.",
        price: 150
    },
    {
        id: 10,
        type: "Indian Main Course Veg",
        name: "Mushroom manchurian",
        image: "https://i.ibb.co/CP7pkzP/Mushroom1.png",
        recipes: "For all mushroom lovers, this is another fantastic spicy Indo Chinese recipe of mushroom manchurian dry. A vegan dish",
        price: 180
    },
    {
        id: 11,
        type: "Rice and Biryani",
        name: "Veg Pulao",
        image: "https://i.ibb.co/25wsRg4/Pulao.png",
        recipes: "Pulao or pilaf, is comfort food at its best. This one-pot dish made with rice and vegetables has added spices and herbs, giving it a mild aromatic flavor. The dish is also vegetarian and is great on its own or paired with raita (an Indian yogurt dish), pickle and roasted papad (a crisp thin Indian snack).",
        price: 180
    },
    {
        id: 12,
        type: "Rice and Biryani",
        name: "Kashmiri Pulao",
        image: "https://i.ibb.co/zb8zGPg/pulao1.png",
        recipes: "My recipe for Kashmiri Pulao is packed with toasted nuts and warming spices for an aromatic rice dish that is mild and faintly sweet in taste. Whether you serve this gluten-free and vegetarian dish as a side or light lunch, you’re sure to love it.",
        price: 220
    },
    {
        id: 13,
        type: "Rice and Biryani",
        name: "Fried Rice",
        image: "https://i.ibb.co/nsQsVsF/Fried-Rice.png",
        recipes: "This classic fried rice recipe is loaded with fresh mixed veggies and aromatic spices for an incredibly hearty, flavorful vegan dish. Hands-down this is one of our favorite Chinese-inspired recipes. Not only is vegetable fried rice amazingly easy to make from scratch, a naturally vegan dish that's as good for you as it is delicious to eat. You can even tweak veg fried rice to be gluten-free simply by using GF-friendly soy sauce or tamari.",
        price: 200
    },
    {
        id: 14,
        type: "Rice and Biryani",
        name: "Chicken Biryani ",
        image: "https://i.ibb.co/jwZ4RQj/Biryani.png",
        recipes: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you’ll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it’s marinated in.",
        price: 200
    },
    {
        id: 15,
        type: "Rice and Biryani",
        name: "Mutton Biryani",
        image: "https://i.ibb.co/VgmDn7Q/Biryani2.png",
        recipes: "This mutton biryani recipe has layers of mutton and saffron-milk infused rice cooked 'dum' style. It has a host of aromatic spices and herbs such as star anise, bay leaves, cardamom, cinnamon, cloves, jaiphal, and javitri along with chillies, rose water, kewda and saffron cooked with succulent mutton pieces.",
        price: 250
    },
    {
        id: 16,
        type: "Pizza",
        name: "Margherita pizza",
        image: "https://i.ibb.co/zHkj4Qv/pizza.png",
        recipes: "Everyone loves pizza, and we’re starting off this awesome list with a margherita pizza that you can make in a skillet. It’s filled with fresh mozzarella, ripe tomatoes, and basil leaves. It’s also got a perfect crispy golden crust!",
        price: 180
    },
    {
        id: 17,
        type: "Pizza",
        name: "Chicken pizza",
        image: "https://i.ibb.co/P9TZdzj/pizza1.png",
        recipes: "This Italian favorite pizza is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken. Explore the juiciness of meaty chicken chunks embedded in gooey cheesiness. It can't get better than this.",
        price: 220
    },
    {
        id: 18,
        type: "Pizza",
        name: " Kebab and Paneer Pizza",
        image: "https://i.ibb.co/M2bVHCG/pizza2.png",
        recipes: "Think out-of-the-box-cooking, think fusion food. This is what you get when Italian cooking marries Indian flavours. A mouth watering pizza recipe that is sure to tantalize your taste buds. This fusion of Mughlai seekh kebab and Italian pizza recipe is easy and quick.",
        price: 250
    },
    {
        id: 19,
        type: "Pizza",
        name: "bacon breakfast pizza",
        image: "https://i.ibb.co/yRSRxbx/pizza3.png",
        recipes: "Sometimes, you just want pizza for breakfast. Why not make this bacon breakfast pizza, so you can enjoy the tasty pizza, while still using traditional breakfast ingredients like crispy bacon and eggs that are perfectly cooked.",
        price: 200
    },
    {
        id: 20,
        type: "Pizza",
        name: "Vegetarian Pizza",
        image: "https://i.ibb.co/C7yqH3S/pizza4.png",
        recipes: "Garden fresh veggies come together to create a delicious symphony for your taste-buds. Lots of variety and a harmony of flavours teamed with unmatchable cheesiness, heavenly indeed! This special vegetarian pizza recipe will be loved by kids and adults alike.",
        price: 220
    },
    {
        id: 21,
        type: "Burgers",
        name: "Chilli burger ",
        image: "https://i.ibb.co/bgG0013/burger.png",
        recipes: "This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.",
        price: 100
    },
    {
        id: 22,
        type: "Burgers",
        name: "Crunchy Chicken and Fish Burger",
        image: "https://i.ibb.co/Pc1sGhB/burger1.png",
        recipes: "If a burger for you is all about the meat and protein then you're at the right place. Experience the goodness of chicken, fish and a tangy hot and sour sauce.",
        price: 150
    },
    {
        id: 23,
        type: "Burgers",
        name: "Chicken Feta Cheese Burger",
        image: "https://i.ibb.co/0VqGdZX/burger2.png",
        recipes: "Chicken mince marinated with salt, pepper and feta cheese is only the beginning of this ultimate wonder. To accompany this we've got a guilt free potato salad with a yogurt dressing.",
        price: 150
    },
    {
        id: 24,
        type: "Burgers",
        name: "Lentil and Mushroom Burger",
        image: "https://i.ibb.co/L1yQLYq/burger3.png",
        recipes: "For the healthy and calorie conscious folks we've got this tasty burger. A lentil, mushroom and sun dried tomato pattie packed between a whole wheat bun.",
        price: 120
    },
    {
        id: 25,
        type: "Burgers",
        name: "Butter Chicken Twin Burgers",
        image: "https://i.ibb.co/ctKTdV7/burger4.png",
        recipes: "Made with chicken tikka coated in spicy, delicious makhani gravy filled inside a burger bun. Butter chicken twin burgers are a tasty snack or appetizer for kids and adults alike!.",
        price: 130
    },
    {
        id: 26,
        type: "Sandwich",
        name: "Dahi Sandwich",
        image: "https://i.ibb.co/9yq3vTh/sandwich.png",
        recipes: "This Indian version is made using yogurt, and it looks like thick cream cheese. It works as a lovely, creamy base into which you’ll add crunchy diced veggies and a few spices. Fill the bread and cook on medium heat until the outside is golden and the middle is warmed through.",
        price: 80
    },
    {
        id: 27,
        type: "Sandwich",
        name: "Aloo Toast Sandwich",
        image: "https://i.ibb.co/0FvkBZZ/sandwich1.png",
        recipes: "Aloo is the Hindi word for potato, and it’s a popular ingredient in Indian cooking. I knew I’d love this recipe once I saw the combination of warm spices and luscious chutney. And it all starts with simple, boiled potatoes. ",
        price: 60
    },
    {
        id: 28,
        type: "Sandwich",
        name: "Indian Bread Omelette",
        image: "https://i.ibb.co/JymLshB/sandwich2.png",
        recipes: "Although this sandwich isn’t loaded with spice, it’s actually a super traditional street food in India.You’ll find it at vendors all over the place, and I love that the recipe has gone viral.After all, what could be better than egg-dipped bread wrapped in cheese, served crispy with bacon and scallions.It takes minutes to throw together, and it will fill you up all day long.",
        price: 40
    },
    {
        id: 29,
        type: "Sandwich",
        name: "Paneer Sandwich Recipe",
        image: "https://i.ibb.co/7YDqsML/sandwich3.png",
        recipes: "Paneer is a milky type of soft cheese that looks just like cheese curds, though the texture is more like feta (crumbly).It’s sliceable and super mild, and since it doesn’t melt like regular cheese, it holds its shape in everything from toasted sandwiches to curries. Mix it with veggies, spices, and a little tomato paste for something pretty unique and hard to resist.",
        price: 80
    },
    {
        id: 30,
        type: "Sandwich",
        name: "Avocado Tandoori Chicken Sandwich",
        image: "https://i.ibb.co/ryk2SmB/sandwich4.png",
        recipes: "First of all, how amazing does this Indian sandwich look? That bright green against the vibrant tandoori chicken has me drooling. And it tastes even better than it looks. Keep it simple with smashed avocado and chicken, or ramp it up with some crunchy red onions and green chilies.",
        price: 100
    },

]
export default Fakedata;