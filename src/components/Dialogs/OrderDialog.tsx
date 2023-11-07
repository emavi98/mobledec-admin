import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Select from "react-select";
import {
  Select as SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const options = [
  { value: "Molchon", label: "Colchon" },
  { value: "Mesa", label: "Mesa" },
  { value: "Silla", label: "Silla" },
];

const InfoClient = () => {
  return (
    <div className="mb-8 border border-slate-400 rounded-md p-4">
      <h2>Datos de cliente</h2>
      <div className="mt-8 flex flex-col gap-3">
        <div>
          <label htmlFor="name">Nombre</label>
          <Input
            id="name"
            className="outline-none focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellidos</label>
          <Input
            id="lastname"
            className="outline-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección</label>
          <Input
            id="direccion"
            className="outline-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="cp">CP</label>
            <Input id="cp" className="outline-0 focus-visible:ring-offset-0" />
          </div>
          <div className="w-full">
            <label htmlFor="phone">Telefono</label>
            <Input
              id="phone"
              className="outline-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        <div>
          <label htmlFor="DNI">DNI/CIF</label>
          <Input id="DNI" className="outline-0 focus-visible:ring-offset-0" />
        </div>
      </div>
    </div>
  );
};

const InfoOrder = () => {
  return (
    <div className="mb-8 border border-slate-400 rounded-md p-4">
      <h2>Datos de pedido</h2>
      <div className="mt-8">
        <Select
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="Busca..."
        />
      </div>
      <div id="results" className="mt-4">
        <div className="flex gap-4">
          <p className="text-sm">Colchon 1,5 -- 500€</p>
          <div className="flex items-start gap-2">
            <div className="flex items-start gap-2">
              <Input type="checkbox" id="order" className="w-[20px] h-[20px]" />
              <label htmlFor="order" className="text-sm">
                Hacer Pedido
              </label>
            </div>
            /
            <div className="flex items-start gap-2">
              <Input type="checkbox" id="stock" className="w-[20px] h-[20px]" />
              <label htmlFor="stock" className="text-sm">
                Rebajar Stock
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShippingLogic = () => {
  return (
    <div className="mb-8">
      <h2>Logistica</h2>
      <div className="flex gap-4">
        <SelectSH>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Opciones" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="transporte-montaje">
              Transporte y Montaje
            </SelectItem>
            <SelectItem value="transporte-recogida">
              Transporte y Recogida cliente
            </SelectItem>
            <SelectItem value="transporte">Transporte</SelectItem>
            <SelectItem value="recogida">Recogida en tienda</SelectItem>
            <SelectItem value="retirada">Retirada</SelectItem>
          </SelectContent>
        </SelectSH>
        <Input placeholder="Precio Manualmente" />
      </div>
      <div className="my-4">
        <Input placeholder="2 colchones" className="min-h-[75px]" />
      </div>
      <p className="text-sm">
        Total de la operación: <strong>1500€</strong>
      </p>
    </div>
  );
};

const PriceOptions = () => {
  return (
    <div className="mb-8">
      <div className="flex gap-4">
        <SelectSH>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Efectivo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="efectivo">Efectivo</SelectItem>
            <SelectItem value="bizum">Bizum</SelectItem>
            <SelectItem value="tarjeta">Tarjeta</SelectItem>
            <SelectItem value="financiacion">Financiación</SelectItem>
            <SelectItem value="transferencia">Transferencia</SelectItem>
          </SelectContent>
        </SelectSH>
        <Input placeholder="400€" />
      </div>
      <div className="flex mt-3 items-center gap-4">
        <p className="text-sm block">
          Pendiente por pagar <strong>1100€</strong>
        </p>
        <Input placeholder="100€ cada mes" className="max-w-[200px]" />
      </div>
      <div>
        <label htmlFor="note" className="text-sm mt-2">
          Nota
        </label>
        <Input id="note" />
      </div>
    </div>
  );
};

const CreateOrder = () => {
  return (
    <div>
      <div className="mb-8 border border-slate-400 rounded-md p-4">
        <div className="flex justify-between">
          <Button className="w-[45%]">Crear presupuesto</Button>
          <Button className="w-[45%]">Crear pedido</Button>
        </div>
        <div className="flex items-center my-8 mx-8 gap-4">
          <Input type="checkbox" className="w-[40px] cursor-pointer" />
          <label className="text-xl">
            Enviar automaticamente por email y por whatsapp
          </label>
        </div>
      </div>
      <div className="border border-slate-400 rounded-md p-4">
        <p>Se ha detectado x productos asociados a x proveedores.</p>
      </div>
    </div>
  );
};

const OrderDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[200px]">
        Crear pedido
      </DialogTrigger>
      <DialogContent className="max-w-xl overflow-y-scroll max-h-screen h-[90%]">
        <DialogHeader>
          <div>
            <InfoClient />
            <InfoOrder />
            <ShippingLogic />
            <PriceOptions />
            <CreateOrder />

            <div className="flex items-center justify-center mt-4">
              <Button className="min-w-[200px]">Ok</Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
