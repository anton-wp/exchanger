import InputBlock from '../components/inputBlock'
import InteractiveBlock from '../components/interactiveBlock'
import { BASE_URL } from '../components/const'

import { BankOutlined } from '@ant-design/icons';

export default function Home() {
  return (
    <>
      <div className="menu">
        <BankOutlined className="logo" />
      </div>
      <div className="container">
        <InputBlock />
        <InteractiveBlock />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetch(`${BASE_URL}?json`)
  const json = await data.json()
  return {
    props:
    {
      initialReduxState: {
        exchanger:
        {
          exchanger: json,
          base: json[0]
        }
      }
    }
  }
}
