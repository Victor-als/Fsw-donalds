
import { useContext } from "react";

import { 
  Sheet,
  SheetContent, 
  SheetDescription,
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products} = useContext(CartContext)
  return ( 
    <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetTrigger></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Adicionar</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          {products.map(product => (
            <h1 key={product.id}>
              {product.name} - {product.quantity}
            </h1>
          ))}
        </SheetContent>
    </Sheet>
  );
}
 
export default CartSheet;