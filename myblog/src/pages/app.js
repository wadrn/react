import React from 'react';
import ReactDOM from 'react-dom';
import {Route,IndexRoute,Link} from 'react-router';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:false,
        }
        this.onCollapse = this.onCollapse.bind(this);
    };
    onCollapse(collapsed){
      console.log(collapsed);
      this.setState({
           collapsed:collapsed
       });
    };

    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span><Link to='/'>Home</Link></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span><Link to='/about'>About</Link></span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span><Link to='/projects'>Projects</Link></span></span>}
              >
                <Menu.Item key="3"><Link to='/projects/node'>Node</Link></Menu.Item>
                <Menu.Item key="4">Vue</Menu.Item>
                <Menu.Item key="5">React</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
              <Breadcrumb style={{ margin: '12px 16px' }} routes={this.props.routes} params={this.props.params}/>
            <Content style={{ margin: '0px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              @Doreen 2017
            </Footer>
          </Layout>
        </Layout>
      );
    }
}
