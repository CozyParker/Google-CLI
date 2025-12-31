import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";

type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (item: T) => ReactNode;
};

export function DataTable<T extends { id: string }>({
  columns,
  data,
  emptyLabel
}: {
  columns: Column<T>[];
  data: T[];
  emptyLabel?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableHeader key={col.key as string}>{col.header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                <p className="text-sm text-slate-500">
                  {emptyLabel ?? "No records"}
                </p>
              </TableCell>
            </TableRow>
          )}
          {data.map((item) => (
            <TableRow key={item.id}>
              {columns.map((col) => (
                <TableCell key={col.key as string}>
                  {col.render ? col.render(item) : (item as any)[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
