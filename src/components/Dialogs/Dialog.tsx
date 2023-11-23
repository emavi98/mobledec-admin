import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  DialogSH,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Button,
} from "@/components";
import { removeDialog, showDialog } from "@/store/Slices/dialogSlice";

type DialogProps = {
  textBtn?: string;
  dialogName: string;
  children: JSX.Element;
};

const Dialog: React.FC<DialogProps> = ({ textBtn, dialogName, children }) => {
  const dialog = useAppSelector((state) => state.dialogSliceReducer.dialog);
  const dispatch = useAppDispatch();

  const closePopup = () => {
    dispatch(removeDialog(dialogName));
  };

  const showPopup = () => {
    dispatch(showDialog(dialogName));
  };

  const openPopup = () => {
    return dialog.some((dialog) => dialog === dialogName);
  };

  return (
    <DialogSH open={openPopup()} onOpenChange={closePopup}>
      <DialogTrigger
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[200px]"
        onClick={showPopup}
      >
        {textBtn}
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-[1200px] overflow-y-scroll max-h-screen h-[90%]">
        <DialogHeader>
          <div>
            {children}

            <div className="flex items-center justify-center mt-4">
              <Button
                className="min-w-[200px]"
                onClick={() => dispatch(removeDialog("Order"))}
              >
                Terminar
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </DialogSH>
  );
};

export default Dialog;
