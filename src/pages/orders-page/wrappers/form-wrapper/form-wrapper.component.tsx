import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ScrollArea } from 'components';

type FormWrapperProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const formVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      ease: 'easeOut',
    },
  },
};

const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <motion.div
      className="basis-4/6 flex flex-col ps-2 "
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ScrollArea className="rounded-md border p-4">
        <div className="flex flex-col gap-1 ">
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            {title}
          </h2>
          <p className="text-sm text-neutral-300 md:text-base">{description}</p>
        </div>
        {children}
      </ScrollArea>
    </motion.div>
  );
};

export { FormWrapper };
