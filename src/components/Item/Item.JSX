import React from 'react'

const Item = (props) => {

    console.log(props.product)

    return (
            <div className='mx-2'>
                <div className=''>

                    <h3 className='card-title'>{props.product.name}</h3>
                    <img src={props.product.img} alt='pc' width={200}/>
                    <span className='card-subtitle'>$ {props.product.price}</span>
                </div>
            </div>

    )

}   
export default item