import { Button } from '@/components/ui';

const FooterActionsCompoonent = ({ isFirstStep, previousStep, isLastStep }) => {
  return (
    <div className="w-full items-center flex justify-between">
      <div className="">
        <Button
          onClick={previousStep}
          type="button"
          variant="ghost"
          className={`${
            isFirstStep
              ? 'invisible'
              : 'visible p-0 text-neutral-200 hover:text-white'
          }`}
        >
          Go Back
        </Button>
      </div>
      <div className="flex items-center">
        <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
          <Button
            type="submit"
            className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
          >
            {isLastStep ? 'Confirm' : 'Next Step'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterActionsCompoonent;
