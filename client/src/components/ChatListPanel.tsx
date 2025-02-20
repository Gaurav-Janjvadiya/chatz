import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import SendButton from "./SendButton";

export default function ChatListPanel() {
  return (
    <div className="h-screen">
      <ChatHeader username={"Gaurav"} />
      <MessageList />
      <div className="flex bg-black mt-2">
        <MessageInput />
        <SendButton onClick={() => {}} />
      </div>
    </div>
  );
}
