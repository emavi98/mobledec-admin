import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  Input,
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "components";
import { FormWrapper } from "pages/orders-page/wrappers";

const PaymentMethodComponent = ({ title }: { title: string }) => {
  return (
    <FormWrapper title={title}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Total a pagar: 1.200,00€</CardTitle>
          <CardDescription>Total pagado: 1.000,00€</CardDescription>
          <CardDescription>Saldo pendiente: 200,00€</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Metodo de Pago</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Efectivo</SelectItem>
                    <SelectItem value="sveltekit">Tarjeta</SelectItem>
                    <SelectItem value="astro">Bizum</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Precio</Label>
                  <Input id="name" placeholder="Price of delivery" />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="mt-2">
        <Card className="w-[350px] p-4 mb-2">
          <CardDescription>Metodo de pago: Efectivo</CardDescription>
          <CardDescription>Importe: 500,00€</CardDescription>
          <CardDescription>Fecha: 25/03/2024 hora: 07:45</CardDescription>
          <CardDescription>Lugar: tienda</CardDescription>
        </Card>
        <Card className="w-[350px] p-4">
          <CardDescription>Metodo de pago: Tarjeta</CardDescription>
          <CardDescription>Importe: 500,00€</CardDescription>
          <CardDescription>Fecha: 25/03/2024 hora: 07:45</CardDescription>
          <CardDescription>Lugar: tienda</CardDescription>
        </Card>
      </div>
    </FormWrapper>
  );
};

export { PaymentMethodComponent };
