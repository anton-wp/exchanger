import { InputNumber, Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBase } from '../redux/actions'

export default function InputBlock() {
  const currency = useSelector(state => state.exchanger.exchanger)
  const base = useSelector(state => state.exchanger.base)
  const dispatch = useDispatch();

  const { Option } = Select;
  const baseValue = "UAH";
  const [result, setResult] = useState(1)
  const [summ, setSumm] = useState(1)

  function handleChange(value) {
    dispatch(setBase(currency.find(item => item.cc === value)))
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
          <Select
            showSearch
            className="w-80p"
            defaultValue={base.cc}
            onChange={handleChange}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
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


