import Cart from "@/Components/Cart";
import Link from "next/link";

const Notifications = () => {
  return (
    <Cart>
      <div className="flex flex-col">
        <p>Notifications</p>
        <Link
          href="/complex-dashboard/archived"
          className={`px-4 py-2 rounded-md text-lg cursor-pointer duration-100 hover:opacity-80 bg-sky-100 text-sky-500`}
        >
          archived
        </Link>
      </div>
    </Cart>
  );
};

export default Notifications;