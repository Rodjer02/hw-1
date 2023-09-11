import { Link } from "@chakra-ui/react";
import Button from "../Button/Button";
import { GrAction } from "react-icons/gr";
import "./ResultForm.css";
import { useState } from "react";
export default function ResultForm({ shortLink, addClass }) {
  const [isCopyVisible, setIsCopyVisible] = useState(false);

  const copyLinkBtn = () => {
    navigator.clipboard
      .writeText(shortLink)
      .then(() => {
        setIsCopyVisible(true);
        setTimeout(() => {
          setIsCopyVisible(false);
        }, 5000);
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  return (
    <div className={`resultForm ${addClass ? "show" : ""}`}>
      <Link href={"https://" + shortLink} isExternal>
        {shortLink} <GrAction mx="2px" />
      </Link>
      <div className={`modal ${isCopyVisible ? "copyModal" : ""}`}>
        Скопирована
      </div>
      <Button btnValue="ctl+V" onClick={copyLinkBtn} />
    </div>
  );
}
