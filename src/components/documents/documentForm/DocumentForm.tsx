import { useState } from "react";
import IDocument from "../../../models/IDocument";
import "./DocumentForm.scss";

type Props = {
  document: IDocument;
  add: boolean;
};

const DocumentForm: React.FC<Props> = ({ document, add }: Props) => {
  const [type, setType] = useState("simple");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  return (
    <div className="vertical-row card">
      <div className="vertical-row">
        <label>title</label>
        <input type="text" placeholder="hols" />
      </div>
      <div className="vertical-row">
        <label>text</label>
        <textarea placeholder="hols" />
      </div>
    </div>
  );
};

export default DocumentForm;
