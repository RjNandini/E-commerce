// import { Typography } from "antd";

// function Orders(){
//     return(
// <div>
//     <Typography.Text>Orders</Typography.Text>
// </div>
//     );

// }
// export default Orders;

import React from "react";
import { Typography, Space, Table } from "antd";
import { useState, useEffect } from "react";
import { getOrdersPage } from "../API";
function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    getOrdersPage().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>INR {value}</span>,
          },
          {
            title: "Discounted Price",
            dataIndex: "discountedPrice",
            render: (value) => <span>INR {value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },

          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;