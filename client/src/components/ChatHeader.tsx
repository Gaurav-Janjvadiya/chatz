import { Badge } from "./ui/badge";
import UserAvatar from "./UserAvatar";

export default function ChatHeader({ username }: { username: string }) {
  return (
    <div className="flex">
      <UserAvatar />
      <Badge>{username}</Badge>
    </div>
  );
}
