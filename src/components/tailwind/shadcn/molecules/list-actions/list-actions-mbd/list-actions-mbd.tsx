import { DropdownMenu } from 'components';
interface ListActionsProps {
  dropDownMenuConfiguration: JSX.Element;
}

export const ListActionsShadcnMbd: React.FC<ListActionsProps> = ({
  dropDownMenuConfiguration,
}) => <DropdownMenu>{dropDownMenuConfiguration}</DropdownMenu>;
