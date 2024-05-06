import {
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components';
import useOrdersPageStore from 'store/orders-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ChangeEvent } from 'react';

export const InvoicingInfo = () => {
  const { orderFormDialog, setOrderFormValues } = useOrdersPageStore();

  const InvoicingFormSchema = z.object({
    documentIdentificationType: z.string().optional(),
    documentNumber: z.string().optional(),
    firstName: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(30, {
        message: 'Username must not be longer than 30 characters.',
      }),
    lastName: z.string().optional(),
    email: z
      .string({
        required_error: 'Please select an email to display.',
      })
      .email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    addressFirstLine: z.string().optional(),
    addressSecondLine: z.string().optional(),
    city: z.string().optional(),
    postcode: z.string().optional(),
    state: z.string().optional(),
    /* bio: z.string().max(160).min(4), */
  });

  type InvoicingFormValues = z.infer<typeof InvoicingFormSchema>;

  const defaultValues: Partial<InvoicingFormValues> = {
    documentIdentificationType:
      orderFormDialog?.billing.documentIdentificationType,
    documentNumber: orderFormDialog?.billing.documentNumber,
    firstName: orderFormDialog?.billing.firstName,
    lastName: orderFormDialog?.billing.lastName,
    email: orderFormDialog?.billing.email,
    phone: orderFormDialog?.billing.phone,
    company: orderFormDialog?.billing.company,
    addressFirstLine: orderFormDialog?.billing.addressFirstLine,
    addressSecondLine: orderFormDialog?.billing.addressSecondLine,
    city: orderFormDialog?.billing.city,
    postcode: orderFormDialog?.billing.postcode,
    state: orderFormDialog?.billing.state,
  };

  const form = useForm<InvoicingFormValues>({
    resolver: zodResolver(InvoicingFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const formFormatedValues = {
      ...orderFormDialog,
      billing: {
        ...orderFormDialog.billing,
        [`${name}`]: value,
      },
    };
    setOrderFormValues({ ordersFormData: formFormatedValues });
  };

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <FormField
          control={form.control}
          name="documentIdentificationType"
          render={() => (
            <FormItem>
              <FormLabel>Tipo de documento</FormLabel>
              <Select
                {...form.register('documentIdentificationType')}
                /*  onValueChange={handleFieldChange} */
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un tipo de documento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DNI">DNI</SelectItem>
                  <SelectItem value="NIE">NIE</SelectItem>
                  <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="documentNumber"
          render={() => (
            <FormItem>
              <FormLabel>Document Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Document number"
                  {...form.register('documentNumber')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={() => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...form.register('firstName')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={() => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...form.register('lastName')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. stephenking@lorem.com"
                  {...form.register('email')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={() => (
            <FormItem>
              <FormLabel>Número de telefono</FormLabel>
              <FormControl>
                <Input
                  placeholder="642 548 454"
                  {...form.register('phone')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={() => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input
                  placeholder="company"
                  {...form.register('company')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressFirstLine"
          render={() => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input
                  placeholder="Calle Secreta 2.."
                  {...form.register('addressFirstLine')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="addressSecondLine"
          render={() => (
            <FormItem>
              <FormLabel>Dirección notas</FormLabel>
              <FormControl>
                <Input
                  placeholder="Al lado del negocio..."
                  {...form.register('addressSecondLine')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={() => (
            <FormItem>
              <FormLabel>Ciudad / Municipio</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ciudad..."
                  {...form.register('city')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postcode"
          render={() => (
            <FormItem>
              <FormLabel>Código Postal</FormLabel>
              <FormControl>
                <Input
                  placeholder="Código postal ...."
                  {...form.register('postcode')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={() => (
            <FormItem>
              <FormLabel>Provincia</FormLabel>
              <FormControl>
                <Input
                  placeholder="Provincia.."
                  {...form.register('state')}
                  onChange={handleFieldChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <div className="flex items-center space-x-2 pt-2 pb-4">
        <Checkbox
          id="terms"
          /*  checked={isShowedInfo}
          onCheckedChange={() => setIsShowedInfo(!isShowedInfo)} */
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          La información de envio es la misma?
        </label>
      </div>
    </div>
  );
};
