import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

export default function Coffees() {
  const coffees = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 gap-4 px-4 my-16">
      {coffees.map((coffee) => (
        <Coffee key={coffee._id} coffee={coffee} />
      ))}
    </div>
  );
}
