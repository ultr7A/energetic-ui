import * as React from "react"; import { Component } from "react";
import Tab from './tab'
import { isMobile } from '../../util'

export default class SideMenu extends Component<any, any> {

  componentWillMount () {
    this.setState({
      menuHover: false
    })
  }

  toggleMenu ( force?: boolean ) {
      this.props.toggleMenu(force)
  }

  toggleVRMode () {
      this.props.toggleVRMode()
  }

  navigate ( evt: any, url: string ) {
    this.props.history.push( url )
  }

  onMouseOver ( evt: any ) {
    this.setState({
      menuHover: ! isMobile()
    })
  }

  onMouseOut ( evt: any ) {
    this.setState({
      menuHover: false
    })
  }

  render() {
    return (
        <div style={styles.sideMenu() as any} >
          <div style={styles.inner() as any} onMouseOver={ e=> this.onMouseOver(e) } onMouseOut={ e=> this.onMouseOut(e) }>
            <Tab clickHandler={ (e: any) => { this.toggleMenu(); this.navigate(e, "");  } }
                 image="/data/images/convolvr2.png"
                 buttonStyle={{ backgroundSize: "100%" }}
                 showTitle={ false }
                 compact={ isMobile() }
                 title="Home"
            /> 
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/new-world") } }
                 showTitle={ this.state.menuHover }
                 image="/data/images/plus.png"
                 title="New"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/spaces") }}  
                 image="/data/images/circle-a.png"
                 showTitle={ this.state.menuHover }
                 compact={ isMobile() }
                 title="Spaces"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/places") }}
                 showTitle={ this.state.menuHover }
                 image="/data/images/places-s.png"
                 style={ styles.mobileHidden() }
                 compact={ isMobile() }
                 title="Places"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/inventory") } }
                 showTitle={ this.state.menuHover }
                 image="/data/images/entities.png"
                 compact={ isMobile() }
                 title="Inventory"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/chat") } }
                 showTitle={ this.state.menuHover }
                 image="/data/images/chat.png"
                 compact={ isMobile() }
                 title="Chat"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/files") }}
                 showTitle={ this.state.menuHover }
                 image="/data/images/voxel-white.png"
                 compact={ isMobile() }
                 title="Data"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/network") }}
                 showTitle={ this.state.menuHover }
                 image="/data/images/network.png"
                 style={ styles.mobileHidden() }
                 compact={ isMobile() }
                 title="Network"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/profile") } }
                 showTitle={ this.state.menuHover }
                 image="/data/images/person-s2.png"
                 compact={ isMobile() }
                 style={ styles.mobileHidden() }
                 title="Profile"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/login") } }
                 showTitle={ this.state.menuHover }
                 title="Sign In"
                 style={ styles.mobileHidden() }
                 compact={ isMobile() }
                 image="/data/images/logout.png"
            />
            <Tab clickHandler={ (e: any) => { this.navigate(e, "/settings") } }
                 image="/data/images/configure-h.png"
                 showTitle={ this.state.menuHover }
                 compact={ isMobile() }
                 title="Settings"
                 
            />
          </div>
        </div>
    )
  }
}

let styles = {
  sideMenu: () => {
    let mobile = isMobile()
    return {
      width: mobile ? '100vw' : '72px',
      //maxWidth: mobile ? '100vw' : '72px',
      height: mobile ? '72px' : '100vh',
      backgroundColor: 'rgb(2, 0, 3)',
      overflow: 'hidden'
    }
  },
  inner: () => {
    let mobile = isMobile()
    return {
      height: mobile ? '72px' : '100vh',
      bottom: 0,
      width: mobile ? '100vw' : '72px',
      paddingTop: '7px'
    }
  },
  mobileHidden: () => {
    let mobile = isMobile()
    return {
      display: mobile ? 'none' : 'inline-block'
    }
  }
}