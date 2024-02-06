import Beverages from "./images/top_menu/Beverages.webp";
import All_Day_Menu from "./images/top_menu/All_Day_Menu.webp";
import Breakfast from "./images/top_menu/Breakfast.webp";
import Blissful_Desserts from "./images/top_menu/Blissful_Desserts.webp";
import berry_bliss_acai from "./images/items/berry_bliss_acai.webp";
import strawberry_chilli_jam_with_toast from "./images/items/strawberry_chilli_jam_with_toast.webp"
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
  { menu_name: "Chef's Must-Have Sides", menu_img: strawberry_chilli_jam_with_toast },
  { menu_name: "Vegan Plant Based", menu_img: berry_bliss_acai },
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
];

export const drinks_collections = ["BEVERAGES"];
export const drinks_categories = [
  "Mocktails - Detox Juice",
  "Iced Coffee",
  "Coffee Organic",
  "Herbal Tea",
  "Drinks",
];


export const desserts_collections = ["BLISSFUL DESSERTS"];
export const desserts_categories = [
  "Plated Desserts",
  "Tarts",
  "Cheesecake",
  "Cakes Galore",
  "Tea Cakes",
];
export const chef_must_have_collections = ["Chef's Must-Have Sides"];
export const chef_must_have_categories = [
  "Chef's Must-Have Sides",
];
