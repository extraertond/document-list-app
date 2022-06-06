type IDocument = {
  id: number;
  title: string;
  date: string;
  type: "base" | "custom" | "advanced";
  image?: string;
  text?: string;
};

export default IDocument;
