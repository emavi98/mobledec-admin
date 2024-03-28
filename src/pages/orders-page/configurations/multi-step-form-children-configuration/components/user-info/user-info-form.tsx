import {
  Label,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SearchBardShadcnMbd,
} from 'components';

import { FormWrapper } from 'pages/orders-page/wrappers';

const UserInfoForm = ({ title }) => {
  return (
    <FormWrapper title="Datos de cliente">
      <SearchBardShadcnMbd />
      <div className=" flex flex-col px-2 gap-3 mt-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="framework">Tipo de documento</Label>
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent autoFocus position="popper">
              <SelectItem value="next">DNI</SelectItem>
              <SelectItem value="sveltekit">NIE</SelectItem>
              <SelectItem value="astro">Pasaporte</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">DNI/NIE/PASAPORTE</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            /*             value={name}
            onChange={(e) => updateForm({ name: e.target.value })} */
            className="w-full"
            required
          />
          {/*     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nombre Completo</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            /*             value={name}
            onChange={(e) => updateForm({ name: e.target.value })} */
            className="w-full"
            required
          />
          {/*     {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            /*  value={email} */
            className="w-full"
            /*  onChange={(e) => updateForm({ email: e.target.value })} */
            required
          />
          {/*  {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Número de telefono</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            /*     value={phone} */
            className="w-full"
            /*           onChange={(e) => updateForm({ phone: e.target.value })} */
            required
          />
          {/*           {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Dirección</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            /*   value={name} */
            /*        onChange={(e) => updateForm({ name: e.target.value })} */
            className="w-full"
            required
          />
          {/*   {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Código Postal</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            /*  value={name}
            onChange={(e) => updateForm({ name: e.target.value })} */
            className="w-full"
            required
          />
          {/*  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} */}
        </div>
      </div>
    </FormWrapper>
  );
};

export { UserInfoForm };
