import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #1</CardTitle>
          <CardText>
            This was my first React project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #2</CardTitle>
          <CardText>
            This was my second React project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1) center / cover'}}>React Project #3</CardTitle>
          <CardText>
            This was my third React project
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Swift</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Java</h1></div>
      )
    }

  }



  render() {
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
      <Tab>React</Tab>
      <Tab>Swift</Tab>
      <Tab>Java</Tab>
      </Tabs>


      <Grid>
      <Cell col={12}>
      <div className="content">{this.toggleCategories()}</div>
      </Cell>
      </Grid>

      </div>
    )
  }
}

export default Projects;
