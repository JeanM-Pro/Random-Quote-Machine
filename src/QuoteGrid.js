import React from 'react'



export const QuoteGrid = () => {

    const getQuote = async() => {

        const url = 'https://premium.zenquotes.io/?api_key=3aa82eba6124f19b05c9129523d4ca654711922c';
        const resp = await fetch( url );
        const data = await resp.json();


        console.log(data);
    }

    getQuote();



    return (
        <>
            
        </>
    )
}
