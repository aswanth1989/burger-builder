import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.8,
    meat: 1.1,
    bacon: 0.8
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad : 0,
            meat : 0,
            cheese : 0,
            bacon : 0
        },
        totalPrice:3,
        purchaseable:false,
        purchasing:false
    }

    updatePurchaseable = (ingredient) => {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey]
        }).reduce((sum,el)=>{
            return sum+el
        },0);
        this.setState({purchaseable:sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = INGREDIENT_PRICES[type]+oldPrice;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseable(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-INGREDIENT_PRICES[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseable(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    purchaseCloseHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler= () => {
        alert("You continue")
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCloseHandler}><OrderSummary ingredients = {this.state.ingredients} continue={this.purchaseContinueHandler} cancel={this.purchaseCloseHandler} totalPrice={this.state.totalPrice.toFixed(2)}/></Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls addedIngredient = {this.addIngredientHandler} 
                    removeIngredient = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice.toFixed(2)}
                    purchaseable = {this.state.purchaseable}
                    ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;