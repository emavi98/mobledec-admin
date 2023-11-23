import { InputSH, Accordion } from "@/components";
import { InfoProductProp } from "@/interfaces/general-dto";

const InfoCombinations: React.FC<InfoProductProp> = ({ setProductInfo }) => {
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
    <Accordion title="Atributos y Variaciones">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Atributos</label>
          <InputSH
            type="text"
            onBlur={(ev) => assignValueProduct(ev.target.value, "attributes")}
          />
        </div>
        // TODO PENDING VARIATIONS
        <div className="my-4">
          <label className="block mb-2">Variaciones</label>
          <InputSH
            type="text"
            onBlur={(ev) => assignValueProduct(ev.target.value, "variations")}
          />
        </div>
        // TODO PENDING POSITION
        <div className="my-4">
          <label className="block mb-2">Posición</label>
          <InputSH
            type="text"
            onBlur={(ev) => assignValueProduct(ev.target.value, "position")}
          />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoCombinations;
