import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import "./Table.css";
import React, { useState, useMemo } from "react";

interface TableProps {
  filtering?: string;
  setFiltering?: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  columns: any;
  tdFn?: () => void;
  className?: {
    table: string;
    thead: string;
    th: string;
    tr: string;
    td: string;
  };
  children?: any;
  thRow?: string[];
}

const Table: React.FC<TableProps> = ({
  filtering,
  setFiltering,
  data,
  columns,
  tdFn,
  className,
  children,
  thRow,
}) => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: data.length / 10,
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

  const tdHandler = () => {
    tdFn && tdFn();
  };

  return (
    <div>
      <table className={`${className ? className.table : "w3-table-all mb-4"}`}>
        <thead className={`${className ? className.thead : ""}`}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-center">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${className ? className.th : ""}`}
                  id={header.id}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
              {thRow && thRow.map((item) => <th key={item}>{item}</th>)}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0
            ? table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`text-center ${
                    className ? className.tr : "cursor-pointer"
                  }`}
                  onClick={tdHandler}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`${className ? className.td : ""}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : Object.keys(table.getRowModel().rowsById).map((key) => {
                const row = table.getRowModel().rowsById[key];
                return (
                  <tr
                    key={row.id}
                    className={`text-center ${
                      className ? className.tr : "cursor-pointer"
                    }`}
                    onClick={tdHandler}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`${className ? className.td : ""}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    {children}
                  </tr>
                );
              })}
        </tbody>
      </table>
      {pageSize >= 2 && (
        <div className="flex justify-center gap-4">
          <button
            className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
            onClick={() => table.setPageIndex(0)}
          >
            Primera página
          </button>
          <button
            className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Página anterior
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
            Página siguiente
          </button>
          <button
            className="border border-slate-600 p-2 rounded-sm hover:bg-slate-700 hover:text-white transition-all disabled:opacity-50"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            Última página
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
