import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  /*  TASK: -------------------- */
  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />{" "}
      {/* ohne Klammern (), da sie sonst sofort aufgerufen wird. soll aber erst aufgerufen werden, wenn Form abgeschickt wurde */}
      <List tags={tags} />
    </main>
  );
}
