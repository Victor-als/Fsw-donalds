import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";

interface CartItemProductProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProductProps) => {
  const { decreaseProductQuantity, increaseProductQuantity } =
    useContext(CartContext);
  return ( 
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20  bg-gray-100 rounded-xl">
          <Image src={product.imageUrl} alt={product.name} fill/>
        </div>

        <div className="space-y-1">

          <p className="max-w-[90%] text-xs truncate text-ellipsis">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          
          <div className=" flex items-center gap-1 text-center">
            <Button 
              variant="outline"
              className="h-7 rounded-lg w-7"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon size={16}/>
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button 
              variant="destructive"
              className="rounded-lg h-7 w-7"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button 
        className="h-7 w-7 rounded-lg" 
        variant="outline"
      >
        <Trash2Icon />
      </Button>
    </div>

   );
}
 
export default CartProductItem;