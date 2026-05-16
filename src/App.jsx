import React from 'react';
import pricingData from './data/pricingData'
import "./App.css";
import PricingCard from "./pricingcard/PricingCard";

function App() {
    return (

        <div className='container'>
            {  
                pricingData.map((plan) => (
                    <PricingCard key={plan.id} plans={plan} />)
                    )}

                  
        </div>


    )
}

export default App