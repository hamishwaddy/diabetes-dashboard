import React, { Fragment, Component } from 'react'
import moment from 'moment'

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import Background from '../../components/UI/Background/Background'
import SiteTitle from '../../components/SiteTitle/SiteTitle'
import PatientProfileCard from '../../components/PatientProfileCard/PatientProfileCard'
import CardContainer from '../../components/UI/Card/CardContainer/CardContainer'
import SidePanel from '../../components/UI/SidePanel/SidePanel'
import Chart from '../../components/Chart/Chart'

class Layout extends Component {
  state = {
    showSideDrawer: false,
    date: moment().format('ll')
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Fragment>
        <Background />
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <div className={classes.Wrapper}>
          <main
            className={classes.Content}>
            <div className={classes.SiteTitle}>
              <SiteTitle
                title="Blood Glucose Data" /* should dynamically load relevant page*/
                date={this.state.date} />
            </div>
            <div className={classes.Options}>
              <CardContainer />
            </div>
            <Chart
              className={classes.Chart} />
          </main>
          <div className={classes.Right}>
            <div className={classes.PatientProfileCard}>
              <PatientProfileCard />
            </div>
            <SidePanel
              Title="Side Panel One"
              Graphic="graphic" />
            <SidePanel
              Title="Side Panel Two"
              Graphic="graphic" />
          </div>
        </div>
      </Fragment>
    )
  }
}


export default Layout
