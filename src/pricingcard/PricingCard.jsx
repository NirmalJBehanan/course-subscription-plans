import React from 'react'

const PricingCard = ({ plans }) => {
    return (
        <div className='card'>
            <h3>{plans.title}</h3>
            <h1>{plans.price}</h1>
            {

                plans.features.map((plan) =>
                    <ul>
                        <li style={{
                            color: plan.available ? "black" : "gray"
                        }}><i className={plan.available ? "fa-solid fa-check" : "fa-solid fa-x"}></i>{plan.text}</li>
                    </ul>)
            }
            <button className='btn'>Button</button>
        </div>
    )
}

export default PricingCard