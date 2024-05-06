import { AnimatePresence } from 'framer-motion';
import { SideBarShadcnMbd } from 'components';
import { useState } from 'react';

interface MultiStepFormProps {
  multiStepFormConfiguration: JSX.Element[];
}
const MultiStepForm = ({ multiStepFormConfiguration }: MultiStepFormProps) => {
  const [activeChild, setActive] = useState(0);
  return (
    <div className="flex flex-row justify-center">
      <div className=" flex  h-[600px] w-[800px] m-1 rounded-[0.5rem] border shadow-md md:shadow-xl p-4">
        <SideBarShadcnMbd
          {...{ activeChild, setActive, multiStepFormConfiguration }}
        />
        <AnimatePresence mode="wait">
          {multiStepFormConfiguration?.[activeChild]}
        </AnimatePresence>
      </div>
    </div>
  );
};

export { MultiStepForm };
