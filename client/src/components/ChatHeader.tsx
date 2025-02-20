import { Badge } from "./ui/badge";
import UserAvatar from "./UserAvatar";

export default function ChatHeader({ username }: { username: string }) {
  return (
    <div className="flex w-full mb-4">
      <Badge variant={"default"} className="w-full">
        <UserAvatar />
        <p>{username}</p>
      </Badge>
    </div>
  );
}
