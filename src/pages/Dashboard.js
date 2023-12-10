import { Card, Space, Statistic, Typography ,Table} from "antd";
import {useState , useEffect} from 'react';
import {getOrders,getRevenue , getInventory , getAllUsers}  from "../API";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,   
  DollarCircleOutlined
} from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const[orders, setOrders] = useState(0);
  const[inventory, setInventory] = useState(0);
  const[customers, setCustomers] = useState(0);
  const[revenue, setRevenue] = useState(0);
  useEffect(()=>{
    getOrders().then((res)=>
    {
    setOrders(res.total);
    setRevenue(res.discountedTotal);
    });
    getInventory().then((res)=>
    {
    setInventory(res.total);
    });
    getAllUsers().then((res)=>
    { 
    setCustomers(res.total);
    });
    },[]);
  return (
    <div>
      <Space size={20} direction='vertical' >
      <Typography.Title level={4}>DashBoard</Typography.Title>
      <Space size ={20}>
        <DashboardCard
          title={"Orders"}
          icon={<ShoppingCartOutlined  style={{
            color:'green', 
            backgroundColor:'rgba(0,255,0,0.25)', 
            borderRadius:20, 
            fontSize: 24,
            padding: 8}}/>}
          value={orders}
        ></DashboardCard>
        <DashboardCard
          title={"Inventory"}
          icon={<ShoppingOutlined style={{
            color:'purple', 
            backgroundColor:'rgba(0,255,255,0.25)', 
            borderRadius:20, 
            fontSize: 24,
            padding: 8,
            }}/>}
          value={inventory}
        ></DashboardCard>
        <DashboardCard
          title={"Customers"}
          icon={<UserOutlined style={{
            color:'red', 
            backgroundColor:'rgba(255,0,0,0.25)', 
            borderRadius:20, 
            fontSize: 24,
            padding: 8,
            }} />}
          value={customers}
        ></DashboardCard>
        <DashboardCard
          title={"Revenue"}
          icon={<DollarCircleOutlined style={{
            color:'blue', 
            backgroundColor:'rgba(0,0,255,0.25)', 
            borderRadius:20, 
            fontSize: 24,
            padding: 8,
            }}/>}
          value={revenue}
        ></DashboardCard>
      </Space>
     < Space>  
  <RecentOrders />
  <DashboardChart/>

</Space>
     
      </Space>
      

    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <div>
      <Card>
        <Space>
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </div>
  );
  }



  function RecentOrders(){
    const[dataSource, setDataSource] = useState([]);
    const[loading, setLoading] = useState(false);
    
  useEffect(()=>{
  setLoading(true)
  getOrders().then(res=>{
    setDataSource(res.products.splice(0,3));
    setLoading(false);
  });
    },[]);
  
    return(
      <>
      <Typography.Text>Recent Orders</Typography.Text>
    <Table
    columns= {[{
  title: 'Title',
  dataIndex: 'title'
    },{
      title: 'Quantity',
      dataIndex: 'quantity'
        },
        {
          title: 'Price',
          dataIndex: 'discountedPrice'
            },
  ]}
  loading={loading}
  dataSource={dataSource}
  pagination={true}
    ></Table>
      </>
  
  );}

  function DashboardChart(){
    const[revenueData, setRevenueData] = useState({
      labels:[],
      datasets:[],
    })
    useEffect(()=>{
  getRevenue().then(res=>{
    const labels = res.carts.map((cart)=>{
      return `User-${cart.userId}`
    });
    const data = res.carts.map((cart)=>{
      return cart.discountedTotal;
    });
  const dataSource =  {
      labels,
      datasets: [
        {
          label: 'Revenue',
          data: data,
          backgroundColor: 'rgba(255, 0, 0, 1)',
        },
      ],
    };
  setRevenueData(dataSource);
  });
    },[])
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Order revenue',
        },
      },
    };
   
    return (
    <Card style={{width: 500, height: 350}}>
      <Bar options={options} data={revenueData} />
    </Card>
    );
  };
  
export default Dashboard;
