import { InputSH, Accordion, Select } from "@/components";

const InfoTax = () => {
  const taxItems = ["21%", "10%", "4%", "0%"];
  const classTax = ["Superreducido", "Reducido", "Iva normal", "No"];
  const stockStatus = ["instock", "outofstock", "onbackorder"];
  return (
    <Accordion title="Impuestos y Stock">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Porcentaje de impuesto</label>
          <Select items={taxItems} />
        </div>
        <div className="my-4">
          <label className="block mb-2">Clase de impuesto</label>
          <Select items={classTax} />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <InputSH
            type="checkbox"
            className="inline-block w-[20px]"
            id="stock"
          />
          <label htmlFor="stock" className="cursor-pointer">
            Manejo de Stock?
          </label>
        </div>
        <div className="my-4">
          <label className="block mb-2">Cantidad de Stock</label>
          <InputSH type="text" />
        </div>
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select items={stockStatus} />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoTax;
