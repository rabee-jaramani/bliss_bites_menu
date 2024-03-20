import lean_green from "../images/items/lean_green.webp";
import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import recommended from "../images/icons/recommended.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import spicy from "../images/icons/spicy.svg";
import vegan from "../images/icons/vegan.svg";
import sugar_free from "../images/icons/refined_sugar_free.svg";
import beetroot_sriracha from "../images/items/beetroot_sriracha.webp";
import berry_bliss_acai from "../images/items/berry_bliss_acai.webp";
import healthy_harvest from "../images/items/healthy_harvest.webp";
import khameer from "../images/items/khameer.webp";
import merc_mexico_salad from "../images/items/merc_mexico_salad.webp";
import rustic from "../images/items/rustic.webp";
import super_food_central_acai from "../images/items/super_food_central_acai.webp";
import tempeh_pepper_wrap from "../images/items/tempeh_pepper_wrap.webp";
import tropical_boon_acai from "../images/items/tropical_boon_acai.webp";
import work_to_walk from "../images/items/work_to_walk.webp";

import acai_of_relief_addons from "../images/categories_addons_images/acai_of_relief_addons.svg";
import pasta_addons from "../images/categories_addons_images/pasta_addons.svg";
import salads_addons from "../images/categories_addons_images/salads_addons.svg";

import alfredo from "../images/items/alfredo.webp";
import alpomodoro from "../images/items/alpomodoro.webp";
import bliss from "../images/items/bliss.webp";
import mr_promise from "../images/items/mr_promise.webp";
import burger_addons from "../images/categories_addons_images/burger_addons.svg";

export const vegan_plant_based = [
  {
    parentCatName: "Vegan Plant Based",
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
        categoryName: "Salads",
        items: [
          {
            itemName: "MERC MEXICO SALAD",
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
            itemName: "WOK TO WALK",
            price: "50",
            description:
              "Rice noodles, in-house vegan sriracha, sriracha glazed tofu, grilled mushrooms and asparagus",
            image: work_to_walk,
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
              "In-house gluten-free pasta with gluten-free & vegan fresh tomato sauce, fresh herbs and paremsan with gluten-free garlic bread",
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
              "In-house gluten-free pasta tossed with in-house vegan cream with semi dried grilled veggies and gluten-free garlic bread",
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
              "In-house sauce with pestelled spices & herbs blended with vegan cream served with gluten-free garlic bread",
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
