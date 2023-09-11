import { Button } from "@chakra-ui/react";

export default function defaultButton({ onClick, btnValue}) {
  return (
    <Button
      colorScheme="blue"
      variant="outline"
      onClick={onClick}
      style={{ width: "max-content" }}
    >
      {btnValue}
    </Button>
  );
}
