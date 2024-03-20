import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import recommended from "../images/icons/recommended.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import spicy from "../images/icons/spicy.svg";
import vegan from "../images/icons/vegan.svg";
import sugar_free from "../images/icons/refined_sugar_free.svg";
import adorabowl from "../images/items/adorabowl.webp";
import alkhuzamma from "../images/items/alkhuzamma.webp";
import almastakii from "../images/items/almastakii.webp";
import beetroot_sriracha from "../images/items/beetroot_sriracha.webp";
import berry_bliss_acai from "../images/items/berry_bliss_acai.webp";
import chicken_charcoal from "../images/items/chicken_charcoal.webp";
import free_range_roost from "../images/items/free_range_roost.webp";
import french_toast_zaefran from "../images/items/french_toast_zaefran.webp";
import fromage_frais from "../images/items/fromage_frais.webp";
import healthy_harvest from "../images/items/healthy_harvest.webp";
import joey from "../images/items/joey.webp";
import khameer from "../images/items/khameer.webp";
import labneh_mush from "../images/items/labneh_mush.webp";
import levian_toast from "../images/items/levian_toast.webp";
import merc_mexico_salad from "../images/items/merc_mexico_salad.webp";
import rustic from "../images/items/rustic.webp";
import super_food_central_acai from "../images/items/super_food_central_acai.webp";
import tempeh_pepper_wrap from "../images/items/tempeh_pepper_wrap.webp";
import the_holy_tms from "../images/items/the_holy_tms.webp";
import tomates_secados_alsol from "../images/items/tomates_secados_alsol.webp";
import tonkatsu from "../images/items/tonkatsu.webp";
import tropical_boon_acai from "../images/items/tropical_boon_acai.webp";
import valley_sriracha_toast from "../images/items/valley_sriracha_toast.webp";
import work_to_walk from "../images/items/work_to_walk.webp";
import zesty_ladle_soup from "../images/items/zesty_ladle_soup.webp";
import lean_green from "../images/items/lean_green.webp";

import mushroom_cappuccino from "../images/items/mushroom_cappuccino.webp";

import parisian from "../images/items/parisian.webp";


import acai_of_relief_addons from "../images/categories_addons_images/acai_of_relief_addons.svg";
import pasta_addons from "../images/categories_addons_images/pasta_addons.svg";
import power_protine_addons from "../images/categories_addons_images/power_protine_addons.svg";
import salads_addons from "../images/categories_addons_images/salads_addons.svg";
import burger_addons from "../images/categories_addons_images/burger_addons.svg";

