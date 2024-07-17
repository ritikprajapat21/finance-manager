import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <h1 className="font-bold">Finance Manager</h1>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Navbar;
