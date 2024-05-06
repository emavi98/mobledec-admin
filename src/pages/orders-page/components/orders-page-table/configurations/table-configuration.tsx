// Types
import { ColumnDef } from '@tanstack/react-table';
// Components
import { Checkbox, ListActionsShadcnMbd } from 'components';
// Entitys
import { OrderEntity } from 'models/orders-entity';
// Configurations
import { DropDownMenuConfiguration } from '../components/orders-page-table/configurations/list-actions-configurations';

export const columns: ColumnDef<OrderEntity>[] = [
  {
    id: 'select',
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
    accessorKey: 'billing.firstName',
    header: 'Nombre Completo',
  },
  {
    accessorKey: 'status',
    header: 'Estado de Pedido',
  },
  {
    accessorKey: 'paidStatus',
    header: 'Estado de Pago',
  },
  {
    accessorKey: 'deliveryStatus',
    header: 'Estado de entrega',
  },
  {
    accessorKey: 'createdVia',
    header: 'Fuente',
  },
  {
    accessorKey: 'total',
    header: 'Total',
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      /*TODO: row props */
      <ListActionsShadcnMbd
        dropDownMenuConfiguration={<DropDownMenuConfiguration {...{ row }} />}
      />
    ),
  },
];
