import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({budget,setBudget,isValidBudget,setIsValidBudget, expenses}) => {
  return (
      <header>
            <h1>
                Budget control
            </h1>
            {isValidBudget ? (
                <BudgetControl 
                    expenses = {expenses}
                    budget={budget}
                
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
