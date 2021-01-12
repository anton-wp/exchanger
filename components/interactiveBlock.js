import Tables from './table'
import Chart from './chart'
import { BASE_URL } from './const'
import { useState, useEffect } from 'react';
import { Switch, Select, Spin } from 'antd';

const timeIntervals = [7, 14, 20, 30, 120]

export default function InteractiveBlock({ base }) {
  const { Option } = Select;
  const [data, setData] = useState([])
  const [date, setDate] = useState([])
  const [loading, setLoading] = useState(false)
  const [switchValue, setSwitchValue] = useState(false)
  const [period, setPeriod] = useState(null)

  useEffect(() => {
    updateDate(timeIntervals[0])
  }, []);

  useEffect(async () => {
    let exp = []
    setLoading(true)
    for (const item of date) {
      const res = await fetch(`${BASE_URL}?valcode=${base.cc}&date=${item}&json`)
      const json = await res.json()
      exp.push(json[0])
    }
    setData(exp)
    setLoading(false)
  }, [base, date])

  const updateDate = (e) => {
    setPeriod(e)
    const dates = []
    for (let i = 0; i < e; i++) {
      const day = new Date(new Date().getTime() - i * 86400000).toISOString().slice(0, 10).replace(/-/gi, '')
      dates.push(day)
    }
    setDate(dates.reverse())
  }
  return (
    <>
      <div className="mx-20 d-flex justify-content-s-b">
        <div>
          Table <Switch onChange={e => setSwitchValue(e)} checked={switchValue} /> Chart
        </div>
        <Select value={period} onChange={e => updateDate(e)}>
          {timeIntervals.map((item, index) => (
            <Option key={index} value={item}>{item}</Option>
          ))}
        </Select>

      </div>
      {!switchValue ? <Tables data={data} loading={loading} /> :
        (!loading ? <Chart data={data} date={date} base={base} /> : <Spin size="large" />)}
    </>
  )
}
