import {useEffect, useState} from "react";
import axios from "axios"

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [wallet, setWallet] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("https://api.coinpaprika.com/v1/tickers").then((res) => {
      setCoins(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading ...</strong> :
        <div>
          <label htmlFor="wallet">금액 입력 : </label>
          <input id={"wallet"} type="text" value={wallet} onChange={(e) => {
            setWallet(Number(e.target.value));
          }}/>
          <hr/>
          <select onChange={(e) => {
            setContent(e.target.value)
          }}>
            {coins.map((coin, index) =>
              <option key={index}
                      value={`${wallet / coin.quotes.USD.price} ${coin.symbol}`}> {coin.name} ({coin.symbol}) :
                ${coin.quotes.USD.price} USD </option>
            )}
          </select>
          <span> 현재 금액으로 구매할 수 있는 코인 : {content} </span>
        </div>}
    </>
  );
}

export default Coin;
