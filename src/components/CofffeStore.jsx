import { useLoaderData } from "react-router-dom";

export default function CofffeStore() {
  const coffee = useLoaderData();
  const { _id } = coffee;
  return (
    <div className=" flex justify-center items-center bg-[#F5F4F1] p-4 md:p-6">
      <figure className="flex justify-center items-center col-span-5">
        <img src={coffee.photo} alt="" />
      </figure>
      <div className="col-span-5 space-y-2">
        <h2 className="text-lg font-semibold">Name: {coffee.name}</h2>
        <p>Description: {coffee.details}</p>
      </div>
    </div>
  );
}
