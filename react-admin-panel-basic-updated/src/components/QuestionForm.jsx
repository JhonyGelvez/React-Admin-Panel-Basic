import { useState } from "react";
export default function QuestionForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  return (
    <form onSubmit={(e)=>{e.preventDefault(); if(question.trim()) onAdd(question); setQuestion("");}}>
      <input value={question} onChange={(e)=>setQuestion(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
