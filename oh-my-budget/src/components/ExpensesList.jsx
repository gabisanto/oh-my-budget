import React from 'react'
import Expense from './Expense'

const ExpensesList = ({expenses,setExpenseEdit,deleteExpense, filter, filtered}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>
          {/* {expenses.length ? 'My expenses' : 'No expenses yet'} */}
      </h2>

      {filter ? (
            <>
             <h2>{filtered.length ? 'My expenses' : 'No expenses yet'}</h2>
                  {filtered.map(expense => (
                    <Expense 
                      key={expense.id}
                      expense={expense}
                      setExpenseEdit={setExpenseEdit}
                      deleteExpense={deleteExpense}
                    />
                ))}
            </>
      ) : 
        <>
        <h2>{expenses.length ? 'My expenses' : 'No expenses yet'}</h2>
        {expenses.map(expense => (
        <Expense 
          key={expense.id}
          expense={expense}
          setExpenseEdit={setExpenseEdit}
          deleteExpense={deleteExpense}
        />
    ))}
    </> }

    
    </div>
  )
}

export default ExpensesList
