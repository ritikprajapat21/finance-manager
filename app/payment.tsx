"use client";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, PencilIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
        <AlertDialog>
          <Dialog>
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
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    className="justify-between cursor-pointer"
                    onClick={() => {
                      console.log(row.getValue("id"));
                    }}
                  >
                    <div className="flex justify-between w-full cursor-pointer">
                      <p>Edit</p>
                      <div>
                        <PencilIcon className="h-4 w-4" />
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DialogTrigger>
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem className="justify-between">
                    <div className="flex justify-between w-full cursor-pointer">
                      <p>Delete</p>
                      <div>
                        <Trash2 className="h-4 w-4" />
                      </div>
                    </div>
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit transaction</DialogTitle>
                <DialogDescription>
                  Make changes to your transaction here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    Amount
                  </Label>
                  <Input
                    id="Amount"
                    defaultValue={row.original.amount}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="tag" className="text-right">
                    Tag
                  </Label>
                  <Input
                    id="tag"
                    defaultValue={row.original.tag}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
