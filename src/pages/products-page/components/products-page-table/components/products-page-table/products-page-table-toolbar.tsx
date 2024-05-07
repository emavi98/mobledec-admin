import {
  Button,
  Input,
  FacetedFilterShadcnMbd,
  ListOptionsShadcnMbd,
} from "components";
import { CircleOff, HandIcon, PackageCheck, Settings } from "lucide-react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

interface ProductsPageTableToolBarProps<T extends object> {
  data?: T[];
  columns: ColumnDef<T>[];
}

export const ProductsPageTableToolBar = <T extends object>({
  data = [],
  columns,
}: ProductsPageTableToolBarProps<T>): JSX.Element => {
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
            placeholder="Buscar productos..."
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />

          <FacetedFilterShadcnMbd
            column={table.getColumn("status")}
            title="Categorias"
            options={[
              {
                label: "En proceso",
                value: "In Process",
                icon: Settings,
              },
              {
                label: "Finalizado",
                value: "medium",
                icon: PackageCheck,
              },
            ]}
          />
          <FacetedFilterShadcnMbd
            column={table.getColumn("status")}
            title="Horas de Montaje"
            options={[
              {
                label: "Partialmente",
                value: "In Process",
                icon: CircleOff,
              },
              {
                label: "Pagado",
                value: "medium",
                icon: HandIcon,
              },
            ]}
          />
          <FacetedFilterShadcnMbd
            column={table.getColumn("status")}
            title="Proveedor"
            options={[
              {
                label: "En proceso",
                value: "In Process",
                icon: Settings,
              },
              {
                label: "Finalizado",
                value: "medium",
                icon: PackageCheck,
              },
            ]}
          />
        </div>
        <div className="flex gap-2">
          <ListOptionsShadcnMbd table={table} />
          <Button size={"sm"}>Crear Producto</Button>
        </div>
      </div>
    </div>
  );
};
