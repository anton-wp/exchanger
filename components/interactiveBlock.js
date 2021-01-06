import Tables from './table'
import Chart from './chart'

import { useState, useEffect } from 'react';




const date = [
    '20200311',
    '20200310',
    '20200309',
    '20200308',
    '20200307',
    '20200306',
    '20200305',
    '20200304',
    '20200303',
    '20200302',
    '20200301',
]

export default function InteractiveBlock({ base, switchValue }) {
    const [data, setData] = useState([])





    useEffect(async () => {
        let exp = []
        for (const item of date) {
            const res = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${base.ccy}&date=${item}&json`)
            const json = await res.json()
            exp.push(json[0])
        }
        setData(exp)
    }, [base])
    return (
        <>
            {!switchValue ? <Tables data={data} /> :
                <Chart data={data} date={date} base={base} />}
        </>
    )
}