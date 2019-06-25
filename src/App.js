import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
         <Layout>
             <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '1.5em'}} to="/"
              >Danny Kim</Link>} scroll>
                 <Navigation>
                     <Link to="/aboutme" style={{fontWeight: 'bold', color: 'white'}}>About Me</Link>
                     <Link to="/projects"style={{fontWeight: 'bold', color: 'white'}}>Projects</Link>
                     <Link to="/contact"style={{fontWeight: 'bold', color: 'white'}}>Contact</Link>
                 </Navigation>
             </Header>
             <Drawer className="drawer-color"
              style={{background: '-webkit-linear-gradient(to left, #d7d2cc, #304352)',
              background: 'linear-gradient(to left, #d7d2cc, #304352)'}}
              title={<Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}} to="/">My Portfolio</Link>}>
                 <Navigation>
                   <Link to="/aboutme" style={{fontWeight: 'bold', color: 'white'}}>About Me</Link>
                   <Link to="/projects" style={{fontWeight: 'bold', color: 'white'}}>Projects</Link>
                   <Link to="/contact" style={{fontWeight: 'bold', color: 'white'}}>Contact</Link>
                 </Navigation>
             </Drawer>
             <Content>
                 <div className="page-content" />
                 <Main/>
             </Content>
         </Layout>
      </div>
    );
  }
}

export default App;
