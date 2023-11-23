import { InputSH, Accordion, Select } from "@/components";

import { InfoProductProp } from "@/interfaces/general-dto";

const InfoStatus: React.FC<InfoProductProp> = ({ setProductInfo }) => {
  const items = ["Draft", "Pending", "Private", "Publish"];
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
    <Accordion title="Estatus y Featured">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Estatus</label>
          <Select
            items={items}
            onChange={(ev) => assignValueProduct(ev, "status")}
          />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <InputSH
            type="checkbox"
            className="inline-block w-[20px]"
            id="featured"
            onChange={(ev) => assignValueProduct(ev.target.checked, "featured")}
          />
          <label htmlFor="featured" className="cursor-pointer">
            Featured?
          </label>
        </div>
      </div>
    </Accordion>
  );
};

export default InfoStatus;
