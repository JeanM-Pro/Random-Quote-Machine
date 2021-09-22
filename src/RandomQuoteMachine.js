import React, {useState} from 'react'
import {Quote} from './Quote'

export const RandomQuoteMachine = () => {
    const [quoteIndex, setQuoteIndex] = useState()
    const quotes = [{id: 1, quote: 'mamalo', autor: 'chavez'},{id: 1, quote: 'ajshdkahsjdkasj', autor: 'chavez'}]

    const randomNumber = () => {
        return Math.floor(Math.random()* quotes.length)
    }

    return (
        <div id="quote-box">
            {quoteIndex && <Quote quote={quotes[quoteIndex ]}/> }
            <button onClick ={() =>setQuoteIndex(randomNumber)}>Get new quote</button> 
        </div>
    )
}
