import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
  return (
    <div className="flex gap-2">
      <Link href="/edit/1" className="btn">
        <Pencil /> Edit
      </Link>
      <button className="btn btn-error">
        <Trash /> Delete
      </button>
    </div>
  );
};

export default ButtonAction;
