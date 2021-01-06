import InputBlock from '../components/inputBlock'
import InteractiveBlock from '../components/interactiveBlock'
import { useState } from 'react';
import { Switch } from 'antd';


export default function Home({ currency }) {
  const [base, setBase] = useState({ base_ccy: "UAH", ccy: "USD" })
  const [switchValue, setSwitchValue] = useState(false)

  const onChangeSwitch = (e) => {
    setSwitchValue(e)
  }


  return (
    <div className="container">
      <InputBlock currency={currency} base={base} setBase={(e) => setBase(e)} />
      <div style={{ margin: "20px 0px" }}>
        Table <Switch onChange={onChangeSwitch} checked={switchValue} /> Chart
      </div>
      {!['RUR', 'BTC'].includes(base.ccy) ? <InteractiveBlock base={base} switchValue={switchValue} /> : null}
      <style global jsx>{`
        .container {
          display: flex;
          justify-content: center;;
          flex-direction: column;
          margin: 100px 20px 0px;
          display:flex;
        }
        .d-flex{
          display: flex;
        }
        .d-i-block{
          display: inline-block;
        }
        .justify-content-center{
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
Home.getInitialProps = async () => {

  const data = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  const json = await data.json()

  return { currency: json }
}
