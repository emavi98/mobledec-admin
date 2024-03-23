import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from 'components';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { editOrder } from 'pages/orders-page/useCases/editOrder';

export const DropDownMenuConfiguration = () => (
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
      <DropdownMenuItem onClick={editOrder}>Editar</DropdownMenuItem>
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
