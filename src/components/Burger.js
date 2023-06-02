import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './burger.css'

export default class Burger extends Component
{


    state={
        lattuce:0,
        tomato:0,
        cheese:0,
        meat:0
    }

    addremoveing=(action,ingredient)=>{
        let{ 
            lattuce,
            tomato,
            cheese,
            meat

        }=this.state;

        let stateValue;

        switch(ingredient){
            case'lattuce':{
                stateValue=lattuce
                break
            }
            case'tomato':{
                stateValue=tomato
                break
            }
            case'cheese':{
                stateValue=cheese
                break
            }
            case'meat':{
                stateValue=meat
                break
            }
            default: break;
        }
        if(action==="add"){
            stateValue=stateValue + 1;
        }else{
            stateValue=stateValue - 1;
        }
        this.setState({
            [ingredient]:stateValue>=0?stateValue:0
        })


    }
 
    BurgerContent=()=>{
        let{ 
            lattuce,
            tomato,
            cheese,
            meat

        }=this.state;

        let Burger=[];

        for(let i=0; i<lattuce; i++){
            Burger.push(<div key={Burger.length} className='lettuceside'></div>);
        }

        for(let i=0; i<tomato; i++){
            Burger.push(<div key={Burger.length} className='tomatoside'></div>);
        }

        for(let i=0; i<cheese; i++){
            Burger.push(<div key={Burger.length} className='cheeseside'></div>);
        }

        for(let i=0; i<meat; i++){
            Burger.push(<div key={Burger.length} className='meatside'></div>);
        }
        return Burger;
    }


render(){
        return (
            <>
            <div className='burgerIngredients'>
                <div className='topside'></div>
                {this.BurgerContent()}
                <div className='bottomside'></div>
            </div>

            
            <div className='ingredientsBlock'>
            <p>lattuce</p>
            <div className='ingrBtns'>

            <button onClick={()=>this.addremoveing ('add','lattuce')} className='ingrBtn'>Add</button>
            <button onClick={()=>this.addremoveing ('remove','lattuce')} className='ingrBtn'>Remove</button>
            </div>

            <p>tomato</p>
            <div className='ingrBtns'>

            <button onClick={()=>this.addremoveing ('add','tomato')} className='ingrBtn'>Add</button>
            <button onClick={()=>this.addremoveing ('remove','tomato')} className='ingrBtn'>Remove</button>
            </div>

            <p>cheese</p>
            <div className='ingrBtns'>

            <button onClick={()=>this.addremoveing ('add','cheese')} className='ingrBtn'>Add</button>
            <button onClick={()=>this.addremoveing ('remove','cheese')} className='ingrBtn'>Remove</button>
            </div>

            <p>meat</p>
            <div className='ingrBtns'>

            <button onClick={()=>this.addremoveing ('add','meat')} className='ingrBtn'>Add</button>
            <button onClick={()=>this.addremoveing ('remove','meat')} className='ingrBtn'>Remove</button>
            </div>
            
            </div>
            </>
            )
        }
}
