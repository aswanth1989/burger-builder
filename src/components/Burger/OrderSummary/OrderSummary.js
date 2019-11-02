import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const orderSummaryIngredient = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}  </li>
    })
    return(
       <Aux>
           <h3>Your Order</h3>
           <p>A delicious burger is ready to check out</p>
           <ul>
                {orderSummaryIngredient}
           </ul>
           <p>Total Price: <strong>{props.totalPrice}</strong></p>
           <p>Continue to checkout?</p>
           <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
       </Aux> 
    );
    
}

export default orderSummary;