import {
  DateRangePickerShadcnMbd,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Input,
  FacetedFilterShadcnMbd,
  ListOptionsShadcnMbd,
} from 'components';
import { CircleOff, HandIcon, PackageCheck, Settings } from 'lucide-react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table';

interface OrdersPageTableToolBarProps<T extends object> {
  data?: T[];
  columns: ColumnDef<T>[];
}

export const OrdersPageTableToolBar = <T extends object>({
  data = [],
  columns,
}: OrdersPageTableToolBarProps<T>): JSX.Element => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Tabs defaultValue="overview" className="">
          <TabsList>
            <TabsTrigger value="overview">Pedidos</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Facturas
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Facturas Rectificativas
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Albaranes
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Presupuestos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className=""></TabsContent>
        </Tabs>

        <div className="flex gap-2">
          <DateRangePickerShadcnMbd />
          <Button>Descargar</Button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-9 mb-1">
        <div className="flex gap-2">
          <Input
            placeholder="Filtrar pedidos..."
            value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('title')?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />

          <FacetedFilterShadcnMbd
            column={table.getColumn('status')}
            title="Estado pedido"
            options={[
              {
                label: 'En proceso',
                value: 'In Process',
                icon: Settings,
              },
              {
                label: 'Finalizado',
                value: 'medium',
                icon: PackageCheck,
              },
            ]}
          />
          <FacetedFilterShadcnMbd
            column={table.getColumn('status')}
            title="Estado de Pago"
            options={[
              {
                label: 'Partialmente',
                value: 'In Process',
                icon: CircleOff,
              },
              {
                label: 'Pagado',
                value: 'medium',
                icon: HandIcon,
              },
            ]}
          />
          <FacetedFilterShadcnMbd
            column={table.getColumn('status')}
            title="Estado de Entrega"
            options={[
              {
                label: 'En proceso',
                value: 'In Process',
                icon: Settings,
              },
              {
                label: 'Finalizado',
                value: 'medium',
                icon: PackageCheck,
              },
            ]}
          />
        </div>
        <div className="flex gap-2">
          <ListOptionsShadcnMbd table={table} />
          <Button size={'sm'}>Crear Pedido</Button>
        </div>
      </div>
    </div>
  );
};
