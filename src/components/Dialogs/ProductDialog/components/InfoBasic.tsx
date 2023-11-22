import { useState, useCallback } from "react";
import Dropzone, { useDropzone, FileRejection } from "react-dropzone";

import { Textarea, Accordion, Input, Select, InputSH } from "@/components";

const InfoBasic = () => {
  const items = ["Simple", "Variable"];
  return (
    <Accordion title="Información basica">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <h2 className="mb-8">Basico</h2>
        <Input
          label={"Nombre"}
          classNameDiv="my-4"
          classNameLabel="mb-2 block"
        />
        <Input
          label="Slug"
          disabled={true}
          classNameDiv="my-4"
          classNameLabel="mb-2 block"
        />
        <div className="my-4">
          <label className="mb-2 block">Tipo</label>
          <Select items={items} />
        </div>
      </div>
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <h2 className="mb-8">Descripción y precio</h2>
        <div className="my-4">
          <label className="block mb-2">Descripción del producto</label>
          <Textarea />
        </div>
        <Input
          label="Días de entrega"
          classNameDiv="my-4"
          classNameLabel="mb-2 block"
        />
        <Input label="SKU" classNameDiv="my-4" classNameLabel="mb-2 block" />
        <div className="flex gap-2 justify-between">
          <Input
            label="Minutos de montaje"
            classNameDiv="my-4"
            classNameLabel="mb-2 block"
            type="number"
          />
          <Input
            label="Precio"
            classNameDiv="my-4"
            classNameLabel="mb-2 block"
            type="number"
          />
        </div>
        <div className="flex gap-2 justify-between">
          <Input
            label="Precio regular"
            classNameDiv="my-4"
            classNameLabel="mb-2 block"
            type="number"
          />
          <Input
            label="Precio de venta"
            classNameDiv="my-4"
            classNameLabel="mb-2 block"
            type="number"
          />
        </div>
        <div className="flex gap-2">
          <div className="my-4">
            <label className="block mb-2">Fecha de venta desde:</label>
            <InputSH type="date" className="" />
          </div>
          <div className="my-4">
            <label className="block mb-2">Fecha de venta hasta:</label>
            <InputSH type="date" className="" />
          </div>
        </div>
      </div>
      <Images />
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
    <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
      <h2 className="mb-8">Imagenes</h2>
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
  );
};

export default InfoBasic;
