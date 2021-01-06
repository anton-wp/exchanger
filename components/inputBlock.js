import { InputNumber, Select } from 'antd';
import { useState, useEffect } from 'react';


export default function InputBlock({ currency, base, setBase }) {
    const { Option } = Select;
    const selectType = ['buy', 'sale']
    const [result, setResult] = useState(1)

    // const [base, setBase] = useState({ base_ccy: "UAH" })
    const [typeChange, setTypeChange] = useState(selectType[0])
    const [summ, setSumm] = useState(1)


    function handleChange(value) {
        setBase(currency.find(item => item.ccy === value))
    }
    const onChangeSumm = (value) => {
        setSumm(value)
    }
    const updateSumm = () => {
        if (typeof summ === 'number' && base[typeChange]) {
            setResult(summ * base[typeChange])
        }
    }

    useEffect(async () => {
        // if (currency.length === 0) {
        // const data = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
        // setCurrency(await data.json());

        updateSumm()

    }, [base, typeChange, summ])

    return (
        <div className="d-flex justify-content-center" style={{ margin: "20px 0px" }}>
            <div className="d-i-block">
                <Select defaultValue={currency[0].ccy} style={{ width: 120 }} onChange={handleChange}>
                    {currency.map((item, index) => (
                        <Option key={index} value={item.ccy}>{item.ccy}</Option>
                    ))}
                </Select>
                <Select value={base.base_ccy} style={{ width: 120 }} disabled>
                    {/* <Option value='UAH'>UAH</Option> */}
                </Select>
                <Select value={typeChange} style={{ width: 120 }} onChange={(value) => setTypeChange(value)}>
                    {selectType.map((item, index) => (
                        <Option key={index} value={item}>{item}</Option>
                    ))}
                </Select>
            </div>
            <div className="d-i-block">
                <InputNumber value={summ} onChange={onChangeSumm} />
                <InputNumber value={result} step={0.01} disabled={true} />
            </div>
        </div>
    )
}


