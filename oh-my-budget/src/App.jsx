import { useState, useEffect } from 'react'
import ExpensesList from './components/ExpensesList'
import Filter from './components/Filter'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewBudgetIcon from './img/nuevo-gasto.svg'


function App() {
  //We need budget to be available in several components so it's better to set it in the main App

  //we add the localStorage part so it will work with the useEffect below and have both the budget and the expenses saved in LS for refresh!

  const [budget,setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )

  const [expenses,setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [isValidBudget,setIsValidBudget] = useState(false)

  const [modal,setModal] = useState(false)

  const [modalAnimation,setModalAnimation] = useState(false)
  
  //to filter we need the filter, and a state to save the results. we can NOT use the expenses state because if we overwrite it, we will lose all the info

  const [filter, setFilter] = useState('')

  const [filtered, setFiltered] = useState([])

  //we need to identify which expense to edit
  const [expenseEdit,setExpenseEdit] = useState({})

  //useEffect will be listening to expeneEdit and open modal if there's something to edit
  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true)
      setTimeout(() => {
      setModalAnimation(true)
    }, 300);
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if(filter) {
      //filter expenses by category
      const filterCategory = expenses.filter(expense => expense.category === filter)
      setFiltered(filterCategory)

    }
  },[filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    //if i dont add this next part, when i refresh i go back to the initial page. if i set valid budget i go straight to the expenses components page
    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  })

  const handleNewBudget = () => {
    setModal(true)
    //we clean expense edit so it wont stay saved and appear when we add a new expense after closing edit
    setExpenseEdit({})
    setTimeout(() => {
      setModalAnimation(true)
    }, 300);
  }

  const saveExpense = expense => {
    if(expense.id) {
      // update
      const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses)
      setExpenseEdit({}) //reset and clean state
    } else {
      //new expense
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses,expense])
    }
    

    setModalAnimation(false)

    setTimeout(() => {
        setModal(false)
    }, 300);
  }

  const deleteExpense = id => {
    const filteredExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(filteredExpenses)
  }

  return (
    //this way the modal element will show up wherever you are situated, otherwise it was shown stuck to the beginning and there were errors if you have many expenses added
    <div className={modal ? 'fijar' : ''}> 
      <Header 
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
        setExpenses={setExpenses} //so we can reset the app
      />
      {isValidBudget ? (
        <>
        <main>
            <Filter 
              filter={filter}
              setFilter={setFilter}
            />

            <ExpensesList 
                expenses={expenses}
                setExpenseEdit={setExpenseEdit}
                deleteExpense={deleteExpense}
                filter={filter}
                filtered={filtered}
            
            />
        </main>
        <div className="nuevo-gasto">
        <img src={NewBudgetIcon}
             alt="New budget" 
             onClick={handleNewBudget}
             />

      </div>
      </>
      ) : null}
      
        {modal && <Modal 
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    saveExpense={saveExpense}
                    expenseEdit={expenseEdit}
                    setExpenseEdit={setExpenseEdit}
                  />}
    </div>
    
  )
}

export default App
