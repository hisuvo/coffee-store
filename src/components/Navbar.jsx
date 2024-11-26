import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center gap-4 py-8 border-b-2">
      <Link to={"/"}>Home</Link>
      <Link to={"/coffeestore"}>Coffee Store</Link>
      <Link to={"/updatecoffee"}>Update Coffee</Link>
    </div>
  );
}
