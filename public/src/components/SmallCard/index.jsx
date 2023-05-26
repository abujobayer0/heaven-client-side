import { Link } from "react-router-dom";

const SmallCard = ({ name, img, id, price }) => {
  return (
    <div className="flex pb-2  border-b-2  justify-start items-start gap-2">
      <img
        className="w-20 scale-95 hover:scale-100 cursor-pointer"
        src={img}
        alt=""
      />

      <div>
        <Link to={`/toy/${id}`}>
          <h1 className="text-md cursor-pointer  font-semibold">
            {" "}
            {`${name.length > 40 ? name.slice(0, 40) + "..." : name}`}
          </h1>
        </Link>

        <p className="text-md  font-semibold text-red-600">{price}$</p>
      </div>
    </div>
  );
};

export default SmallCard;
