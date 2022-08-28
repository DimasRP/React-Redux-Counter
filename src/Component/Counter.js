import React from 'react'
import CounterAction from './CounterAction'
import CounterResult from './CounterResult'

const Counter = () =>{
    return(
        <div className='counter'>
            <CounterResult/>
            <CounterAction/>
        </div>
    )
}

export default Counter