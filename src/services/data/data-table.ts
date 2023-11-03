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
