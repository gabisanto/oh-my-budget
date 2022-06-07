import React from 'react'

const BudgetControl = ({budget}) => {

    const formatBudget = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>

        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>
                    Budget:{' '} 
                </span>{formatBudget(budget)}
            </p>

            <p>
                <span>
                    Available:{' '} 
                </span>{formatBudget(0)}
            </p>

            <p>
                <span>
                    Used:{' '} 
                </span>{formatBudget(0)}
            </p>

        </div>
    </div>
  )
}

export default BudgetControl