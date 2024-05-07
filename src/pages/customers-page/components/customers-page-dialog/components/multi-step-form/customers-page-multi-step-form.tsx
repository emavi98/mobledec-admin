import { MultiStepForm } from "components";
import { multiStepFormConfiguration } from "./configurations/multi-step-form-configuration";

export const CustomersPageMultiStepForm = () => {
  return <MultiStepForm {...{ multiStepFormConfiguration }} />;
};
