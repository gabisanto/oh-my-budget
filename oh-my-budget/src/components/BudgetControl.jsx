import {useState, useEffect} from 'react'

const BudgetControl = ({budget,expenses}) => {
    //we need to know how much we spent and how much we have available to show it in the component
    const [available,setAvailable] = useState(0)
    const [spent,setSpent] = useState(0)



    useEffect(() => {
        const totalSpent = expenses.reduce((total,expense) => expense.amount + total,0)
        const totalAvailable = budget - totalSpent
        setAvailable(totalAvailable)
        setSpent(totalSpent)
        
    },[expenses])

    const formatBudget = (n) => {
        return n.toLocaleString('en-US', {
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
                </span>{formatBudget(available)}
            </p>

            <p>
                <span>
                    Spent:{' '} 
                </span>{formatBudget(spent)}
            </p>

        </div>
    </div>
  )
}

export default BudgetControl