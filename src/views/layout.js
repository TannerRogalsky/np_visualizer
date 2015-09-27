import React from 'react';
import {Link} from 'react-router'
import {Row, Col} from 'react-bootstrap';

const Layout = React.createClass({
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <ol className="breadcrumb">
            <li><Link to='/'>Home</Link></li>
            <li><Link to={'/'}>Game</Link></li>
            <li className="active">Tick</li>
          </ol>
        </nav>
        <div className='container-fluid'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Layout;
