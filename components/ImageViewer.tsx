import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogClose } from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import Image, { StaticImageData } from "next/image";

interface ImageViewerProps {
  recognition: StaticImageData;
}

export default function ImageViewer({ recognition }: ImageViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={recognition}
          className="mt-4 sm:mx-0 mx-auto cursor-pointer"
          alt="recognition"
          width={300}
          height={300}
        />
      </DialogTrigger>
      <DialogContent
        className="border-0 shadow-none flex items-center justify-center min-w-fit max-w-none bg-transparent"
        showCloseButton={false}
      >
        <DialogClose className="text-white absolute top-0 right-0 cursor-pointer">
          <IoMdClose size={25} />
        </DialogClose>
        <VisuallyHidden asChild>
          <DialogTitle>Full-size image</DialogTitle>
        </VisuallyHidden>
        <Image
          src={recognition}
          alt="recognition"
          width={800}
          height={800}
          className="max-h-[90vh] max-w-[90vw] rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
