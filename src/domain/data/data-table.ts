import { DateTime } from "luxon";
import { ColumnDef } from "@tanstack/react-table";

import { Order } from "@/interfaces/table-dto";

export const columnsOrder = <ColumnDef<Order>[]>[
  {
    header: "N° Pedido",
    accessorKey: "order",
  },
  {
    header: "Nombre",
    accessorKey: "first_name",
  },
  {
    header: "Apellido",
    accessorKey: "last_name",
  },
  {
    header: "Telefono",
    accessorKey: "phone",
  },
  {
    header: "Fecha",
    accessorKey: "date",
    cell: (info) =>
      DateTime.fromISO(info.getValue() as string).toLocaleString(
        DateTime.DATE_MED
      ),
  },
  {
    header: "Estado",
    accessorKey: "state",
  },
];

export const columnsProduct = [
  {
    header: "sku",
    accessorKey: "sku",
  },
  {
    header: "Producto",
    accessorKey: "product_name",
  },
  {
    header: "Precio",
    accessorKey: "cost",
  },
  {
    header: "Días de entrega",
    accessorKey: "delivery_days",
  },
  {
    header: "Minutos de montaje",
    accessorKey: "minutes_mount",
  },
];

export const columnsClient = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Nombre",
    accessorKey: "first_name",
  },
  {
    header: "Apellido",
    accessorKey: "last_name",
  },
  {
    header: "Phone",
    accessorKey: "phone",
  },
  {
    header: "DNI",
    accessorKey: "dni",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
];
