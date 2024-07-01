import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const Tab: React.FC = () => {
  return (
    <Tabs defaultValue="overview" className="mt-3">
      <TabsList>
        <Link href="/">
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </Link>
        <Link href="/analytics">
          <TabsTrigger value="analytics">Analytics </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
};

export default Tab;
