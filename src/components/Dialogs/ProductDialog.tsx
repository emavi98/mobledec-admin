import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "../Atomic/Select";
import { Button } from "../ui/button";
import Dropzone, { useDropzone, FileRejection } from "react-dropzone";

import { useState, useCallback, useEffect } from "react";
import Accordion from "../Atomic/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showDialog } from "@/store/features/uiSlice";

const Basic = () => {
  const items = ["Simple", "Variable"];
  return (
    <Accordion title="Información basica">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="mb-2 block">Name</label>
          <Input />
        </div>
        <div className="my-4">
          <label className="mb-2 block">Slug</label>
          <Input disabled={true} />
        </div>
        <div className="my-4">
          <label className="mb-2 block">Tipo</label>
          <Select items={items} />
        </div>
      </div>
    </Accordion>
  );
};

const Status = () => {
  const items = ["Draft", "Pending", "Private", "Publish"];
  return (
    <Accordion title="Estatus y Featured">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="block mb-2">Estatus</label>
          <Select items={items} />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <Input
            type="checkbox"
            className="inline-block w-[20px]"
            id="featured"
          />
          <label htmlFor="featured" className="cursor-pointer">
            Featured?
          </label>
        </div>
      </div>
    </Accordion>
  );
};

const Description = () => {
  return (
    <Accordion title="Descripción y Precio">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="block mb-2">Descripción del producto</label>
          <Textarea />
        </div>
        <div className="my-4">
          <label className="block mb-2">Días de entrega</label>
          <Input type="text" />
        </div>
        <div className="my-4">
          <label className="block mb-2">SKU</label>
          <Input type="text" />
        </div>
        <div className="flex gap-2 justify-between">
          <div className="my-4 w-full">
            <label className="block mb-2">Minutos de montaje</label>
            <Input type="number" className="" />
          </div>
          <div className="my-4 w-full">
            <label className="block mb-2">Precio</label>
            <Input type="number" className="" />
          </div>
        </div>
        <div className="flex gap-2 justify-between">
          <div className="my-4 w-full">
            <label className="block mb-2">Precio regular</label>
            <Input type="number" className="" />
          </div>
          <div className="my-4 w-full">
            <label className="block mb-2">Precio de venta</label>
            <Input type="number" className="" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="my-4">
            <label className="block mb-2">Fecha de venta desde:</label>
            <Input type="date" className="" />
          </div>
          <div className="my-4">
            <label className="block mb-2">Fecha de venta hasta:</label>
            <Input type="date" className="" />
          </div>
        </div>
      </div>
    </Accordion>
  );
};

const Tax = () => {
  const taxItems = ["21%", "10%", "4%", "0%"];
  const classTax = ["Superreducido", "Reducido", "Iva normal", "No"];
  const stockStatus = ["instock", "outofstock", "onbackorder"];
  return (
    <Accordion title="Impuestos y Stock">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="block mb-2">Porcentaje de impuesto</label>
          <Select items={taxItems} />
        </div>
        <div className="my-4">
          <label className="block mb-2">Clase de impuesto</label>
          <Select items={classTax} />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <Input type="checkbox" className="inline-block w-[20px]" id="stock" />
          <label htmlFor="stock" className="cursor-pointer">
            Manejo de Stock?
          </label>
        </div>
        <div className="my-4">
          <label className="block mb-2">Cantidad de Stock</label>
          <Input type="text" />
        </div>
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select items={stockStatus} />
        </div>
      </div>
    </Accordion>
  );
};

const Dimensions = () => {
  return (
    <Accordion title="Peso, Dimensiones y Reviews">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="block mb-2">Peso</label>
          <Input type="text" />
        </div>
        <div className="my-4">
          <label className="block mb-2">Dimensiones</label>
          <Input type="text" />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <Input
            type="checkbox"
            className="inline-block w-[20px]"
            id="reviews"
          />
          <label htmlFor="reviews" className="cursor-pointer">
            Permitir Reviews?
          </label>
        </div>
      </div>
    </Accordion>
  );
};

const Categories = () => {
  const categories = ["categorie"];
  return (
    <Accordion title="Tags y Categorias">
      <div className="w-[97.5%] m-auto">
        //TODO input text tag
        <div className="my-4">
          <label className="block mb-2">ID's Relacionados</label>
          <Input type="text" />
        </div>
        //TODO select tipo tag
        <div className="my-4">
          <label className="block mb-2">Estatus del Stock</label>
          <Select items={categories} />
        </div>
      </div>
    </Accordion>
  );
};

const Images = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState<number | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[], _fileRejections: FileRejection[]) => {
      setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
      if (mainImageIndex !== null) {
        setMainImageIndex(
          (prevMainImageIndex) => prevMainImageIndex! + acceptedFiles.length
        );
      }
    },
    [mainImageIndex]
  );

  const dropzoneProps = useDropzone({ onDrop });
  const { getRootProps, getInputProps } = dropzoneProps;

  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
  };

  return (
    <Accordion title="Imagenes">
      <div className="w-[97.5%] m-auto">
        <Dropzone {...dropzoneProps}>
          {() => (
            <section>
              <div
                {...getRootProps()}
                className="min-h-[100px] border border-slate-400 p-2 rounded-sm cursor-pointer"
              >
                <input {...getInputProps()} />
                <p>
                  Arrastra/Suelta algunas imagenes aquí, o clickea para
                  seleccionar imagenes.
                </p>
              </div>
            </section>
          )}
        </Dropzone>
        <div id="upload" className="mt-4 flex flex-wrap gap-2">
          {uploadedImages.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`uploaded-${index}`}
              className={`w-[40px] h-[40px] cursor-pointer border ${
                mainImageIndex === index
                  ? "border-blue-500 w-[60px] h-[60px]"
                  : "border-transparent"
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div className="mt-2">
          {mainImageIndex !== null && (
            <p>Imagen principal: {mainImageIndex + 1}</p>
          )}
        </div>
      </div>
    </Accordion>
  );
};

const Combinations = () => {
  return (
    <Accordion title="Atributos y Variaciones">
      <div className="w-[97.5%] m-auto">
        <div className="my-4">
          <label className="block mb-2">Atributos</label>
          <Input type="text" />
        </div>
        // TODO PENDING VARIATIONS
        <div className="my-4">
          <label className="block mb-2">Variaciones</label>
          <Input type="text" />
        </div>
        // TODO PENDING POSITION
        <div className="my-4">
          <label className="block mb-2">Posición</label>
          <Input type="text" />
        </div>
      </div>
    </Accordion>
  );
};

const ProductDialog = () => {
  const [open, setOpen] = useState(false);
  const dialog = useAppSelector((state) => state.uiSliceReducer.dialog);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (dialog) {
      setOpen(true);
    } else {
      setOpen(false);
      dispatch(showDialog());
    }
  }, [dialog]);
  return (
    <Dialog open={open && dialog} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[200px]">
        Crear Producto
      </DialogTrigger>
      <DialogContent className="max-w-xl overflow-y-scroll max-h-screen h-[90%]">
        <DialogHeader>
          <div>
            <Basic />
            <Status />
            <Description />
            <Tax />
            <Dimensions />
            <Categories />
            <Images />
            <Combinations />

            <div className="flex items-center justify-center mt-4">
              <Button className="min-w-[200px]" onClick={() => setOpen(false)}>
                Ok
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
