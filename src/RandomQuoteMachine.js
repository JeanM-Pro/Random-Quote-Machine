import React, {useState} from 'react'
import { quotesList} from './Data';


const RandomQuoteMachine = () => {

    
    const [ quote, setQuote ] = useState(quotesList[Math.floor( Math.random() * quotesList.length )]);
    

    const getQuote = () => {

        setQuote(quotesList[Math.floor( Math.random() * quotesList.length )]);
        
        
    }

    return (
        <div className='content'>
            <div id='quote-box'>
                <div id='text'> "{quote.quote}".</div>
                <div id='author'>- {quote.author}.</div>
                <div className='footer-box'>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.quote}.    ${quote.author}`)}`} target='_blank' id='tweet-quote' rel="noreferrer"><img src="https://i.ibb.co/Fg89DcG/twitter-logo.jpg" alt="twitter-logo" border="0" className='logo-twitter'></img></a>
                    <button id='new-quote' onClick= {getQuote} >New Quote</button>
                </div>
            </div>
        </div>
    )
}




export default RandomQuoteMachine;
