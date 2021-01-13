import InputBlock from '../components/inputBlock'
import InteractiveBlock from '../components/interactiveBlock'
import { initializeStore } from '../store'
import { fetchCurrency } from '../redux/actions'

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

export async function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore
  await dispatch(fetchCurrency())
  return { props: { initialReduxState: reduxStore.getState() } }
}
