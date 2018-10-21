import * as React from "react"; import { Component } from "react";
import NewFolder from '../../modal/new-folder'
import TextEditor from '../../modal/text-editor'
import SharingSettings from '../../modal/sharing-settings'
import MoveFile from '../../modal/move-file'
import { isMobile } from '../../util'

type LocationBarProps = {
  path: any[],
  username: string,
  label: string,
  style: any,
  showFileOptions: boolean,
  onOptionClick: Function,
  extraOption: any,
  extraOptionProps: { [_:string]: any }
}

export default class LocationBar extends Component<any, any> {
  public defaultProps: LocationBarProps;
  
  componentWillMount () {
    this.setState({

    })
  }
  render() {
    const ExtraOption = this.props.extraOption || "";
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
                
                <TextEditor username={ this.props.username } path={ this.props.path } />
                <NewFolder username={ this.props.username } path={ this.props.path } />
                <MoveFile username={ this.props.username } path={ this.props.path } />
                <SharingSettings username={ this.props.username } path={ this.props.path } />
                {! isMobile() ? 
                  <ExtraOption { ...{filename: "", username: this.props.username} } />
      
                : "" } 

              </div>) : ""
            }
        </div>
    )
  }
}

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
