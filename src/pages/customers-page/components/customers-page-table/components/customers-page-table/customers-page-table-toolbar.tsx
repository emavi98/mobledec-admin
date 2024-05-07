import { Button, Input, ListOptionsShadcnMbd } from "components";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

interface CustomersPageTableToolBarProps<T extends object> {
  data?: T[];
  columns: ColumnDef<T>[];
}

export const CustomersPageTableToolBar = <T extends object>({
  data = [],
  columns,
}: CustomersPageTableToolBarProps<T>): JSX.Element => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-4">
      <div className="flex items-center justify-between pt-9 mb-1">
        <div className="flex gap-2">
          <Input
            placeholder="Buscar cliente..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
        <div className="flex gap-2">
          <ListOptionsShadcnMbd table={table} />
          <Button size={"sm"}>Crear Cliente</Button>
        </div>
      </div>
    </div>
  );
};
