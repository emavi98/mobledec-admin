import { CardDescription, Button, Label, Input } from 'components';
import MinusIconComponent from '../minus-icon/minus-icon';
import { PlusIcon } from 'lucide-react';

const ProductContentComponent = () => {
  return (
    <div className="flex flex-col gap-1.5 ml-3">
      <CardDescription className="text-sm">
        Expo Mesa comedor fija roble/metal 160* 100 cm.roble Nordish pata negra
      </CardDescription>
      <CardDescription className="font-medium">$89.00</CardDescription>
      <div className="flex items-center gap-2">
        <Label className="text-sm">Quantity</Label>
        <Button className=" h-4 w-4" size="icon" variant="secondary">
          <MinusIconComponent />
          <span className="sr-only">Decrease</span>
        </Button>
        <Input
          className="w-8  h-8 text-center"
          id="quantity"
          min="1"
          value="1"
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
