import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import NewBudgetIcon from './img/nuevo-gasto.svg'


function App() {
  //We need budget to be available in several components so it's better to set it in the main App
  const [budget,setBudget] = useState(0)

  const [isValidBudget,setIsValidBudget] = useState(false)

  const [modal,setModal] = useState(false)

  const [modalAnimation,setModalAnimation] = useState(false) 

  const handleNewBudget = () => {
    setModal(true)
    setTimeout(() => {
      setModalAnimation(true)
    }, 300);
  }

  const saveExpense = expense => {
    
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />
      {isValidBudget ? (
        <div className="nuevo-gasto">
        <img src={NewBudgetIcon}
             alt="New budget" 
             onClick={handleNewBudget}
             />

      </div>
      ) : null}
      
        {modal && <Modal 
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    saveExpense={saveExpense}
                  />}
    </div>
    
  )
}

export default App