import bliss from "../images/items/bliss.webp";
import alpomodoro from "../images/items/alpomodoro.webp";
import bbq_chicken from "../images/items/bbq_chicken.webp";
import alfredo from "../images/items/alfredo.webp";
import i_am_humbled from "../images/items/i_am_humbled.webp";
import mr_promise from "../images/items/mr_promise.webp";
import span_eggs from "../images/items/span-eggs.webp";
export const food = [
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
            allergies: [
              { allergyName: `Chef's Recommendation`, allergySrc: recommended },
              { allergyName: `Gluten Free`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
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
            allergies: [
              { allergyName: `Chef's Recommendation`, allergySrc: recommended },
              { allergyName: `Gluten Free`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
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
            allergies: [
              { allergyName: `Chef's Recommendation`, allergySrc: recommended },
              { allergyName: `Gluten Free`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
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
              "Eggs Benedict: poached egg, in-house red kidney beans, sweet potato roasty, sliced avocado, served with in-house millet-based toast with tzatziki spread",
            image: free_range_roost,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
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
            image: span_eggs,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
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
              "Scrambled eggs with choice of cheese, grilled vegetables served with our in-house millet-based cheddar jalapeño toast",
            image: i_am_humbled,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
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
        categoryName: "French Toast - Savoury",
        items: [
          {
            itemName: "FROMAGE FRAIS",
            price: "45",
            description: "French toast with chilli chives cream cheese ",
            image: fromage_frais,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "TOMATOES SECADOS AL SOL",
            price: "45",
            description: "French toast with sundried tomato pesto cream cheese",
            image: tomates_secados_alsol,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
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
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "ZAEFRAN",
            price: "50",
            description:
              "Saffron crème ganache french toast served with fresh strawberries",
            image: french_toast_zaefran,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "ALKHUZAMMA",
            price: "50",
            description:
              "French toast with lavendar ganache and a hue of berries",
            image: alkhuzamma,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "ALMASTAKII",
            price: "50",
            description:
              "French toast with mastic tree ganache and caramelised banana",
            image: almastakii,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "PARISIAN",
            price: "50",
            description:
              "French toast with toffee ganache, pecan nuts and fresh raspberries",
            image: parisian,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },

      {
        categoryName: "French Toast - Open Toasts",
        items: [
          {
            itemName: "LEVIAN",
            price: "50",
            description: "Scrambled silken tofu with crème",
            image: levian_toast,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "JOEY",
            price: "50",
            description: "Scrambled eggs with guacamole, and slices of avocado",
            image: joey,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "LABNEH MUSH",
            price: "50",
            description:
              "Labneh, toasted with mushrooms and spinach, fried basil with boiled egg and chilli flakes",
            image: labneh_mush,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "BBQ",
            price: "50",
            description:
              "Caramelized onion, cheddar cheese and grilled tofu glazed with in-house barbeque sauce",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "VALLEY SRIRACHA",
            price: "50",
            description:
              "In-house vegan sriracha, fresh strawberries, fresh basil and fresh labneh",
            image: valley_sriracha_toast,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "TONKATSU",
            price: "50",
            description:
              "Katsu glazed grilled halloumi with sweet soy sesame cream cheese",
            image: tonkatsu,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "THE HOLY TMS",
            price: "50",
            description:
              "Silken tofu, mushroom and spinach, dash of cheddar flavoured with curry powder",
            image: the_holy_tms,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },

          {
            itemName: "BBQ CHICKEN",
            price: "65",
            description:
              "Grilled barbeque chicken with sweet potato mash and caramelised onions",
            image: bbq_chicken,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
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
        categoryName: "Soups",
        items: [
          {
            itemName: "ZESTY LADLE",
            price: "45",
            description:
              "Roasted red bell pepper, roasted tomatoes, roasted carrots, celery and vegetable stock",
            image: zesty_ladle_soup,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "MUSHROOM CAPPUCCINO",
            price: "45",
            description:
              "Roasted mushroom soup made with fresh button mushroom, grilled chilli, fresh milk, fresh cream, carrots and ginger dash or organic Matina coffee",
            image: mushroom_cappuccino,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },

      {
        categoryName: "Salads",
        items: [
          {
            itemName: "MERC MEXICO",
            price: "50",
            description:
              "Guacamole, baby spinach, halloumi cheese, cherry tomatoes, pecan nuts and in-house gluten-free and vegan nachos and crackers",
            image: merc_mexico_salad,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: salads_addons,
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
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: salads_addons,
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
        categoryName: "Bowls",
        items: [
          {
            itemName: "RUSTIC",
            price: "50",
            description:
              "Countryside lentils, chargrilled broccoli, and mango passion fruit chilli chutney served with grilled vegetables",
            image: rustic,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "ADORABOWL",
            price: "50",
            description:
              "Rustic red beans, red rice risotto, fresh guacamole and in-house nachos and sour cream",
            image: adorabowl,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "WOK TO WALK",
            price: "50",
            description:
              "Rice noodles, in-house vegan sriracha, sriracha glazed tofu, grilled mushrooms and asparagus",
            image: work_to_walk,
            allergies: [
              { allergyName: `Chef's Recommendation`, allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "KHAMEER",
            price: "50",
            description:
              "Generous serving of green hummus, in-house beet root pita bread, grilled halloumi cheese, chickpea salad served with grilled veggies and garlic foam",
            image: khameer,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "Wraps and Crêpes",
        items: [
          {
            itemName: "TEMPEH PEPPER",
            price: "55",
            description:
              "Scrambled tempeh with curry chowder served with in-house preserves and vegan mayo",
            image: tempeh_pepper_wrap,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "BEETROOT SRIRACHA",
            price: "55",
            description:
              "Tofu glazed in sriracha, chargrilled brocolli & in-house sriracha mayo wrapped in lettuce & kale",
            image: beetroot_sriracha,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "CHICKEN CHARCOAL",
            price: "60",
            description:
              "Chicken marinated in herbs and spices served on a charcoal crepe with a poached egg",
            image: chicken_charcoal,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
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
            image: lean_green,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: burger_addons,
            addons: ["Sesame burger bun bread optional"],
          },
          {
            itemName: "MR. PROMISE",
            price: "55",
            description:
              "Jackfruit Vegan Burger: roasted bell pepper, garlic toum served on a bed of fresh lettuce and baby spinach",
            image: mr_promise,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: burger_addons,
            addons: ["Sesame burger bun bread optional"],
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
              "Fresh tomatoes and herbs tossed with our in house gluten free pasta made with millets and rice served with house salad on the side.",
            image: alpomodoro,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
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
              "Fresh in house cashew cream and sweet flavour of nutmeg rolled in our in house gluten free pasta made with millets and rice. served with house salad on the side.",
            image: alfredo,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
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
              "Fresh in-house cashew cream and curry powder tossed with grilled chicken and choice of veggies served with house salad on the side.",
            image: bliss,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
            addons: [
              "1. Chargrilled Tempeh AED 15",
              "2. Chargrilled veggies AED 15",
              "3. Grilled Chicken AED 20",
            ],
          },
        ],
      },
    ],
  },
];
