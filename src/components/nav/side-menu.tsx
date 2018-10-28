import * as React from "react"; import { Component } from "react";
import { Tab } from './tab'
import { isMobile } from '../../util'

export interface SideMenuOption {
  title: string
  image?: string
  style?: any
  compact?: boolean
  clickHandler?: Function
  navigate?: {
    route: string
  }
}

export interface SideMenuProps {
  options: SideMenuOption[]
  toggleMenu?: (force?: boolean) => void,
  toggleVRMode?: () => void
}

export class SideMenu extends Component<SideMenuProps, any> {

  componentWillMount () {
    this.setState({
      menuHover: false
    })
  }

  toggleMenu ( force?: boolean ) {
    this.props.toggleMenu && this.props.toggleMenu(force)
  }

  toggleVRMode () {
      this.props.toggleVRMode && this.props.toggleVRMode()
  }

  navigate ( evt: any, url: string ) {
    this.context.history.push( url )
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

  private getClickHandler(option: SideMenuOption): Function {
    return option.navigate != undefined 
    ? (e: any) => {  this.navigate(e, (option as any).navigate.route) } 
    : option.clickHandler ? option.clickHandler : () => {}
  }

  render() {
    return (
        <div style={styles.sideMenu() as any} >
          <div style={styles.inner() as any} onMouseOver={ e=> this.onMouseOver(e) } onMouseOut={ e=> this.onMouseOut(e) }>
          { 
            this.props.options.map((opt: SideMenuOption) => (
              <Tab clickHandler={this.getClickHandler(opt)}
                  showTitle={ this.state.menuHover }
                  image={opt.image}
                  style={ styles.mobileHidden() }
                  compact={ isMobile() }
                  title={opt.title}
              />
            )) 
          }
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