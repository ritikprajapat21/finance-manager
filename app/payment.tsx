"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Payment = {
  id: number;
  amount: number;
  tag: string;
  date: Date;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value);
        }}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "tag",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="float-start"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tag
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "date",
    header: () => <div className="text-center">Date</div>,
    cell: ({ row }) => {
      const date: Date = row.getValue("date");
      return (
        <div className="text-center font-medium">{date.toDateString()}</div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="float-end"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        <div className="text-right">Amount</div>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

export const payments: Payment[] = [
  {
    id: 1,
    amount: 500,
    tag: "Clothing",
    date: new Date(),
  },
  {
    id: 2,
    amount: 511,
    tag: "Food",
    date: new Date(),
  },
  {
    id: 3,
    amount: 510,
    tag: "Bill",
    date: new Date(),
  },
  {
    id: 4,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 5,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 6,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 7,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 8,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 9,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 10,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 11,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
  {
    id: 12,
    amount: 484,
    tag: "Travel",
    date: new Date(),
  },
];
