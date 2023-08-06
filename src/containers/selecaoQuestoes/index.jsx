import React, { useState, useEffect } from "react";

function SelecaoQuestoes() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [topic, setTopic] = useState("");
  const [testName, setTestName] = useState("");

  useEffect(() => {
    fetch("/questions.txt")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleQuestionSelect = (question) => {
    setSelectedQuestions((prev) => {
      if (prev.find((q) => q.question === question.question)) {
        return prev.filter((q) => q.question !== question.question);
      } else {
        return [...prev, question];
      }
    });
  };

  const handleCreateTest = () => {
    if (!testName.trim()) {
      alert("Por favor, dê um nome para a prova.");
      return;
    }

    // Recupera as provas do localStorage
    let tests = JSON.parse(localStorage.getItem("tests")) || [];

    // Adiciona a nova prova à lista de provas
    const newTest = {
      name: testName,
      questions: selectedQuestions,
    };
    tests.push(newTest);

    // Salva a lista de provas atualizada no localStorage
    localStorage.setItem("tests", JSON.stringify(tests));

    alert("Prova criada com sucesso!");
    setSelectedQuestions([]);
    setTestName(""); // Limpa o nome da prova após a criação
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "subject") {
      setSubject(value);
    } else if (name === "level") {
      setLevel(value);
    } else if (name === "topic") {
      setTopic(value);
    }
  };

  let displayedQuestions = questions;

  let topicSet;

  if (subject) {
    const filteredQuestions = questions.filter((q) => q.subject === subject);

    topicSet = new Set(filteredQuestions.map((q) => q.topic));
  } else {
    topicSet = new Set(questions.map((q) => q.topic));
  }

  if (level) {
    displayedQuestions = displayedQuestions.filter((q) => q.level === level);
  }
  if (topic) {
    displayedQuestions = displayedQuestions.filter((q) => q.topic === topic);
  }

  const subjectSet = new Set(questions.map((q) => q.subject));
  const levelSet = new Set(questions.map((q) => q.level));

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Selecione as questões para a prova</h1>
      <div className="mb-6">
        <label>
          Filtro de matéria:
          <select name="subject" value={subject} onChange={handleFilterChange} className="ml-2">
            <option value="">--Selecione--</option>
            {[...subjectSet].map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
        <label className="ml-4">
          Filtro de nível:
          <select name="level" value={level} onChange={handleFilterChange} className="ml-2">
            <option value="">--Selecione--</option>
            {[...levelSet].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <label className="ml-4">
          Filtro de assunto:
          <select name="topic" value={topic} onChange={handleFilterChange} className="ml-2">
            <option value="">--Selecione--</option>
            {[...topicSet].map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ul>
        {displayedQuestions.map((question, index) => (
          <li key={index} className="mb-4 p-4 border rounded">
            <p>{question.question}</p>
            <p>Resposta correta padrão: {question.answer}</p>
            <button
              onClick={() => handleQuestionSelect(question)}
              className={`mt-2 px-4 py-2 rounded ${
                selectedQuestions.find((q) => q.question === question.question) ? "bg-red-500" : "bg-blue-500"
              } text-white`}
            >
              {selectedQuestions.find((q) => q.question === question.question) ? "Desmarcar" : "Selecionar"}
            </button>
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <label className="mr-2">Nome da Prova:</label>
        <input
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          placeholder="Digite o nome da prova"
        />
      </div>
      <button onClick={handleCreateTest} className="mt-6 px-6 py-3 bg-green-500 text-white rounded">
        Criar Prova
      </button>
    </div>
  );
}

export default SelecaoQuestoes;
