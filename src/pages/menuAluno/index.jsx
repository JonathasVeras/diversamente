import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuAluno = () => {
  const [tests, setTests] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedTests = localStorage.getItem("tests");
    const storedResults = localStorage.getItem("results");

    if (storedTests) {
      setTests(JSON.parse(storedTests));
    }

    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  const handleStartTest = (testIndex) => {
    navigate(`/diversamente/start-test/${testIndex}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl mb-6 font-semibold">Menu do Aluno</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl mb-4 font-bold">Provas disponíveis</h2>
        {tests.length > 0 ? (
          tests.map((test, index) => (
            <button 
              onClick={() => handleStartTest(index)} 
              key={index}
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 active:bg-blue-800 mb-2"
            >
              Iniciar {test.name} {/* Aqui mudamos para exibir o nome da prova */}
            </button>
          ))
        ) : (
          <p className="text-gray-600">Não há provas disponíveis no momento.</p>
        )}
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl mb-4 font-bold">Seus resultados</h2>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="text-gray-700">
                {result.testname}: <span className="font-bold">{result.score} pontos</span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Você ainda não realizou nenhuma prova.</p>
        )}
      </div>
    </div>
  );
};

export default MenuAluno;
