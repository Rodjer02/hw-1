import { Input } from "@chakra-ui/react";

export default function defaultInput({ inputValue, onChange }) {
  return (
    <Input
      value={inputValue}
      placeholder="Ссылка"
      onChange={onChange}
    />
  );
}
