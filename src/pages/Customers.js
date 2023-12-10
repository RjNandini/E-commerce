import React from "react";
import { Typography, Space, Table } from "antd";
import { useState, useEffect } from "react";
import { getAllUsers } from "../API";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllUsers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Contact No.",
            dataIndex: "phone",
          },

          {
            title: "Username",
            dataIndex: "username",
          },
          {
            title: "Age",
            dataIndex: "age",
          },
          {
            title: "Gender",
            dataIndex: "gender",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
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

export default Customers;
