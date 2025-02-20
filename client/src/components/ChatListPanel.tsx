import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";

export default function ChatListPanel() {
  return (
    <div>
      <ChatHeader username={"Gaurav"}/>
      <MessageList />
    </div>
  );
}
