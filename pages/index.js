import InputBlock from '../components/inputBlock'
import InteractiveBlock from '../components/interactiveBlock'
import { BASE_URL } from '../components/const'
import { useState } from 'react';

export default function Home({ currency }) {
  const [base, setBase] = useState({ ...currency[0] })


  return (
    <div className="container">
      <InputBlock currency={currency} base={base} setBase={(e) => setBase(e)} />
      <InteractiveBlock base={base} />
    </div>
  )
}
Home.getInitialProps = async () => {
  const data = await fetch(`${BASE_URL}?json`)
  const json = await data.json()
  return { currency: json }
}
