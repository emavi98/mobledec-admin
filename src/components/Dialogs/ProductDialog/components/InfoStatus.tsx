import Accordion from "@/components/Atomic/Accordion";
import Select from "@/components/Atomic/Select";
import { Input } from "@/components/ui/input";

const InfoStatus = () => {
  const items = ["Draft", "Pending", "Private", "Publish"];
  return (
    <Accordion title="Estatus y Featured">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Estatus</label>
          <Select items={items} />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <Input
            type="checkbox"
            className="inline-block w-[20px]"
            id="featured"
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
