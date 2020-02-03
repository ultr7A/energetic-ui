import * as React from "react"; import { Component } from "react";
import { isMobile } from '../../util'

type LocationBarProps = {
  path: any[],
  username: string,
  label: string,
  style: any,
  showFileOptions: boolean,
  onOptionClick: Function
}

export class LocationBar extends Component<any, any> {
  public defaultProps: LocationBarProps;
  
  render() {
    return (
        <div style={{ ...styles.bar(), ...styles.mobile(), ...this.props.style}}>
          <div onClick={ e=> { this.props.onItemSelect(this.props.label, 0) } }
               style={styles.home as any}
          >
            <span style={{ marginRight: '0.3em' }}>
              { this.props.label }
            </span>
          </div>
            {
              this.props.path.map((opt: any, i: number) =>{
                return (
                  <div style={styles.option as any}
                       onClick={ e=> { this.props.onItemSelect(opt, i) } }
                       key={i}
                  >
                    { opt }/
                  </div>
                )
              })
            }
            { this.props.showFileOptions ? (
              <div style={styles.fileOptions( isMobile() ) as any}>
                { this.props.children }
              </div>) : ""
            }
        </div>
    )
  }
}


/* <TextEditor username={ this.props.username } path={ this.props.path } />
<NewFolder username={ this.props.username } path={ this.props.path } />
<MoveFile username={ this.props.username } path={ this.props.path } />
<SharingSettings username={ this.props.username } path={ this.props.path } /> */
let styles = {
  bar: () => {
    return {
      cursor: 'pointer',
      width: '100%',
      left: '0',
      top: '0',
      position: 'fixed',
      paddingLeft: '74px',
      marginTop: '0.2em',
      height: '48px',
      display: 'inline-block',
      marginRight: '0.5em',
      marginBottom: '1em'
    }
  },
  mobile: () => {
    return isMobile() ? {
      marginTop: '5em',
      paddingLeft: '0'
    } : { }
  },
  title: {
    width: '100%',
    height: '40px',
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  option: {
    fontSize: "20pt",
    display: 'inline-block',
    float: 'left',
    marginRight: '0.25em'
  },
  home: {
    fontSize: "20pt",
    display: 'inline-block',
    float: 'left',
    marginLeft: '1em'
  },
  fileOption: {
    padding: '1em',
    paddingBottom: 0,
    height: '48px',
    display: 'inline-block',
    width: 'auto'
  },
  fileOptions: (mobile: boolean) => {
    return mobile ? {
      position: 'fixed',
      right: '60px',
      bottom: '-14px',
      height: '60px',
      display: 'inline-block'
    } : {
      position: 'fixed',
      right: '60px',
      top: '14px',
      height: '60px',
      display: 'inline-block'
    }
  }
}
