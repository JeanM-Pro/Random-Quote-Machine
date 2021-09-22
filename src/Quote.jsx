import React from 'react'

export const Quote = ({quote}) => {
    return (<div className="box">
        <div>{quote.quote}</div>
        <div>{quote.author}</div>
    </div>)
}