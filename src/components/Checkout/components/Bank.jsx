import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { orders, preorders, StoreContext } from '../../../store/StoreProvider';
import { usersData } from '../../../store/StoreProvider';

const Bank = ({setStep}) => {
    const[seconds, setSeconds] =useState(10);
    const {setShoppingCart, user} = useContext(StoreContext)

    const location = useLocation()
    const history = useHistory()

    useEffect(()=>{
        let myInterval = setInterval(()=>{
            if(seconds > 0){
                setSeconds(seconds - 1);
            }
            if(seconds === 0){
                    clearInterval(myInterval)
                } 
        }, 1000)
        return ()=> {clearInterval(myInterval);
        };
    });

    const finish = () => {
    const orderId = preorders.findIndex(i => i.id === location.state.orderObject.id)
    const item = preorders[orderId];

    setStep(3.5)
    orders.push(item);
    preorders.splice(orderId, 1);
    setShoppingCart([])
    if(user){
        const index = usersData.findIndex(i => i.login === user.login)
        usersData[index].orders.push(item)
        const itemsIndexes = item.items.map(i => i.id)
        const newItemsList = usersData[index].items.concat(itemsIndexes)
        usersData[index].items = newItemsList
        console.log(usersData[index])
    }
    setTimeout(()=>{history.push('/checkout/gotowe')},10000)
    }

    useEffect(() => finish(),[])

    return ( 
        <div>
            <h4>Witaj na stronie płatności</h4>
            <p>Wybrana metoda to : {location.state.payment}</p>
            <p>Tym razem Ci zaufamy i przekażemy Ci produkt bez płatności</p>
            <p>Przy następnym zamówieniu uregulujesz płatność za aktualne zamówienie :)</p>
            <p>W ciągu 10 sekund zostaniesz przeniesiony do nastepnej strony </p>
            {seconds}
        </div>
     );
}
 
export default Bank
