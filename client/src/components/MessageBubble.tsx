import { Badge } from "@/components/ui/badge";
import { memo } from "react";

function MessageBubble({
  msgTxt,
  variant = "secondary",
  align = "start",
}: {
  msgTxt: string;
  variant?:
    | "secondary"
    | "default"
    | "destructive"
    | "outline"
    | null
    | undefined;
  align?: "start" | "end";
}) {
  return (
    <div className={`flex items-center justify-${align} mx-2 my-1`}>
      <Badge className="w-fit" variant={variant}>
        {msgTxt}
      </Badge>
    </div>
  );
}

export default memo(MessageBubble);
