import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.less';
import config from './config';


export default class Menu extends React.Component {
  //左边栏目缩展
  expand() {
    const $body = $('body');
    const $win = $(window);
    $body.toggleClass('unexpand');
    $win.trigger('resize');
  }
  //左边菜单跳转
  menusTpl(menus) {
    return (
      menus.map(item => (
        <NavLink key={item.name}
          exact activeClassName={styles['current']}
          replace to={item.to}>
          <i className={`iconfont ${item.icon}`} />{item.name}
        </NavLink>
      ))
    )
  }
  render() {
    return (
      <div className={styles['menu']} id="Menu">
        {this.menusTpl(config.topMenus)}
        <div className={styles['setting-other-wrap']}>
          <div className={styles['setting-expand']}><i className="fa fa-fw fa-chevron-left" onClick={this.expand.bind(this)} />></div>
          {this.menusTpl(config.bottomMenus)}
        </div>
      </div>
    );
  }
}

