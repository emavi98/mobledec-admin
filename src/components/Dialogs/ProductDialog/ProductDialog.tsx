import Dialog from "../Dialog";

import InfoBasic from "./components/InfoBasic";
import InfoStatus from "./components/InfoStatus";
import InfoTax from "./components/InfoTax";
import InfoDimensions from "./components/InfoDimensions";
import InfoCategories from "./components/InfoCategories";
import InfoCombinations from "./components/InfoCombinations";

const ProductDialog = () => {
  return (
    <Dialog textBtn="crear producto">
      <div>
        <InfoBasic />
        <InfoStatus />
        <InfoTax />
        <InfoDimensions />
        <InfoCategories />
        <InfoCombinations />
      </div>
    </Dialog>
  );
};

export default ProductDialog;
