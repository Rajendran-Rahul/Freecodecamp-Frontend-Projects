import { useState, useEffect } from "react";
import "../quote-machine/styles.css";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const random = Math.floor(Math.random() * 999);
  const baseUrl = `https://dummyjson.com/quotes/${random}`;

  const getRandomQuote = async () => {
    const quote = await fetch(baseUrl).then((res) => res.json());
    setAuthor(quote.author);
    setQuote(quote.quote);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const handleNewQuote = () => {
    getRandomQuote();
  };

  return (
    <div className="quote-box">
      <p className="text">{quote}</p>
      <p className="author">- {author}</p>
      <div className="btn-container">
        <button className="btn-quote" onClick={handleNewQuote}>
          new quote
        </button>
      </div>
    </div>
  );
};

export default QuoteMachine;
