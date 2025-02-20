import { Badge } from "@/components/ui/badge";
import { memo } from "react";

function MessageBubble({
  msgTxt,
  variant = "secondary",
  align = "justify-start",
}: {
  msgTxt: string;
  variant?:
    | "secondary"
    | "default"
    | "destructive"
    | "outline"
    | null
    | undefined;
  align?: "justify-start" | "justify-end";
}) {
  return (
    <div className={`flex items-center ${align} mx-2 my-1`}>
      <Badge className="w-fit" variant={variant}>
        {msgTxt}
      </Badge>
    </div>
  );
}

export default memo(MessageBubble);
