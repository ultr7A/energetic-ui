import * as React from "react"; import { Component } from "react";
import FileButton from '../components/button/file-button'


class UploadFiles extends Component<any, any> {

  componentWillMount () {
    this.setState({
      activated: false
    })
  }

  componentWillReceiveProps ( nextProps: any) {

  }

  componentWillUpdate ( nextProps: any, nextState: any ) {

  }

  toggleModal () {

    this.setState({
      activated: !this.state.activated
    })

  }

  render() {

    if ( this.state.activated ) {

      return (
        <div style={ styles.modal as any } >

        </div>
      )

    } else {

      return (
        <FileButton title="Upload Files" onClick={ () => { this.toggleModal() } } />
      )

    }
    
  }
}


let styles = {
  button: {
    height: '32px',
    display: 'inline-block',
    marginLeft: '0.75em',
    background: 'rgba(255, 255, 255, 0.15)',
    textAlign: "center",
    borderRadius: '1.5px',
    boxShadow: '0 0.25em 0.5em 0px rgba(0, 0, 0, 0.3)'
  },
  modal: {
    width: '60%',
    maxWidth: '729px',
    minWidth: '320px',
    padding: '1em',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  }
}