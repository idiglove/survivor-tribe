import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ModalButtonProps {
  text: string;
  dialogTitle: string;
  dialogDescription: string;
  dialogContent: React.ReactNode;
}

const ModalButton = ({
  text,
  dialogTitle,
  dialogDescription,
  dialogContent,
}: ModalButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{text}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{dialogContent}</div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default ModalButton;
