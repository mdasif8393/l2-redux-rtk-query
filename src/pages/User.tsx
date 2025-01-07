import { SelectUsers } from "@/redux/features/user/userSlice";

import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { useAppSelector } from "@/redux/hook";

const User = () => {
  const users = useAppSelector(SelectUsers);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div className="flex justify-end items-center gap-5 mb-2">
        <h1 className="mr-auto">Users</h1>

        <AddUserModal />
      </div>
      <div>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default User;
