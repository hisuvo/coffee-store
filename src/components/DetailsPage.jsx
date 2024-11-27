import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const coffees = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffees;
  return (
    <div>
      <div className=" flex justify-center items-center bg-[#F5F4F1] p-4 md:p-6">
        <figure className="flex justify-center items-center col-span-5">
          <img src={photo} alt="" />
        </figure>
        <div className="col-span-5 space-y-2">
          <h2 className="text-lg font-semibold">Name: {name}</h2>
          <p>Description: {details}</p>
          <p>Chef: {chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}
