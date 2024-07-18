import DataTable from "@/components/data-table";
import { columns, payments } from "../payment";

const Transactions = () => {
  return (
    <section className="p-2 md:pt-6 md:px-6">
      <DataTable columns={columns} data={payments} pageSize={15} />
    </section>
  );
};

export default Transactions;
