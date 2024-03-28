import { AnimatePresence } from 'framer-motion';
import { SideBarShadcnMbd } from 'components';
//import FooterActionsCompoonent from './components/footer-actions/footer-actions.component';
import { useState } from 'react';

const MultiStepForm = ({ children }) => {
  const [activeChild, setActive] = useState(0);

  return (
    <div className="flex flex-row justify-center">
      <div className=" flex  h-[600px] w-[800px] m-1 rounded-[0.5rem] border shadow-md md:shadow-xl p-4">
        <SideBarShadcnMbd activeChild={activeChild} setActive={setActive}>
          {children}
        </SideBarShadcnMbd>

        <AnimatePresence mode="wait">{children[activeChild]}</AnimatePresence>

        {/* <FooterActionsCompoonent
          {...{ isFirstStep, previousStep, isLastStep }}
        /> */}
      </div>
    </div>
  );
};

export { MultiStepForm };
