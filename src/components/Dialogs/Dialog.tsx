import {
  Dialog as DialogSH,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showDialog } from "@/store/features/uiSlice";

const Dialog: React.FC<{ textBtn?: string; children: any }> = (props) => {
  const [open, setOpen] = useState(false);
  const dialog = useAppSelector((state) => state.uiSliceReducer.dialog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showDialog(false));
  }, []);

  useEffect(() => {
    if (dialog) {
      setOpen(true);
    } else {
      setOpen(false);
      dispatch(showDialog(false));
    }
  }, [dialog, open]);

  const closePopup = () => {
    dispatch(showDialog(!dialog));
    return setOpen;
  };

  return (
    <DialogSH open={open} onOpenChange={closePopup}>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[200px]">
        {props.textBtn}
      </DialogTrigger>
      <DialogContent className="max-w-xl overflow-y-scroll max-h-screen h-[90%]">
        <DialogHeader>
          <div>
            {props.children}

            <div className="flex items-center justify-center mt-4">
              <Button className="min-w-[200px]" onClick={() => setOpen(false)}>
                Ok
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </DialogSH>
  );
};

export default Dialog;
