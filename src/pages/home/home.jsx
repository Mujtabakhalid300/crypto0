import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

function Home() {
  useEffect(() => {
    axios
      .get(
        "https://isnt-mujtabakhalid300-awesome.netlify.app/.netlify/functions/source"
      )
      .then((res) => {
        setArray(res.data.data);
        setLoading(true);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <div>
          <h1>crypto currencies</h1>
          <div className="table-container">
            <table className="table1" border="1">
              <tr>
                <td className="hide">Coin Name</td>
                <td>Symbol</td>
                <td>Current Price(USD)</td>
                <td>Percentage Change(24H)</td>
              </tr>
              {array.map((coin) => (
                <tr key={coin.id}>
                  <td className="hide">{coin.name}</td>
                  <td>{coin.symbol}</td>
                  <td>{coin.quote.USD.price}</td>
                  <td>{coin.quote.USD.percent_change_24h}%</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <h1>LOADING PRICES</h1>
      )}
    </>
  );
}

export default Home;
