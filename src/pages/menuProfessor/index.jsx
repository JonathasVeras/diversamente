import React, { useState } from "react";
import SelecaoQuestoes from "../../containers/selecaoQuestoes";

const MenuDoProfessor = () => {
    const [showQuestions, setShowQuestions] = useState(false);

    const handleToggleQuestions = () => {
        setShowQuestions(prev => !prev);
    }

    return(
        <>
        <div>
        <button onClick={handleToggleQuestions} className="mb-4 px-4 py-2 mt-4 ml-4 bg-blue-500 text-white rounded">
            {showQuestions ? "Cancelar criação" : "Criar prova"}
        </button>
        {showQuestions && <SelecaoQuestoes />}
        </div>
        </>
    )
}

export default MenuDoProfessor;
