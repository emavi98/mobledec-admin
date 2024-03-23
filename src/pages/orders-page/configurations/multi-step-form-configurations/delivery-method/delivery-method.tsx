import FormWrapper from 'pages/orders-page/wrappers/form-wrapper/form-wrapper.component';
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
} from 'shadcn-ui/atoms';

const DeliveryMethodComponent = ({ title }) => {
  return (
    <FormWrapper title={title}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Total a pagar: 1.200,00€</CardTitle>
          <CardDescription>Total productos: 1.000,00€</CardDescription>
          <CardDescription>Total Envio: 200,00€</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Metodo de entrega</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="rulf">No se ha decidido</SelectItem>
                    <SelectItem value="next">Recogida en tienda</SelectItem>
                    <SelectItem value="sveltekit">Envio</SelectItem>
                    <SelectItem value="astro">Envio y Montaje</SelectItem>
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
    </FormWrapper>
  );
};

export default DeliveryMethodComponent;
