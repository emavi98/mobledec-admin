import { Card, Button } from 'components';
import ProductImageComponent from './components/product-image/product-image';
import ProductContentComponent from './components/product-content/product-content';
import DeleteIconComponent from './components/delete-icon/delete-icon';

const CardProductComponent = () => {
  return (
    <div className="mt-4">
      <Card className="mb-4">
        <div className="flex p-2">
          <ProductImageComponent />
          <ProductContentComponent />
          <Button size="icon" variant="ghost">
            <DeleteIconComponent className="w-4 h-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </Card>

      <Card>
        <div className="flex p-2">
          <ProductImageComponent />
          <ProductContentComponent />
          <Button className="ml-auto" size="icon" variant="ghost">
            <DeleteIconComponent className="w-4 h-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardProductComponent;
