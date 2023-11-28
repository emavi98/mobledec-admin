import { InputSH, Accordion, Select } from "@/components";
import { InfoProductProp } from "@/interfaces/general-dto";

const InfoTax: React.FC<InfoProductProp> = ({ setProductInfo }) => {
  const taxItems = ["21%", "10%", "4%", "0%"];
  const classTax = ["Superreducido", "Reducido", "Iva normal", "No"];
  const stockStatus = ["instock", "outofstock", "onbackorder"];

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
    <Accordion title="Impuestos y Stock">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Porcentaje de impuesto</label>
          <Select
            items={taxItems}
            onChange={(ev) => assignValueProduct(ev, "percent_tax")}
          />
        </div>
        <div className="my-4">
          <label className="block mb-2">Clase de impuesto</label>
          <Select
            items={classTax}
            onChange={(ev) => assignValueProduct(ev, "class_tax")}
          />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <InputSH
            type="checkbox"
            className="inline-block w-[20px]"
            id="stock"
            onChange={(ev) => assignValueProduct(ev.target.checked, "stock")}
          />
          <label htmlFor="stock" className="cursor-pointer">
            Manejo de Stock?
          </label>
        </div>
        <div className="my-4">
          <label className="block mb-2">Cantidad de Stock</label>
          <InputSH
            type="text"
            onBlur={(ev) =>
              assignValueProduct(ev.target.value, "stock_quantity")
            }
          />
        </div>
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select
            items={stockStatus}
            onChange={(ev) => assignValueProduct(ev, "stock_status")}
          />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoTax;
