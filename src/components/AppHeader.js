import { BellFilled, MailOutlined } from '@ant-design/icons'
import {Badge, Image , Space, Typography} from "antd"
function AppHeader () {
    return(
        <div className="AppHeader">
            <Image width = {40} src = 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'>
            </Image>
            <Typography.Title>Nandini's DashBoard</Typography.Title>
            <Space>
                <Badge count = {10} dot>
                <MailOutlined style = {{fontsize : 24}}/>
                </Badge>
                <Badge count = {10}>
                <BellFilled style={{fontSize: 24}}/>
                </Badge>
                </Space>

            </div>

    );
}

export default AppHeader;