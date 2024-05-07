import { TableShadcnMbd } from "components";

import { CustomersPageTableToolBar } from "./components/customers-page-table/customers-page-table-toolbar";
import { columns } from "./configurations/table-configuration";
import { useUsersQuery } from "services/users-service";
import { useState } from "react";

export const CustomersPageTable = () => {
  const [keyword] = useState("as");
  const { data, isLoading, error } = useUsersQuery(keyword);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return "An error has occurred: " + error.message;
  console.log("data", data);
  return (
    <div>
      <CustomersPageTableToolBar {...{ data, columns }} />
      <TableShadcnMbd {...{ data, columns }} />
    </div>
  );
};
