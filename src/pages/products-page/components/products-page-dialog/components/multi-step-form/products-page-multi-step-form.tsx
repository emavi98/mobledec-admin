import { MultiStepForm } from 'components';
import { multiStepFormConfiguration } from './configurations/multi-step-form-configuration';

export const ProductsPageMultiStepForm = () => {
  return <MultiStepForm {...{ multiStepFormConfiguration }} />;
};
