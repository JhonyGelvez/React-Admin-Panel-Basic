import {useState} from "react";
import QuestionForm from "./components/QuestionForm";
import QuestionsList from "./components/QuestionsList";
export default function App(){const[questions,setQuestions]=useState([]);return (<div><h2>Admin</h2><QuestionForm onAdd={q=>setQuestions([...questions,q])}/><QuestionsList questions={questions}/></div>) }