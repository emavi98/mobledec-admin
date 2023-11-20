import Accordion from "@/components/Atomic/Accordion";
import { Input } from "@/components/ui/input";

const InfoCombinations = () => {
  return (
    <Accordion title="Atributos y Variaciones">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Atributos</label>
          <Input type="text" />
        </div>
        // TODO PENDING VARIATIONS
        <div className="my-4">
          <label className="block mb-2">Variaciones</label>
          <Input type="text" />
        </div>
        // TODO PENDING POSITION
        <div className="my-4">
          <label className="block mb-2">Posición</label>
          <Input type="text" />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoCombinations;
