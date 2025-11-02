import { useState } from "react";
function QuestionForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    onAdd(question);
    setQuestion("");
  };
  return (<form onSubmit={handleSubmit}><input value={question} onChange={e=>setQuestion(e.target.value)} /><button>Add</button></form>);
}
export default QuestionForm;