import MessageBubble from "./MessageBubble";

export default function MessageList() {
  return (
    <div className="flex flex-col w-full">
      <MessageBubble msgTxt="Hi!" variant={"default"} />
      <MessageBubble msgTxt="hi" align="justify-end" />
      <MessageBubble msgTxt="Hi!" variant={"default"} />
      <MessageBubble msgTxt="hi" align="justify-end" />
      <MessageBubble msgTxt="Hi!" variant={"default"} />
      <MessageBubble msgTxt="hi" align="justify-end" />
      <MessageBubble msgTxt="Hi!" variant={"default"} />
      <MessageBubble msgTxt="hi" align="justify-end" />
      <MessageBubble msgTxt="Hi!" variant={"default"} />
      <MessageBubble msgTxt="hi" align="justify-end" />
    </div>
  );
}
