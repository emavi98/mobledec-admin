import { CardDescription, Button, Input } from "components";
import MinusIconComponent from "../minus-icon/minus-icon";
import { PlusIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductContentComponent = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col gap-1.5 ml-3">
      <CardDescription className="text-sm">{product.name}</CardDescription>
      <CardDescription className="font-medium">{product.price}</CardDescription>
      <div className="flex items-center gap-2">
        <Button className=" h-4 w-4" size="icon" variant="secondary">
          <MinusIconComponent />
          <span className="sr-only">Decrease</span>
        </Button>
        <Input
          className="w-8  h-8 text-center"
          id="quantity"
          min="1"
          value={product.quantity}
        />
        <Button className=" h-4 w-4" size="icon" variant="secondary">
          <PlusIcon className="w-4 h-4" />
          <span className="sr-only">Increase</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductContentComponent;
