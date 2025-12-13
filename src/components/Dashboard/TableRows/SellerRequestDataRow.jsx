import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const SellerRequestDataRow = ({ request, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleUpdateRole = async () => {
    try {
      await axiosSecure.patch("/update-role", {
        email: request?.email,
        role: "seller",
      });
      refetch()
      toast.success("Role Updated");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{request?.email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          onClick={handleUpdateRole}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Make Seller</span>
        </span>
      </td>
    </tr>
  );
};

export default SellerRequestDataRow;
