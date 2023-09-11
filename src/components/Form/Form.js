import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.css";

export default function ({
  setInputValue,
  inputValue,
  setShortLink,
  setAddClass,
}) {
  const getUrl = async () => {
    return await fetch(`https://clck.ru/--?url=${inputValue}`)
      .then((data) => data.text())
      .then((result) => result);
  };
  const createShortLink = async () => {
    const response = await getUrl();
    setShortLink(response);
    setAddClass(true);
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="form">
      <Input className="input" inputValue={inputValue} onChange={onChange} />
      <Button className="btn" onClick={createShortLink} btnValue="Create" />
    </div>
  );
}
