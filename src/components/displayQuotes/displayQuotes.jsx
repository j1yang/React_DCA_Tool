import React from 'react';
import DisplayQuote from '../displayQuote/displayQuote';
import styles from './displayQuotes.module.css';
const DisplayQuotes = ({quotes}) => {

  const refreshPage = ()=>{
    window.location.reload();
  }
  return(
    <section className={styles.coin_tracker}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Market Live</h2>
        <div className={styles.btnRefresh} onClick={ refreshPage } >
        <i
          class="fa-solid fa-arrows-rotate">
        </i>
        </div>
      </div>
      <ul className={styles.quotes}>
        <div className={styles.category}>
          <li className={styles.name}>Name</li>
          <li className={styles.symbol}>Symbol</li>
          <li className={styles.price}>Price</li>
          <li className={styles.priceChange}>24h</li>
        </div>
        {quotes.map(quote => (
          <DisplayQuote coin={quote}/>
        ))}
      </ul>
    </section>
  );
};

export default DisplayQuotes;