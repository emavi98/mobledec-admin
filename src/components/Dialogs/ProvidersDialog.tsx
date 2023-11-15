import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Dialog from "./Dialog";

const ProvidersDialog = () => {
  return (
    <Dialog textBtn="crear proveedor">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="mb-2 block">Nombre</label>
          <Input />
        </div>
        <div className="my-4">
          <label className="mb-2 block">Email</label>
          <Input />
        </div>
        <div className="my-4">
          <label className="mb-2 block">Telefono</label>
          <Input />
        </div>
        <div className="my-4">
          <label className="mb-2 block">Condiciones</label>
          <Textarea />
        </div>
      </div>
    </Dialog>
  );
};

export default ProvidersDialog;
