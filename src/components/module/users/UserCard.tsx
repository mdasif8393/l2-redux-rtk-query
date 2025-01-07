import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { FaRegTrashCan } from "react-icons/fa6";
interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h1>{user.name}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <FaRegTrashCan />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
