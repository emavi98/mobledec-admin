// Types
import { ColumnDef } from '@tanstack/react-table';
// Components
import { Checkbox, ListActionsShadcnMbd } from 'components';
// Entitys
import { ProductEntity } from 'models/products-entity';
// Configurations
import { DropDownMenuConfiguration } from '../components/products-page-table/configurations/list-actions-configurations';

export const columns: ColumnDef<ProductEntity>[] = [
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
    accessorKey: 'sku',
    header: 'SKU',
  },
  {
    accessorKey: 'name',
    header: 'Nombre Producto',
  },
  {
    accessorKey: 'status',
    header: 'Estado',
  },
  {
    accessorKey: 'price',
    header: 'Precio',
  },
  {
    accessorKey: 'stockQuantity',
    header: 'Cantidad',
  },
  {
    accessorKey: 'stockStatus',
    header: 'Stock',
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
