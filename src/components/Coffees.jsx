import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";

export default function Coffees() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="grid md:grid-cols-2 gap-4 px-4 my-16">
      {coffees.map((coffee) => (
        <Coffee
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        />
      ))}
    </div>
  );
}
