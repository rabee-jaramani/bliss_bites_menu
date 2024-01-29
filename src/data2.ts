import placeholder from "./images/placeholder.webp";
import Berry_Bliss_Acai from "./images/breakfast/Berry_Bliss_Acai.webp";
import FREE_RANGE_ROOST from "./images/breakfast/FREE_RANGE_ROOST.webp";
import Super_Food_Central_Acai from "./images/breakfast/Super_Food_Central_Acai.webp";
import Tropical_Boon_Acai from "./images/breakfast/Tropical_Boon_Acai.webp";
import gluten_free from "./images/icons/gluten_free.svg";
import recommended from "./images/icons/recommended.svg";
import refined_sugar_free from "./images/icons/refined_sugar_free.svg";
import spicy from "./images/icons/spicy.svg";
import vegan from "./images/icons/vegan.svg";
import sugar_free from "./images/icons/refined_sugar_free.svg";
// =CONCATENATE("{",B3,"'",C3,"'",CHAR(44),D3,"'",E3,"'",CHAR(44),F3,"'",G3,"'",CHAR(44),"image:placeholder",CHAR(44),H3,"[","'",I3,"']}",CHAR(44))

// {
//     categoryName: "XXXXXXXXXX",
//     items: [
//       {
//         itemName: "XX",
//         price: "40",
//         description: "XX",
//         image: placeholder,
//         addons: ["XX", "XX", "XX", "XX"],
//       },
//     ],
//   },
export const menu_collections = [
  { menu_name: "ALL DAY BREAKFAST", menu_img: Berry_Bliss_Acai },
  { menu_name: "ALL DAY MENU", menu_img: FREE_RANGE_ROOST },
  { menu_name: "BEVERAGES", menu_img: Super_Food_Central_Acai },
  { menu_name: "BLISSFUL DESSERTS", menu_img: Tropical_Boon_Acai },
];

