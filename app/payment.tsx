"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  EllipsisVertical,
  MoreHorizontal,
  PencilIcon,
  Trash2,
} from "lucide-react";

export type Payment = {
  id: number;
  amount: number;
  tag: string;
  date: Date;
};

export const columns: ColumnDef<Payment>[] = [
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
  {
    id: "id",
    enableHiding: false,
    cell: ({ row }) => {
      console.log(row.original);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-between"
              onClick={() => {
                console.log(row.getValue("id"));
              }}
            >
              <p>Edit</p>
              <div>
                <PencilIcon className="h-4 w-4" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="justify-between">
              <p>Delete</p>
              <div>
                <Trash2 className="h-4 w-4" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
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
