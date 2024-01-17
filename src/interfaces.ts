

// CategoryType is the category name under fb_type (food , drink, desserts...)
export interface CategoryType{
categoryName:string
}
export interface Item_Interface{
    itemName: string, price: string,desciption:string,image:string
}
// list of srting (CategoryType)
export interface ScrollableTabsMenuProps {
  category_types: CategoryType[];
}

export interface SelectedCategory_Interface{
    categoryName:string,
    items:Item_Interface[]
}
export interface FullMenu_Interface {
    type: string;
    categories: {
      categoryName: CategoryType;
      items: {
        itemName: string;
        price: string;
      }[];
    }[];
  }