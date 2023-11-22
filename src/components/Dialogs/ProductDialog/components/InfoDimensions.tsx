import { InputSH, Accordion } from "@/components";

const InfoDimensions = () => {
  return (
    <Accordion title="Peso, Dimensiones y Reviews">
      <div className="w-[97.5%] m-auto border p-4 rounded-md mb-8">
        <div className="my-4">
          <label className="block mb-2">Peso</label>
          <InputSH type="text" />
        </div>
        <div className="my-4">
          <label className="block mb-2">Dimensiones</label>
          <InputSH type="text" />
        </div>
        <div className="my-4 flex gap-2 items-center">
          <InputSH
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

export default InfoDimensions;
