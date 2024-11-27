import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function CofffeStore() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);

  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffees;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(updateCoffee);

    // send to the server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.matchedCount) {
          Swal.fire({
            title: "Success",
            text: `Update coffee ${name} success `,
            icon: "success",
            confirmButtonText: "Ok",
          });

          setCoffees({
            _id,
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo,
          });
        }
      });
    e.target.reset();
  };

  return (
    <div>
      <div className=" flex justify-center items-center bg-[#F5F4F1] p-4 md:p-6">
        <figure className="flex justify-center items-center col-span-5">
          <img src={photo} alt="" />
        </figure>
        <div className="col-span-5 space-y-2">
          <h2 className="text-lg font-semibold">Name: {name}</h2>
          <p>Description: {details}</p>
        </div>
      </div>

      <div className="card md:justify-center md:items-center bg-base-100 w-full shrink-0 ">
        <form onSubmit={handleUpdateCoffee} className="card-body">
          {/* form name and chef row */}
          <div className="md:flex justify-center items-center gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* form supplier and test row */}
          <div className="md:flex justify-center items-center gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* form category and details row */}
          <div className="md:flex justify-center items-center gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* form photo row */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input
              className="btn max-w-lg btn-primary"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
