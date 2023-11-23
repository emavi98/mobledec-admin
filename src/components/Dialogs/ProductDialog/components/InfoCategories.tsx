import { Accordion, Select, InputSH } from "@/components";
import { InfoProductProp } from "@/interfaces/general-dto";

const InfoCategories: React.FC<InfoProductProp> = ({ setProductInfo }) => {
  const categories = ["categorie"];
  const assignValueProduct = (
    value: string | number | boolean,
    name: string
  ) => {
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };
  return (
    <Accordion title="Tags y Categorias">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        //TODO input text tag
        <div className="my-4">
          <label className="block mb-2">ID's Relacionados</label>
          <InputSH
            type="text"
            onBlur={(ev) => assignValueProduct(ev.target.value, "ids")}
          />
        </div>
        //TODO select tipo tag
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select
            items={categories}
            onChange={(ev) => assignValueProduct(ev, "stock_status")}
          />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoCategories;
