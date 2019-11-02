import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Total price: <strong>{props.totalPrice}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} 
                    added={()=>props.addedIngredient(ctrl.type)} 
                    removed={()=>props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            })}
            <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
}


export default buildControls;