type IDocument = {
  id: number;
  title: string;
  date: string;
  type: "simple" | "custom" | "advanced";
  image?: string;
  text?: string;
};

export default IDocument;
