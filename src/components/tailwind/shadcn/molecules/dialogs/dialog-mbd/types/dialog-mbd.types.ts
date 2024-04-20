export type DialogShadMbdTypes = {
  children: JSX.Element;
  title?: string;
  footer?: JSX.Element;
  isOpen: boolean;
  handleClose?: ((open: boolean) => void) | undefined;
};
