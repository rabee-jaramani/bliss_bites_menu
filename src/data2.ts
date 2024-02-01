import placeholder from "./images/placeholder.webp";
import Beverages from "./images/top_menu/Beverages.webp";
import All_Day_Menu from "./images/top_menu/All_Day_Menu.webp";
import Breakfast from "./images/top_menu/Breakfast.webp";
import Blissful_Desserts from "./images/top_menu/Blissful_Desserts.webp";
import gluten_free from "./images/icons/gluten_free.svg";
import recommended from "./images/icons/recommended.svg";
import refined_sugar_free from "./images/icons/refined_sugar_free.svg";
import spicy from "./images/icons/spicy.svg";
import vegan from "./images/icons/vegan.svg";
import sugar_free from "./images/icons/refined_sugar_free.svg";

import adorabowl from "./images/items/adorabowl.webp";
import alkhuzamma from "./images/items/alkhuzamma.webp";
import almastakii from "./images/items/almastakii.webp";
import arabian_night_loose from "./images/items/arabian_night_loose.webp";
import beetroot_sriracha from "./images/items/beetroot_sriracha.webp";
import berry_bliss_acai from "./images/items/berry_bliss_acai.webp";
import charcoal_latte from "./images/items/charcoal_latte.webp";
import chicken_charcoal from "./images/items/chicken_charcoal.webp";
import flat_white_and_cappuccino from "./images/items/flat_white_&_cappuccino.webp";
import free_range_roost from "./images/items/free_range_roost.webp";
import french_toast_parisian from "./images/items/french_toast_parisian.webp";
import french_toast_zaefran from "./images/items/french_toast_zaefran.webp";
import fresh_juices_orange from "./images/items/fresh_juices_orange.webp";
import fromage_frais from "./images/items/fromage_frais.webp";
import healthy_harvest from "./images/items/healthy_harvest.webp";
import hot_chocolate from "./images/items/hot_chocolate.webp";
import iced_blue_latte from "./images/items/iced_blue_latte.webp";
import iced_strawberry_matcha_latte from "./images/items/iced_strawberry_matcha_latte.webp";
import joey from "./images/items/joey.webp";
import khameer from "./images/items/khameer.webp";
import labneh_mush from "./images/items/labneh_mush.webp";
import levian_toast from "./images/items/levian_toast.webp";
import macchiato from "./images/items/macchiato.webp";
import matcha_latte from "./images/items/matcha_latte.webp";
import merc_mexico_salad from "./images/items/merc_mexico_salad.webp";
import mocha from "./images/items/mocha.webp";
import mr_promise from "./images/items/mr_promise.webp";
import pistachio_hazelnut_tart from "./images/items/pistachio_hazelnut_tart.webp";
import precious_oud_tea from "./images/items/precious_oud_tea.webp";
import roasted_coffee_and_chocolate_mousse from "./images/items/roasted_coffee_&_chocolate_mousse.webp";
import rose_pistachio_eclair from "./images/items/rose_pistachio_eclair.webp";
import rustic from "./images/items/rustic.webp";
import super_food_central_acai from "./images/items/super_food_central_acai.webp";
import tempeh_pepper_wrap from "./images/items/tempeh_pepper_wrap.webp";
import the_holy_tms from "./images/items/the_holy_tms.webp";
import tomates_secados_alsol from "./images/items/tomates_secados_alsol.webp";
import tonkatsu from "./images/items/tonkatsu.webp";
import tropical_boon_acai from "./images/items/tropical_boon_acai.webp";
import turmeric_green_tea_blend from "./images/items/turmeric_green_tea_blend.webp";
import turmeric_latte from "./images/items/turmeric_latte.webp";
import valley_sriracha_toast from "./images/items/valley_sriracha_toast.webp";
import work_to_walk from "./images/items/work_to_walk.webp";
import zesty_ladle_soup from "./images/items/zesty_ladle_soup.webp";

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
  { menu_name: "BREAKFAST", menu_img: Breakfast },
  { menu_name: "ALL DAY MENU", menu_img: All_Day_Menu },
  { menu_name: "BEVERAGES", menu_img: Beverages },
  { menu_name: "BLISSFUL DESSERTS", menu_img: Blissful_Desserts },
];

