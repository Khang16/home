import Content from "./users/catory.component";
import { Slide } from "./users/slide.component";
import { ProductComponent } from "./users/product.component";
import ProductIDComponent  from "./users/productID.component";
import { CategoryComponent } from "./users/catory.component";
import CartComponent from "./users/cart.component";
export const contentRouter={
    path: 'home',
    children:[
        
        {
            path: 'slide',
            element: <Slide></Slide>
        },
        {
            path: 'product/:productId',
            element: <ProductIDComponent></ProductIDComponent>
        },
        {
            path: 'category/:categoryName',
            element: <CategoryComponent></CategoryComponent>
        },
        {
            path: 'cart',
            element: <CartComponent></CartComponent>
        },
        
    ]
}