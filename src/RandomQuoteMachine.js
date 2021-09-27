import React, {useState} from 'react'




const RandomQuoteMachine = () => {

    const quotesList = ['Chavez mamonazo', 'Maduro Mamador', 'Diosadado Mordelon'];

    // const quote = quotesList[Math.floor( Math.random() * quotesList.length )];

    const [ quote, setQuote ] = useState(quotesList[Math.floor( Math.random() * quotesList.length )]);

    const getQuote = () => {

        setQuote(quotesList[Math.floor( Math.random() * quotesList.length )]);

    }

    return (
        <div className='content'>
            <div id='quote-box'>
                <div id='text'> {quote} </div>
                <div id='author'>Jean Centeno</div>
                <div className='footer-box'>
                    <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'><img src="https://i.ibb.co/Fg89DcG/twitter-logo.jpg" alt="twitter-logo" border="0" className='logo-twitter'></img></a>
                    <button id='new-quote' onClick= {getQuote} >New Quote</button>
                </div>
            </div>
        </div>
    )
}




export default RandomQuoteMachine;
