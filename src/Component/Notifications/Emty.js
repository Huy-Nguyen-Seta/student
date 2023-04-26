import { CgFileDocument } from "react-icons/cg";

export const Empty = ({ message }) => {
  return (
    <div className="flex-colo w-full py-2 px-4 rounded border border-border bg-main gap-4">
      <div className="flex-colo w-24 h-23 p-5 rounded-full bg-dry text-subMain text-4xl">
        <CgFileDocument />
      </div>
      <p className="text-border text-sm">{message || "Danh sách trống"}</p>
    </div>
  );
};
