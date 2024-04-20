import { MultiStepForm } from 'components';
import { multiStepFormConfiguration } from './configurations/multi-step-form-configuration';

export const OrdersPageMultiStepForm = () => {
  return <MultiStepForm {...{ multiStepFormConfiguration }} />;
};
