import MessageBubble from "./MessageBubble";

export default function MessageList() {
  return (
    <div className="flex flex-col w-full border border-white">
      <MessageBubble msgTxt="hi" variant={"default"} align="end" />
      <MessageBubble msgTxt="Hi!" />
      <MessageBubble msgTxt="hi" variant={"default"} align="end" />
      <MessageBubble msgTxt="Hi!" />
      <MessageBubble msgTxt="hi" variant={"default"} align="end" />
      <MessageBubble msgTxt="Hi!" />
      <MessageBubble msgTxt="hi" variant={"default"} align="end" />
      <MessageBubble msgTxt="Hi!" />
      <MessageBubble msgTxt="hi" variant={"default"} align="end" />
      <MessageBubble msgTxt="Hi!" />
    </div>
  );
}
