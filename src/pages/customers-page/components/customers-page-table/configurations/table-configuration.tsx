// Types
import { ColumnDef } from "@tanstack/react-table";
// Components
import { Checkbox, ListActionsShadcnMbd } from "components";
// Entitys

// Configurations
import { DropDownMenuConfiguration } from "../components/customers-page-table/configurations/list-actions-configurations";
import { UserEntity } from "models/users-entity";

export const columns: ColumnDef<UserEntity>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        /* onCheckedChange={(value) => table.getIsAllRowsSelected()} */
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nombre cliente",
  },
  {
    accessorKey: "billing.city",
    header: "DNI/NIE/PASS",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "isActive",
    header: "Activado",
  },
  {
    accessorKey: "billing.phone",
    header: "Telefono",
  },
  {
    accessorKey: "billing.adress",
    header: "Dirección",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      /*TODO: row props */
      <ListActionsShadcnMbd
        dropDownMenuConfiguration={<DropDownMenuConfiguration {...{ row }} />}
      />
    ),
  },
];
