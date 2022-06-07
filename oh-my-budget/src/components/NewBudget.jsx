import {useState} from 'react'
import Message from './Message'

const NewBudget = ({budget,setBudget,setIsValidBudget}) => {
    const [msg,setMsg] = useState('')

//we need to validate the input is a valid number
    const handleBudget = (e) => {
            e.preventDefault()
            if (!budget || budget < 0) {
                setMsg("Invalid budget")
                return //stop code's execution
            } 

            setMsg('')
            setIsValidBudget(true)
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleBudget}>
            <div className="campo">
                <label>
                    Set budget
                </label>
                <input className='nuevo-presupuesto'
                       type="number"
                       placeholder="Set budget"
                       value={budget} 
                       //updating setBudget with the amount set by user
                       onChange={e=> setBudget(Number(e.target.value))}
                       />
            </div>

            <input type="submit" value="Set"/>
            {msg && <Message type="error">{msg}</Message>}
        </form>
    </div>
  )
}

export default NewBudget