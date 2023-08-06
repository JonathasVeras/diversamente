import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";

const StartTest = () => {
  const navigate = useNavigate();
  const [imageListIndex, setImageListIndex] = useState(0);
  const { index } = useParams();
  const [test, setTest] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const scoreRef = useRef(0);

  useEffect(() => {
    const storedTests = localStorage.getItem("tests");
    if (storedTests) {
      const loadedTests = JSON.parse(storedTests);
      if (loadedTests && loadedTests.length > index) {
        const selectedTest = loadedTests[parseInt(index)];
        setTest(selectedTest); // store the entire test, not just questions
      } else {
        console.log("Índice inválido ou teste não encontrado no localStorage.");
      }
    } else {
      console.log("Nenhum teste encontrado no localStorage.");
    }
  }, [index]);

  const handleSubmit = () => {
    if (selectedAnswer === test.questions[currentQuestionIndex].answer) {
      scoreRef.current += 1;
    }
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      saveStudentScore();
      alert("Prova finalizada!");
      navigate(`/diversamente/aluno-menu`);
    }
  };

  const saveStudentScore = () => {
    let results = JSON.parse(localStorage.getItem("results")) || [];
    const user = JSON.parse(localStorage.getItem("user"));

    const newResult = {
      username: user.username,
      testname: test.name,
      score: scoreRef.current,
    };

    results.push(newResult);
    localStorage.setItem("results", JSON.stringify(results));
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="bg-black text-white h-screen">
      <h1 className="text-2xl font-bold hover:text-[3rem] hover:p-8 transition duration-300">Responder Prova</h1>
      <div className="border-2 border-white rounded shadow-md p-4 mt-8">
        {test ? (
          <div>
            <h2 className="underline text-xl hover:text-[2rem] hover:p-4 transition duration-300">{test.name}</h2>
            <h3 className="text-lg mt-4">
              {processQuestion(
                test.questions[currentQuestionIndex].question,
                imageListIndex,
                setImageListIndex,
                test.questions[currentQuestionIndex].imageList
              )}
            </h3>
            {Object.entries(test.questions[currentQuestionIndex].options).map(([key, value], idx) => (
              <div key={idx} className="mt-2">
                <input
                  type="radio"
                  id={`option-${key}`}
                  name="answer"
                  value={key}
                  onChange={handleAnswerChange}
                  checked={selectedAnswer === key}
                  className="mr-2"
                />
                <label
                  htmlFor={`option-${key}`}
                  className="text-lg hover:text-[2rem] hover:p-2 transition duration-300"
                >{`${key}. ${value}`}</label>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="bg-yellow-500 text-black border-2 border-white px-5 py-2 mt-4 hover:bg-white hover:text-black"
            >
              Próxima
            </button>
          </div>
        ) : (
          <p className="text-lg hover:text-xl transition duration-300">Carregando prova...</p>
        )}
      </div>
    </div>
  );
};
export default StartTest;

function processQuestion(question, imageListIndex, setImageListIndex, imageList) {
    const words = question.split(/(\s+|_[^_]+_|$[^$]+$|[?.!,;])/);
    return (
      <span>
        {words.map((word, index) => {
          if (word && word.startsWith("_") && word.endsWith("_")) {
            // Se começa e termina com '_', remova os '_' e aplique o sublinhado
            return (
              <span key={index} className="underline hover:text-[2rem] hover:p-2 transition duration-300 mr-1">
                {word.slice(1, -1)}
              </span>
            );
          } else if (word && word.startsWith("$") && word.endsWith("$")) {
            if (imageList && Array.isArray(imageList) && imageList.length > imageListIndex) {
              const imageUrl = imageList[imageListIndex];
              setImageListIndex(imageListIndex + 1); // increment the index
              return (
                <Popover content={<img src={imageUrl} alt="Related visual content" width="200" />} key={index}>
                  <span className="hover:underline cursor-pointer hover:text-[2rem] hover:p-2 transition duration-300 mr-1">
                    {word.slice(1, -1)}
                  </span>
                </Popover>
              );
            } else {
              console.log(imageList);
              console.error("imageList não está definido ou está vazio.");
              return (
                <span key={index} className="hover:text-[2rem] hover:p-2 transition duration-300 mr-1">
                  {word.slice(1, -1)}
                </span>
              );
            }
          } else if (word && /[?.!,;]/.test(word)) {
            // Pontuações, apenas retornar sem estilo
            return <span key={index}>{word}</span>;
          } else if (word && /\s+/.test(word)) {
            // Espaços, apenas retornar sem estilo
            return <span key={index}>{word}</span>;
          } else {
            // Palavras comuns, com efeito hover
            return (
              <span key={index} className="hover:text-[2rem] hover:p-2 transition duration-300 mr-1">
                {word}
              </span>
            );
          }
        })}
      </span>
    );
  }