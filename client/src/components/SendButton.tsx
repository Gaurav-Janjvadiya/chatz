import { Button } from "@/components/ui/button";

export default function SendButton({
  onClick,
  variant = "default",
}: {
  onClick: () => void;
  variant: "outline" | "default";
}) {
  return (
    <Button className="mx-1" variant={variant} onClick={onClick}>
      <span className="material-symbols-outlined">send</span>
    </Button>
  );
}
