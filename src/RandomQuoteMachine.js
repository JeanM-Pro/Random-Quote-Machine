import React from 'react'

export default function RandomQuoteMachine() {
    return (
        <div className='content'>
            <div id='quote-box'>
                <div id='text'>Chavez Mamonazo</div>
                <div id='author'>Jean Centeno</div>
                <div className='footer-box'>
                    <a href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'><img src="https://i.ibb.co/Fg89DcG/twitter-logo.jpg" alt="twitter-logo" border="0" className='logo-twitter'></img></a>
                    <button id='new-quote'>New Quote</button>
                </div>
            </div>
        </div>
    )
}
