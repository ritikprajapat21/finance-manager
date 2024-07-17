import TransactionChart from "@/components/TransactionChart";
import DataTable from "./data-table";
import { columns, payments } from "./payment";
import CategoryChart from "@/components/CategoryChart";

export default async function Home() {
  return (
    <section className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 items-center gap-2 p-2 md:pt-6 md:px-6">
      <TransactionChart />
      <CategoryChart />
      <DataTable columns={columns} data={payments} />
    </section>
  );
}
