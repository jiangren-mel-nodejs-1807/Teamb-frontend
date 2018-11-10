import React, { Component } from 'react';
import NavLink from '../../navigation/NavLink';
import '../../navigation/navi.scss'
import logo from '../../assets/logo.png'

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Head extends Component{

    state = {
        current: 'mail',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }


    render()
    {
        return(

            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Icon type="mail" />Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore" />Navigation Two
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>
            </Menu>

            // {/*<header className='header'>*/}
            //     {/*<div className='logo'>*/}
            //         {/*<img src={ logo } />*/}
            //         {/*<h1>LMS</h1>*/}
            //     {/*</div>*/}
            //         {/*<ul className='nav-menu'>*/}
            //             {/*<NavLink to="/home">Home</NavLink>*/}
            //             {/*<NavLink to="/course">Course</NavLink>*/}
            //             {/*<NavLink to="/student">Student</NavLink>*/}
            //             {/*<NavLink to="/lecturer">Lecturer</NavLink>*/}
            //         {/*</ul>*/}
            //
            // {/*</header>*/}
        )
    }


}