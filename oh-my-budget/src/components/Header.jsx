import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({budget,setBudget,isValidBudget,setIsValidBudget, expenses, setExpenses}) => {
  return (
      <header>
            <h1>
                Budget control
            </h1>
            {isValidBudget ? (
                <BudgetControl 
                    expenses = {expenses}
                    setExpenses = {setExpenses}
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                
                />
            ) : 
            <NewBudget 
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
            />
            }
            
      </header>
    
  )
}

export default Header
