import React, { useState, useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import "./Table.css";
import {
  TableProps,
  TableActionsProps,
  TableRow,
  TableTypePagination,
} from "@/interfaces/table-dto";
import { lengthType } from "@/interfaces/general-dto";

const Table: React.FC<TableProps> = ({
  filtering,
  setFiltering,
  data,
  columns,
  className,
  children,
  thRow,
  editRowFn,
  removeRowFn,
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

  const editHandler = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const id = (ev.target as HTMLElement).dataset.id;
    id && editRowFn(+id);
  };

  const removeHandler = (ev: React.MouseEvent<HTMLParagraphElement>) => {
    const id = (ev.target as HTMLElement).dataset.id;
    id && removeRowFn(+id);
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
              <th key={`Acciones ${headerGroup.id}`}>Acciones</th>
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
                  <TableActions
                    row={row as TableRow}
                    editHandler={editHandler}
                    removeHandler={removeHandler}
                  />
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
                    {React.Children.map(children, (child) => {
                      return React.cloneElement(child, {
                        product: row
                          .getVisibleCells()
                          .map((cell) => cell.getContext().row.original),
                      });
                    })}
                    <TableActions
                      row={row as TableRow}
                      editHandler={editHandler}
                      removeHandler={removeHandler}
                    />
                  </tr>
                );
              })}
        </tbody>
      </table>
      {pageSize >= 2 && (
        <TablePagination table={table as TableTypePagination} />
      )}
    </div>
  );
};

const TableActions: React.FC<TableActionsProps> = ({
  row,
  editHandler,
  removeHandler,
}) => {
  return (
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <p
          className="text-blue-600 cursor-pointer"
          data-id={
            (
              row
                .getVisibleCells()
                .map((cell) => cell.getContext().row.original)[0] as {
                sku: string;
              }
            )?.sku ?? "default"
          }
          onClick={editHandler}
        >
          Editar
        </p>
        <p
          className="text-red-600 cursor-pointer"
          data-id={
            (
              row
                .getVisibleCells()
                .map((cell) => cell.getContext().row.original)[0] as {
                sku: string;
              }
            )?.sku ?? "default"
          }
          onClick={removeHandler}
        >
          Eliminar
        </p>
      </div>
    </td>
  );
};

const TablePagination: React.FC<{ table: TableTypePagination }> = ({
  table,
}) => {
  return (
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
          Pagina {table.getState().pagination.pageIndex + lengthType.pageIndex}{" "}
          de {table.getPageCount()}
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
        onClick={() =>
          table.setPageIndex(table.getPageCount() - lengthType.lastPage)
        }
      >
        Última página
      </button>
    </div>
  );
};

export default Table;
