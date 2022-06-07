import {useState, useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const BudgetControl = ({budget,expenses}) => {
    //we need to know how much we spent and how much we have available to show it in the component
    const [available,setAvailable] = useState(0)
    const [spent,setSpent] = useState(0)
    const [percentage,setPercentage] = useState(0)


    useEffect(() => {
        const totalSpent = expenses.reduce((total,expense) => expense.amount + total,0)
        const totalAvailable = budget - totalSpent

        //get the percentage to use in the progressbar
        const newPercentage = (((budget - totalAvailable)/budget) * 100).toFixed(2)

        setAvailable(totalAvailable)
        setSpent(totalSpent)

        setTimeout(() => {
            setPercentage(newPercentage)
        }, 500);
        
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
            <CircularProgressbar
                styles= {buildStyles({
                    pathColor:'#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'

                })}
                value={percentage}
                text={`Spent ${percentage}%`}
            />
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