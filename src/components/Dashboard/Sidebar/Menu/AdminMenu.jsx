import { FaUserCog, FaUserPlus } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={FaUserPlus}
        label="Seller Request"
        address="seller-request"
      />
    </>
  );
};

export default AdminMenu;
