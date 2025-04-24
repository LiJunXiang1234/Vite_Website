import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu} from 'antd';
import './AntdLayout.css'
import REVALORIS_Logo from '../components/orangeComponents/ICON/REVALORIS_Logo_Wihte.svg'
import OrangeComponents_up_bar from '../components/orangeComponents/OrangeComponents_up_bar';
import Revaloris_Begin from '../pages/Revaloris_Begin';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('开始分选', '1', <PieChartOutlined />),
  getItem('监控画面', '2', <DesktopOutlined />),
  getItem('历史数据', '3', <DesktopOutlined />),
  getItem('校正光谱', '4', <DesktopOutlined />),
  getItem('文件管理', '5', <DesktopOutlined />),
  getItem('数据采集', '6', <DesktopOutlined />),
  getItem('基础设置', '7', <DesktopOutlined />),
];



const AntdLayout = () => {
  return (
    <Layout className='topLayout' style={{ minHeight: '100vh' }}>
      <Sider className='orangeClassification_Sider' >
        <div className="demo-logo-vertical">
          <img className='revaloris_Logo' src={REVALORIS_Logo}/>
        </div>
        <Menu theme="dark" className='orangeClassification_Menu' defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header className='orangeClassification_Header'><OrangeComponents_up_bar /></Header>
        <Content style={{ margin: '16px 16px' }}>
          <div className='contentDiv'>
            <Revaloris_Begin />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AntdLayout;