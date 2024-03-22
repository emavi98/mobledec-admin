import { AnimatePresence } from 'framer-motion';
import { SideBar } from '@/components/multi-step-form/components';
import FooterActionsCompoonent from './components/footer-actions/footer-actions.component';
import { useState } from 'react';

const MultiStepFormComponent = ({ children }) => {
  const [activeChild, setActive] = useState(0);

  return (
    <div className="flex flex-row justify-center">
      <div className=" flex  h-[600px] w-[800px] m-1 rounded-[0.5rem] border shadow-md md:shadow-xl p-4">
        <SideBar activeChild={activeChild} setActive={setActive}>
          {children}
        </SideBar>

        <AnimatePresence mode="wait">{children[activeChild]}</AnimatePresence>

        {/* <FooterActionsCompoonent
          {...{ isFirstStep, previousStep, isLastStep }}
        /> */}
      </div>
    </div>
  );
};

export { MultiStepFormComponent };
