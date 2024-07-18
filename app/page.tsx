import TransactionChart from "@/components/TransactionChart";
import { columns, payments } from "./payment";
import CategoryChart from "@/components/CategoryChart";
import DataTable from "@/components/data-table";

export default async function Home() {
  return (
    <section className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 items-center gap-2 p-2 md:pt-6 md:px-6">
      <TransactionChart />
      <CategoryChart />
      <DataTable
        className="md:col-span-2"
        columns={columns}
        data={payments}
        pageSize={5}
      />
    </section>
  );
}