export const food_collections = ["BREAKFAST", "ALL DAY MENU"];
export const food_categories = [
  "Acai of Relief",
  "Power Protien",
  "French Toast - Sweet",
  "French Toast - Savoury",
  "French Toast - Open Toasts",
  "Wraps and Crepes",
  "Salads",
  "Soups",
  "No Dough Burger",
  "Bowls",
  "Pasta",
  "Chef's Must-Have Sides",
];
export const food_full_menu_2 = [
  {
    parentCatName: "BREAKFAST",
    parentCatCollection: [
      {
        categoryName: "Acai of Relief",
        items: [
          {
            itemName: "BERRY BLISS ACAI",
            price: "45",
            description:
              "Fresh banana, fresh berries, in-house granola with chia seeds",
            image: berry_bliss_acai,
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
            image: tropical_boon_acai,
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
            image: super_food_central_acai,
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
            image: free_range_roost,
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
            image: french_toast_parisian,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ZAEFRAN",
            price: "50",
            description:
              "Saffron crème ganache french toast served with fresh strawberries",
            image: french_toast_zaefran,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ALKHUZAMMA",
            price: "50",
            description:
              "French toast with lavendar ganache and a hue of berries",
            image: alkhuzamma,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "ALMASTAKII",
            price: "50",
            description:
              "French toast with mastic tree ganache and caramelised banana",
            image: almastakii,
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
            image: fromage_frais,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "TOMATOES SECADOS AL SOL",
            price: "45",
            description: "French toast with sundried tomato pesto cream cheese",
            image: tomates_secados_alsol,
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
            image: levian_toast,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "JOEY",
            price: "50",
            description: "Scrambled eggs with guacamole, and slices of avocado",
            image: joey,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "LABNEH MUSH",
            price: "50",
            description:
              "Labneh, toasted with mushrooms and spinach, fried basil with boiled egg and chilli flakes",
            image: labneh_mush,
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
            image: valley_sriracha_toast,
            allergies: [gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "TONKATSU",
            price: "50",
            description:
              "Katsu glazed grilled halloumi with sweet soy sesame cream cheese",
            image: tonkatsu,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
            addons: [""],
          },
          {
            itemName: "THE HOLY TMS",
            price: "50",
            description:
              "Silken tofu, mushroom and spinach, dash of cheddar flavoured with curry powder",
            image: the_holy_tms,
            allergies: [recommended, gluten_free, refined_sugar_free, spicy],
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
            image: tempeh_pepper_wrap,
            allergies: [gluten_free, refined_sugar_free, spicy, vegan],
            addons: [""],
          },
          {
            itemName: "BEETROOT SRIRACHA",
            price: "55",
            description:
              "Tofu glazed in sriracha, chargrilled brocolli & in-house sriracha mayo wrapped in lettuce & kale",
            image: beetroot_sriracha,
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
            image: chicken_charcoal,
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
            image: merc_mexico_salad,
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
            image: healthy_harvest,
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
            image: zesty_ladle_soup,
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
            image: mr_promise,
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
            image: rustic,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "ADORABOWL",
            price: "50",
            description:
              "Rustic red beans, red rice risotto, fresh guacamole and in-house nachos and sour cream",
            image: adorabowl,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "WOK TO WALK",
            price: "50",
            description:
              "Rice noodles, in-house vegan sriracha, sriracha glazed tofu, grilled mushrooms and asparagus",
            image: work_to_walk,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "KHAMEER",
            price: "50",
            description:
              "Generous serving of green hummus, in-house beet root pita bread, grilled halloumi cheese, chickpea salad served with grilled veggies and garlic foam",
            image: khameer,
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
            price: "35",
            description:
              "Pure Blend of fresh carrots, red apples, oranges and of course no water!",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Citrus",
            price: "35",
            description:
              "Blend of fresh pineapples, carrots, oranges, green apples and of course no water!",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Power Greens",
            price: "35",
            description:
              "Fresh baby spinach, green apples, lime, coconut water, ginger, kale, cucmber and of course no water",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Fresh Juices",
            price: "30",
            description: "Orange, Carrot, Pineapple, Watermelon",
            image: fresh_juices_orange,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Beetroot",
            price: "35",
            description:
              "Fresh baby spinach, green apples, lime, coconut water, ginger, kale, cucmber and of course no water",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
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
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Cappuccino",
            price: "25",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Cortado",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Mocha",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Coconut Cold Coffee",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Date & Caramel Frappe",
            price: "35",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Latte",
            price: "25",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Americano",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Blue Latte",
            price: "25",
            description: "",
            image: iced_blue_latte,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Iced Strawberry Matcha Latte",
            price: "30",
            description: "",
            image: iced_strawberry_matcha_latte,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Cinderella",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Orange Hibiscus",
            price: "25",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
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
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Cortado",
            price: "25",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Charcoal Latte",
            price: "30",
            description: "",
            image: charcoal_latte,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Turmeric Latte",
            price: "25",
            description: "",
            image: turmeric_latte,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Flat White",
            price: "25",
            description: "",
            image: flat_white_and_cappuccino,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Macchiato",
            price: "20",
            description: "",
            image: macchiato,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Matcha Latte",
            price: "25",
            description: "",
            image: matcha_latte,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Mocha",
            price: "25",
            description: "",
            image: mocha,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Hot Chocolate",
            price: "25",
            description: "",
            image: hot_chocolate,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Espresso",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Cafè Latte",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Cappuccino",
            price: "25",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Americano",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
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
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Herbal Karak",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Precious Oud Tea",
            price: "20",
            description: "",
            image: precious_oud_tea,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "English Breakfast",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Arabian Night",
            price: "20",
            description: "",
            image: arabian_night_loose,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Cinnamon Star",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Turmeric Green",
            price: "20",
            description: "",
            image: turmeric_green_tea_blend,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Green Jasmine",
            price: "20",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Drinks",
        items: [
          {
            itemName: "Evian Water (S/L)",
            price: "20/25",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "Sparkling Water (S/L)",
            price: "20/25",
            description: "",
            image: placeholder,
            allergies: [""],
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
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Pistachio Raspberry Mousse",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Roasted Coffee & Chocolate Mousse",
            price: "40",
            description: "",
            image: roasted_coffee_and_chocolate_mousse,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Rose Pistachio Eclair",
            price: "35",
            description: "",
            image: rose_pistachio_eclair,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Mango Chia Pudding",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [recommended, gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Tiramisu",
            price: "35",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Tarts",
        items: [
          {
            itemName: "Pistachio Hazelnut",
            price: "30",
            description: "",
            image: pistachio_hazelnut_tart,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Hazelnut Crème",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Pecan",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Cheesecake",
        items: [
          {
            itemName: "Crème Brulèe",
            price: "35",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Orange Bask",
            price: "35",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Vegan Lemon",
            price: "35",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Cakes Galore",
        items: [
          {
            itemName: "Dark Chocolate Cake",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Dark Chocolate Strawberry",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Dark Chocolate Raspberry",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Fresh Fruits Crème",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Chocolate Almond Praline",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Toffee & Pecan cake with milk chocolate Ganache ",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Tea Cakes",
        items: [
          {
            itemName: "Toffee Date Tea Cake",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Peacan Carrot Tea Cake",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free, vegan],
            addons: [""],
          },
          {
            itemName: "Banana Pecan Nut Cake",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
          {
            itemName: "Almond Cinnamon",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [gluten_free, refined_sugar_free],
            addons: [""],
          },
        ],
      },
    ],
  },
];
