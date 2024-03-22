import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components';
import { DataTableRowActions } from '../data-table-row-actions/table-actions.component';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
    accessorKey: 'status',
    header: 'Order Status',
  },
  {
    accessorKey: 'status',
    header: 'Delivery Status',
  },
  {
    accessorKey: 'status',
    header: 'Paid Status',
  },
  {
    accessorKey: 'createdVia',
    header: 'Created Via',
  },
  {
    accessorKey: 'billing.first_name',
    header: 'Customer Name',
  },
  {
    accessorKey: 'total',
    header: 'Total Amount',
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
