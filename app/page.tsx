import DataTable from "./data-table";
import { columns, payments } from "./payment";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-4 pt-16 px-16">
      <DataTable columns={columns} data={payments} />
    </main>
  );
}