export const food_collections = ["ALL DAY BREAKFAST", "ALL DAY MENU"];
export const food_categories = [
  "Acai of Relief",
  "Power Protien",
  "French Toast - Sweet",
  "French Toast - Savoury",
  "French Toast - Open Toasts",
  "Wraps and Crepes",
  "Salads",
  "Soups",
  "Burger",
  "Bowls",
  "Pasta",
  "Chef's Must-Have Sides",
];
export const food_full_menu_2 = [
  {
    parentCatName: "ALL DAY BREAKFAST",
    parentCatCollection: [
      {
        categoryName: "Acai of Relief",
        items: [
          {
            itemName: "BERRY BLISS ACAI",
            price: "45",
            description:
              "Fresh banana, fresh berries, in-house granola with chia seeds",
            image: placeholder,
            allergies: [recommended, gluten_free, sugar_free, vegan],
            addons: [
              "1. In-House Granola AED 5",
              "2. Steel Cut Oats AED 5",
              "3. Maple Syrup AED 10",
              "4. Coconut agave syrup",
              "5. Desiccated Coconut Flakes AED 5 ",
              "6. Sunflower Seeds AED 5",
              "7. Pistachio crème AED 5",
            ],
          },
          {
            itemName: "TROPICAL BOON ACAI",
            price: "45",
            description: "Fresh passion fruit, fresh mango, in-house granola",
            image: placeholder,
            allergies: [gluten_free, sugar_free, vegan],
            addons: [
              "1. In-House Granola AED 5",
              "2. Steel Cut Oats AED 5",
              "3. Maple Syrup AED 10",
              "4. Coconut agave syrup",
              "5. Desiccated Coconut Flakes AED 5 ",
              "6. Sunflower Seeds AED 5",
              "7. Pistachio crème AED 5",
            ],
          },
          {
            itemName: "SUPER FOOD CENTRAL ACAI",
            price: "45",
            description:
              "Sliced banana, peanut butter, coconut flakes and in-house granola",
            image: placeholder,
            allergies: [gluten_free, sugar_free, vegan],
            addons: [
              "1. In-House Granola AED 5",
              "2. Steel Cut Oats AED 5",
              "3. Maple Syrup AED 10",
              "4. Coconut agave syrup",
              "5. Desiccated Coconut Flakes AED 5 ",
              "6. Sunflower Seeds AED 5",
              "7. Pistachio crème AED 5",
            ],
          },
        ],
      },
      {
        categoryName: "Power Protien",
        items: [
          {
            itemName: "FREE RANGE ROOST",
            price: "55",
            description:
              "Eggs Benedict: poached egg, in-house red kidney beans, sweet potato roasty, sliced avocado, served with in-house millet-based Toast with Tzatziki spread",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [
              "1. Truffle almond soft cheese AED 5",
              "2. Cranberry jalapeno soft cheese AED 5",
              "3. Sweet potato fries AED 15",
              "4. Special kidney beans AED 5",
            ],
          },
          {
            itemName: "SPAN-EGGS",
            price: "55",
            description:
              "Frittata omlette served with in-house millet-based ciabatta toast and rosemary mash on the side",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [
              "1. Truffle almond soft cheese AED 5",
              "2. Cranberry jalapeno soft cheese AED 5",
              "3. Sweet potato fries AED 15",
              "4. Special kidney beans AED 5",
            ],
          },
          {
            itemName: "I AM HUMBLED",
            price: "55",
            description:
              "Scrambled eggs with choice of cheese, grilled vegetables served with out in-house millet-based cheddar jalapeno toast",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [
              "1. Truffle almond soft cheese AED 5",
              "2. Cranberry jalapeno soft cheese AED 5",
              "3. Sweet potato fries AED 15",
              "4. Special kidney beans AED 5",
            ],
          },
        ],
      },
      {
        categoryName: "French Toast - Sweet",
        items: [
          {
            itemName: "YORK HILL FARM",
            price: "50",
            description:
              "A classic french toast with cream cheese and berries on the side",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ZAEFRAN",
            price: "50",
            description:
              "Saffron crème ganache french toast served with fresh strawberries",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ALKHUZAMMA",
            price: "50",
            description:
              "French toast with lavendar ganache and a hue of berries",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ALMASTAKII",
            price: "50",
            description:
              "French toast with mastic tree ganache and caramelised banana",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "PARISIAN",
            price: "50",
            description:
              "French toast with toffee ganache, pecan nuts and fresh raspberries",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "French Toast - Savoury",
        items: [
          {
            itemName: "FORMAGE FRAIS",
            price: "45",
            description: "French toast with chilli chives cream cheese ",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "TOMATOES SECADOS AL SOL",
            price: "45",
            description: "French toast with sundried tomato pesto cream cheese",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "French Toast - Open Toasts",
        items: [
          {
            itemName: "LEVIAN TOAST",
            price: "50",
            description: "Scrambled silken tofu with crème",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "JOEY",
            price: "50",
            description: "Scrambled eggs with guacamole, and slices of avocado",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "LABNEH MUSH",
            price: "50",
            description:
              "Labneh, toasted with mushrooms and spinach, fried basil with boiled egg and chilli flakes",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "BBQ",
            price: "50",
            description:
              "Caramelized onion, cheddar cheese and grilled tofu glazed with in-house barbeque sauce",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "VALLEY SRIRACHA TOAST",
            price: "50",
            description:
              "In-house vegan sriracha, fresh strawberries, fresh basil and fresh labneh",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "TONKATSU",
            price: "50",
            description:
              "Katsu glazed grilled halloumi with sweet soy sesame cream cheese",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "THE HOLY TMS",
            price: "50",
            description:
              "Silken tofu, mushroom and spinach, dash of cheddar flavoured with curry powder",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "LBT",
            price: "50",
            description:
              "Labneh, Pineapple Toast: Labneh with fresh cucumber chives and fresh pineapple",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "BBQ CHICKEN",
            price: "65",
            description:
              "Grilled barbeque chicken with sweet potato mash and caramelised onions",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
    ],
  },
  {
    parentCatName: "ALL DAY MENU",
    parentCatCollection: [
      {
        categoryName: "Wraps and Crepes",
        items: [
          {
            itemName: "TEMPEH PEPPER",
            price: "55",
            description:
              "Scrambled tempeh with curry chowder served with in-house preserves and vegan mayo",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, spicy, vegan],
            addons: [""],
          },
          {
            itemName: "BEETROOT SRIRACHA",
            price: "55",
            description:
              "Tofu glazed in sriracha, chargrilled brocolli & in-house sriracha mayo wrapped in lettuce & kale",
            image: placeholder,
            allergies: [
              recommended,
              gluten_free,
              refined_sugar_free,
              spicy,
              vegan,
            ],
            addons: [""],
          },
          {
            itemName: "CHICKEN CHARCOAL",
            price: "60",
            description:
              "Chicken marinated in herbs and spices served on a charcoal crepe with a poached egg",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Salads",
        items: [
          {
            itemName: "MERC MEXICO SALAD",
            price: "50",
            description:
              "Guacamole, baby spinach, feta cheese, cherry tomatoes, pecan nuts and in-house gluten-free and vegan nachos and crackers",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free, vegan],
            addons: [
              "1. Grilled Chicken AED 20",
              "2. Norweigian Salmon AED 20",
              "3. Boiled Eggs AED 10",
              "4. Poached Eggs AED 10",
              "5. Sweet Potato Fries AED 15",
              "6. Parmesan AED 5",
            ],
          },
          {
            itemName: "HEALTHY HARVEST",
            price: "50",
            description:
              "Tri-colour quinoa, smoked broccoli, fresh beetroot, feta cheese, carrots, cucumber and mixed greens",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [
              "1. Grilled Chicken AED 20",
              "2. Norweigian Salmon AED 20",
              "3. Boiled Eggs AED 10",
              "4. Poached Eggs AED 10",
              "5. Sweet Potato Fries AED 15",
              "6. Parmesan AED 5",
            ],
          },
        ],
      },
      {
        categoryName: "Soups",
        items: [
          {
            itemName: "ZESTY LADLE SOUP",
            price: "45",
            description:
              "Roasted red bell pepper, roasted tomatoes, roasted carrots, celery and vegetable stock",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "MUSHROOM CAPPUCCINO",
            price: "45",
            description:
              "Roasted mushroom soup made with fresh button mushroom, grilled chilli, fresh milk, fresh cream, carrots and ginger dash or organic Matina coffee",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "No Dough Burger",
        items: [
          {
            itemName: "LEAN GREEN",
            price: "55",
            description:
              "Quinoa Burger: roasted red bell pepper, cucumber pickles, caramelised onions, cheddar cheese, almond cream cheese and sweet potato fries",
            image: placeholder,
            allergies: [""],
            addons: ["Sesame burger bun bread optional"],
          },
          {
            itemName: "MR. PROMISE",
            price: "65",
            description:
              "Jackfruit Vegan Chicken Burger: roasted bell pepper, garlic toum served on a bed of fresh lettuce and baby spinach",
            image: placeholder,
            allergies: [""],
            addons: ["Sesame burger bun bread optional"],
          },
        ],
      },
      {
        categoryName: "Bowls",
        items: [
          {
            itemName: "RUSTIC",
            price: "50",
            description:
              "Countryside lentils, chargrilled broccoli, and mango passion fruit chilli chutney served with grilled vegetables",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "ADORABOWL",
            price: "50",
            description:
              "Rustic red beans, red rice risotto, fresh guacamole and in-house nachos and sour cream",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "WOK TO WALK",
            price: "50",
            description:
              "Rice noodles, in-house vegan sriracha, sriracha glazed tofu, grilled mushrooms and asparagus",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "KHAMEER",
            price: "50",
            description:
              "Generous serving of green hummus, in-house beet root pita bread, grilled halloumi cheese, chickpea salad served with grilled veggies and garlic foam",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Pasta",
        items: [
          {
            itemName: "Al Pomodoro",
            price: "55",
            description:
              "In-house gluten-free pasta with gluten-free & vegan fresh tomato sauce, fresh herbs and paremsan with gluten-free garlic bread",
            image: placeholder,
            allergies: [""],
            addons: [
              "1. Chargrilled Tempeh AED 15",
              "2. Chargrilled veggies AED 15",
              "3. Grilled Chicken AED 20",
            ],
          },
          {
            itemName: "Alfredo",
            price: "55",
            description:
              "In-house gluten-free pasta tossed with in-house vegan cream with semi dried grilled veggies and gluten-free garlic bread",
            image: placeholder,
            allergies: [""],
            addons: [
              "1. Chargrilled Tempeh AED 15",
              "2. Chargrilled veggies AED 15",
              "3. Grilled Chicken AED 20",
            ],
          },
          {
            itemName: "Bliss",
            price: "55",
            description:
              "In-house sauce with pestelled spices & herbs blended with vegan cream served with gluten-free garlic bread",
            image: placeholder,
            allergies: [""],
            addons: [
              "1. Chargrilled Tempeh AED 15",
              "2. Chargrilled veggies AED 15",
              "3. Grilled Chicken AED 20",
            ],
          },
        ],
      },
      {
        categoryName: "Chef's Must-Have Sides",
        items: [
          {
            itemName: "Strawberry Chilli Jam with Toast",
            price: "15",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
          {
            itemName: "Creamy Sweet Potato Mash",
            price: "15",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
          {
            itemName: "Strawberry Basil Jam with Toast",
            price: "15",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
          {
            itemName: "Cheesy Potato Veggies",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
          {
            itemName: "Mango Passionfruit Chilli Jam with Toast",
            price: "15",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
          {
            itemName: "Grilled Veggies",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [
              "*All our dishes are made with millets *Kindly inquire for plant-based alternatives.",
            ],
          },
        ],
      },
    ],
  },
];
export const drinks_collections = ["BEVERAGES"];
export const drinks_categories = [
  "Mocktails - Detox Juice",
  "Fresh Juices",
  "Iced Coffee",
  "Coffee Organic",
  "Herbal Tea",
  "Drinks",
];
export const drinks_full_menu_2 = [
  {
    parentCatName: "BEVERAGES",
    parentCatCollection: [
      {
        categoryName: "Mocktails - Detox Juice",
        items: [
          {
            itemName: "Booster",
            price: "30",
            description:
              "Pure Blend of fresh carrots, red apples, oranges and of course no water!",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Citrus",
            price: "30",
            description:
              "Blend of fresh pineapples, carrots, oranges, green apples and of course no water!",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Power Greens",
            price: "30",
            description:
              "Fresh baby spinach, green apples, lime, coconut water, ginger, kale, cucmber and of course no water",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Fresh Juices",
        items: [
          {
            itemName: "Orange",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Watermelon",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Pineapple",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Lemon",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Carrot",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Banana",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Kiwi",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Strawberry",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Iced Coffee",
        items: [
          {
            itemName: "Iced Spanish Latte",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Cappuccino",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Cortado",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Mocha",
            price: "27",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Coconut Cold Coffee",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Date & Caramel Frappe",
            price: "35",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Latte",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Americano",
            price: "19",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Blue Latte",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Iced Strawberry Matcha Latte",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Cinderella",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Orange Hibiscus",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Coffee Organic",
        items: [
          {
            itemName: "Piccolo",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Cortado",
            price: "23",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Charcoal Latte",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Turmeric Latte",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Flat White",
            price: "24",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Macchiato",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Matcha Latte",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Mocha",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Hot Chocolate",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Espresso",
            price: "19",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Cafè Latte",
            price: "24",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Cappuccino",
            price: "24",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Americano",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Herbal Tea",
        items: [
          {
            itemName: "Earl Grey Tea",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Karak Powder",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Precious Oud Tea",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "English Breakfast",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Arabian Night Loose",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Cinnamon Star",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Turmeric Green Tea Blend",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Green Jasmine",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Drinks",
        items: [
          {
            itemName: "Evian Water",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Sparkling Water",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
    ],
  },
];

export const desserts_collections = ["BLISSFUL DESSERTS"];
export const desserts_categories = [
  "Plated Desserts",
  "Choux Buns",
  "Tarts",
  "Cheesecake",
  "Cakes Galore",
  "Tea Cakes",
];
export const desserts_full_menu_2 = [
  {
    parentCatName: "BLISSFUL DESSERTS",
    parentCatCollection: [
      {
        categoryName: "Plated Desserts",
        items: [
          {
            itemName: "Galaxie Gooye Raspberry Cake",
            price: "33",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Pistachio Raspberry Mousse",
            price: "33",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Roasted Coffee & Chocolate Mousse",
            price: "33",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Rose Pistachio Eclair",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Mango Chia Pudding",
            price: "33",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Tiramisu",
            price: "25",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Choux Buns",
        items: [
          {
            itemName: "Mastic Choux Bun - Mystic Mastic",
            price: "15",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Levander Choux Bun - Levander Dream",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Pistachio Choux Bun - Pistachio Whirl",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Caramel Choux Bun - Caramel Swirl",
            price: "20",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Hazelnut Choux Bun - Hazelnut Haven",
            price: "15",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Tarts",
        items: [
          {
            itemName: "Pistachio Hazelnut",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Hazelnut",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Pecan",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Cheesecake",
        items: [
          {
            itemName: "Crème Brulèe",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Orange Bask",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Vegan Lemon",
            price: "30",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Cakes Galore",
        items: [
          {
            itemName: "Vegan Dark Chocolate Cake",
            price: "38",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Dark Chocolate Strawberry",
            price: "38",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Dark Chocolate Raspberry",
            price: "38",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Tea Cakes",
        items: [
          {
            itemName: "Toffee Date Tea Cake",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Peacan Carrot Tea Cake",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
          {
            itemName: "Banana Pecan Nut Cake",
            price: "28",
            description: "",
            image: placeholder,
            addons: [""],
          },
        ],
      },
    ],
  },
];
