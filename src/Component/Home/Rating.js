import { FaRegStar, FaStar } from "react-icons/fa";

export const Rating = ({ rate }) => {
  return (
    <div className="flex gap-2 text-star">
      {Array.apply(0, Array(5)).map(function (value, i) {
        if (i < rate) {
          return (
            <span>
              <FaStar />
            </span>
          );
        } else {
          return (
            <span>
              <FaRegStar />
            </span>
          );
        }
      })}
    </div>
  );
};
