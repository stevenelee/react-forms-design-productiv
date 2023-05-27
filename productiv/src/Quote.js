import React, { useState,  } from "react";
import axios from "axios";
import "./Quote.css"

function Quote() {
  const [quote, setQuote] = useState(null);

  /** Retrieve a quote from the API
   * Return the quote data
   */
  async function getQuote () {
    const quoteResponse = await axios.get(
      "https://inspo-quotes-api.herokuapp.com/quotes/random"
      );

    console.log("quote =", quoteResponse)
    setQuote(quoteResponse.data.quote);
  }

  return (
    <div>
      {quote
        ?
        (<div className="quote-btn-container">
          <p><i>{quote.text} - {quote.author}</i></p>
          <button className="quote-btn" onClick={getQuote}>Nü quøte</button>
        </div>)
        :
        (<div className="quote-btn-container">
          <button className="quote-btn" onClick={getQuote}>Ïnspiration!</button>
        </div>)
      }
    </div>
  )
}

export default Quote;