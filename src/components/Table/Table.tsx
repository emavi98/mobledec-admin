import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import "./Table.css";
import React, { useState, useMemo } from "react";
import { useAppDispatch } from "@/store/hooks";
import { showDialog } from "@/store/features/uiSlice";
import { Order } from "@/interfaces/table-dto";

const Table = ({
  filtering,
  setFiltering,
  data,
  columns,
}: {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  data: Order[];
  columns: ColumnDef<Order>[];
}) => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: pageSize ?? -1,
    onPaginationChange: setPagination,
    state: {
      globalFilter: filtering,
      pagination,
    },
    onGlobalFilterChange: setFiltering,
  });

  const dispatch = useAppDispatch();

  const openDialogInfo = () => {
    dispatch(showDialog());
  };

  return (
    <div className="">
      <table className="w3-table-all mb-4">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="cursor-pointer"
              onClick={openDialogInfo}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center gap-4">
        <button
          className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
          onClick={() => table.setPageIndex(0)}
        >
          First Page
        </button>
        <button
          className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>
        <div className="flex items-center">
          <span>
            Pagina {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </span>
        </div>
        <button
          className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>
        <button
          className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default Table;
