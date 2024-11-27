import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Coffee({ coffee }) {
  const { _id } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="border-2 rounded-xl bg-[#F5F4F1] p-4 md:p-6 grid grid-cols-12 justify-between items-center gap-4">
      <figure className="flex justify-center items-center col-span-5">
        <img src={coffee.photo} alt="" />
      </figure>
      <div className="col-span-5 space-y-2">
        <h2 className="text-lg font-semibold">Name: {coffee.name}</h2>
        <p>Description: {coffee.details}</p>
      </div>
      <div className="col-span-2 flex flex-col justify-center items-center">
        <button className="btn btn-md bg-[#D2B48C] text-white text-lg">
          <FaEye />
        </button>
        <Link
          to={`/coffeestore/${_id}`}
          className="btn btn-md bg-[#3C393B] text-white text-lg"
        >
          <FaPen />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-md bg-[#EA4744] text-white text-lg"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
