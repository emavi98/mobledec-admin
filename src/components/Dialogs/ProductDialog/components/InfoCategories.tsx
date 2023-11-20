import Accordion from "@/components/Atomic/Accordion";
import Select from "@/components/Atomic/Select";
import { Input } from "@/components/ui/input";

const InfoCategories = () => {
  const categories = ["categorie"];
  return (
    <Accordion title="Tags y Categorias">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        //TODO input text tag
        <div className="my-4">
          <label className="block mb-2">ID's Relacionados</label>
          <Input type="text" />
        </div>
        //TODO select tipo tag
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select items={categories} />
        </div>
      </div>
    </Accordion>
  );
};

export default InfoCategories;
