import { useState, useEffect } from "react";

import Dialog from "../Dialog";
import { ProductModel } from "@/interfaces/general-dto";

import InfoBasic from "./components/InfoBasic";
import InfoStatus from "./components/InfoStatus";
import InfoTax from "./components/InfoTax";
import InfoDimensions from "./components/InfoDimensions";
import InfoCategories from "./components/InfoCategories";
import InfoCombinations from "./components/InfoCombinations";

const ProductDialog = () => {
  const [productInfo, setProductInfo] = useState<ProductModel>({
    slug: "Product",
  });

  /* useEffect(() => {
    console.log(productInfo);
  }, [productInfo]); */
  return (
    <Dialog textBtn="crear producto" dialogName="Product">
      <div>
        <InfoBasic productInfo={productInfo} setProductInfo={setProductInfo} />
        <InfoStatus productInfo={productInfo} setProductInfo={setProductInfo} />
        <InfoTax productInfo={productInfo} setProductInfo={setProductInfo} />
        <InfoDimensions
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
        <InfoCategories
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
        <InfoCombinations
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      </div>
    </Dialog>
  );
};

export default ProductDialog;
