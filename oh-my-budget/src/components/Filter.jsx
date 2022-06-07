import {useState, useEffect} from 'react'

const Filter = ({filter,setFilter}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label>Filter expenses</label>
                <select
                    value={filter}
                    onChange={e=>setFilter(e.target.value)}
                >
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
            
        </form>

    </div>
  )
}

export default Filter