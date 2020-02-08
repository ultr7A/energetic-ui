/* General shell / dashboard UI */
import * as React from "react"; import { Component } from "react";

import { shellStyles } from '../../styles'
interface ShellProps {
  dispatch?: (action: any) => void
  sideMenu?: any,
  cwd?: any[]
  currentSpace?: string
  worldUser?: string
  username?: string
  reactPath?: string
  users?: any[]
  listFiles?: Function
  sendMessage?: Function
  toggleMenu?: Function
  onDropFiles?: Function
  noBackground?: boolean
  stereoMode?: boolean
  htmlClassName?: string
  innerStyle?: any
  data?: any
  hasMenu?: boolean
  menuOnly?: boolean
  menuOpen?: boolean
}

export class Shell extends Component<ShellProps, any> {

  constructor(props: ShellProps) {
    super(props);

    this.state = {
      droppingFile: false
    }
  }

  static get defaultProps () {
    return {
      noBackground: false,
      htmlClassName: "",
      innerStyle: {},
      data: {}
    }
  }

  public className: string

  componentDidMount () {
    this.setState({
      droppingFile: false
    });
  }

  setDropBackground (mode: boolean) {
    this.setState({
      droppingFile: mode
    });
  }

  render() {
    let hasMenu = !!this.props.hasMenu,
        menuOnly = !!this.props.menuOnly,
        menuOpen = !!this.props.menuOpen,
        noBackground = !!this.props.noBackground;
    const SideMenu = this.props.sideMenu;
    return (
        <div style={shellStyles.shell(hasMenu, menuOpen, menuOnly, noBackground, this.state.droppingFile) as any}
            onDrop={e=> {
              e.stopPropagation()
              e.preventDefault()
              this.props.onDropFiles && this.props.onDropFiles((e.target as any).files || e.dataTransfer.files);
              this.setDropBackground(false)
            }}
            onDragEnter={e=>{  e.preventDefault(); e.stopPropagation(); this.setDropBackground(true) }}
            onDragOver={e=> {  e.preventDefault(); e.stopPropagation(); }}
            onDragLeave={e=>{  e.preventDefault(); e.stopPropagation(); this.setDropBackground(false) }}
            onClick={e=> {
              if ((e.target as any).getAttribute('id') == 'shell') {
                this.props.toggleMenu && this.props.toggleMenu(true)
              }
            }}
            className={ this.props.htmlClassName || 'shell' }
            id='shell'
        >
          
            {hasMenu ? <SideMenu /> : ''}
            {menuOnly ? '' : (
              <div style={{ ...shellStyles.inner(), ...this.props.innerStyle} as any}>
                  {this.props.children}
              </div>
            )}
        </div>
    )
  }
}