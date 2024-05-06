import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from 'components';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import useDialogStore from 'store/dialog-store';
import useOrdersPageStore from 'store/orders-store';
import { Row } from '@tanstack/react-table';
import { OrderEntity } from 'models/orders-entity';

interface DropDownMenuConfigurationProps<TData> {
  row: Row<TData>;
}
export function DropDownMenuConfiguration<TData extends OrderEntity>({
  row,
}: DropDownMenuConfigurationProps<TData>): JSX.Element {
  const { showDialog } = useDialogStore();
  const { setOrderFormValues } = useOrdersPageStore();
  const handleEditOption = () => {
    showDialog(true);
    const ordersFormData = row.original;
    setOrderFormValues({ ordersFormData });
  };

  return (
    <>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEditOption}>Editar</DropdownMenuItem>
        <DropdownMenuItem disabled>Generar Albaran</DropdownMenuItem>
        <DropdownMenuItem disabled>Generar PackSlip</DropdownMenuItem>
        <DropdownMenuItem disabled>Generar Factura</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </>
  );
}
