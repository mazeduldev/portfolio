import { Button } from "@/components/ui";
import React from "react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  title: string;
};

function SubmitButton({ title }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending} disabled={pending}>
      {title}
    </Button>
  );
}

export default SubmitButton;
