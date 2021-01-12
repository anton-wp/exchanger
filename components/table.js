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
    if (data[index + 1]) {
      if (data[index].rate > data[index + 1].rate) {
        return <UpCircleOutlined style={{ color: 'green' }} />
      } else if (data[index].rate < data[index + 1].rate) {
        return <DownCircleOutlined style={{ color: 'red' }} />
      }
      else {
        return '-'
      }
    } else {
      return '-'
    }
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
