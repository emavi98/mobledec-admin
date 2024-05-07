import { CustomersPageDialog } from "./components/customers-page-dialog/customers-page-dialog";
import { CustomersPageTable } from "./components/customers-page-table/customers-page-table";

export const CustomersPage = () => {
  return (
    <>
      <CustomersPageTable />
      <CustomersPageDialog />
    </>
  );
};

export default CustomersPage;
