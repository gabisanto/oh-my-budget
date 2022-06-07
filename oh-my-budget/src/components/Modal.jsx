import { useState} from 'react'
import Message from './Message'
import CloseModal from '../img/cerrar.svg'


const Modal = ({setModal,modalAnimation,setModalAnimation,saveExpense}) => {

    const [msg,setMsg] = useState('')
    const [nameExp,setNameExp] = useState('')
    const [amount,setAmount] = useState(0)
    const [category,setCategory] = useState('')


    const hideModal = () => {
            
            setModalAnimation(false)

            setTimeout(() => {
                setModal(false)
            }, 300);
    }   

    const handleSubmit = e => {
        e.preventDefault()
        if ([nameExp,amount,category].includes('')) {
            setMsg('All fields are required')
            return
        } 
    }

  return (
    <div className='modal'>
        
        <div className='cerrar-modal'>
            <img src={CloseModal} alt="Close"
            onClick={hideModal} />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}>
        <legend>New expense</legend>
        {msg && <Message type="error">{msg}</Message>}
            <div className='campo'>
                
                <label htmlFor="nameExp">Expense description</label>
                <input id="nameExp" type="text" placeholder="Expense name" value = {nameExp}
                onChange={e => setNameExp(e.target.value)}/>
            </div>
            
            <div className='campo'>
                
                <label htmlFor="amount">Amount used</label>
                <input id="amount" type="number" placeholder="Add the amount" value = {amount}
                onChange={e => setAmount(e.target.value)} />
            </div>

            <div className='campo'>
                
                <label htmlFor="category">Category</label>
                <select id="category" value = {category}
                onChange={e => setCategory(e.target.value)}>
                    <option value="">--Select category</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="house">House expenses</option>
                    <option value="general">General expenses</option>
                    <option value="recreation">Recreation</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

            <input type="submit" value="Add expense" />
            
        </form>

    </div>
  )
}

export default Modal