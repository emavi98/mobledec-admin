import { Card, Button } from 'components';
import ProductImageComponent from './components/product-image/product-image';
import ProductContentComponent from './components/product-content/product-content';
import DeleteIconComponent from './components/delete-icon/delete-icon';

const CardProductComponent = ({ product }) => {
  return (
    <div className="mt-4">
      <Card>
        <div className="flex p-2">
          <ProductImageComponent />
          <ProductContentComponent product={product} />
          <Button className="ml-auto" size="icon" variant="ghost">
            <DeleteIconComponent />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardProductComponent;
