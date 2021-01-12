import { InputNumber, Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

export default function InputBlock({ currency, base, setBase }) {
  const { Option } = Select;
  const baseValue = "UAH";
  const [result, setResult] = useState(1)
  const [summ, setSumm] = useState(1)

  function handleChange(value) {
    setBase(currency.find(item => item.cc === value))
  }
  const onChangeSumm = (value) => {
    setSumm(value)
  }
  const updateSumm = () => {
    if (typeof summ === 'number' && base.rate) {
      setResult(summ * base.rate)
    }
  }

  useEffect(async () => {
    updateSumm()
  }, [base, summ])

  return (
    <div className="wrap-flex mx-20">
      <div className="d-flex justify-content-center w-100">
        <div className="d-flex w-100 mw-300 justify-content-s-a align-items-center mx-20">
          <Select defaultValue={currency[0].cc} onChange={handleChange}>
            {currency.map((item, index) => (
              <Option key={index} value={item.cc}>{item.cc}</Option>
            ))}
          </Select>
          <ArrowRightOutlined />
          <Select value={baseValue} disabled>
          </Select>
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <div className="d-flex w-100 mw-300 justify-content-s-a align-items-center mx-20">
          <InputNumber value={summ} onChange={onChangeSumm} />
          <ArrowRightOutlined />
          <InputNumber value={result} step={0.01} disabled={true} />
        </div>
      </div>
    </div>
  )
}


