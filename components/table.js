import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';

export default function Tables({ data, loading }) {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'exchangedate',
    },
    {
      title: 'Name',
      dataIndex: 'cc',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
    },
    {
      title: '',
      dataIndex: 'exchangedate',
      render: index => <a>{data.length > 0 ? getIndex(index) : '-'}</a>,
    },
  ];
  const getIndex = (items) => {
    const index = data.findIndex(item => item.exchangedate === items);
    let rateStatus = '-';
    const nextRate = (data[index + 1] || {}).rate;
    const currentRate = data[index].rate;
    if (!nextRate || nextRate === currentRate) {
      return rateStatus;
    }

    if (currentRate > nextRate) {
      rateStatus = <UpCircleOutlined style={{ color: 'green' }} />
    } else {
      rateStatus = <DownCircleOutlined style={{ color: 'red' }} />
    }

    return rateStatus;
  }
  return (
    <Table
      rowKey="exchangedate"
      columns={columns}
      dataSource={data}
      loading={loading}
    />
  )
}
