import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { dateFormat } from '../helpers'
import savingIcon from '../img/icono_ahorro.svg'
import houseIcon from '../img/icono_casa.svg'
import foodIcon from '../img/icono_comida.svg'
import generalIcon from '../img/icono_gastos.svg'
import recreationIcon from '../img/icono_ocio.svg'
import healthIcon from '../img/icono_salud.svg'
import susIcon from '../img/icono_suscripciones.svg'

const iconDictionary = {
    savings: savingIcon,
    food: foodIcon,
    house: houseIcon,
    general: generalIcon,
    recreation: recreationIcon,
    health: healthIcon,
    subscription: susIcon}

const Expense = ({expense,setExpenseEdit,deleteExpense}) => {
    const {nameExp,amount,category,id,date}= expense
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => deleteExpense(id)}
                destructive={true}
                >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        
        >
            <div className="gasto sombra">
                <div className="contenido-gasto">
                    <img src={iconDictionary[category]} alt="Icon" />
                    <div className="descripcion-gasto">
                        <p className="categoria">{category}</p>
                        <p className="nombre-gasto">{nameExp}</p>
                        <p className="fecha-gasto">
                            Added on: {' '}
                            <span>{dateFormat(date)}</span>
                        </p>
                    </div>
                    
                </div>
                <p className="cantidad-gasto">${amount}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense