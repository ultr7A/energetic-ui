import * as React from "react"; import { Component } from "react";

import { 
  textAreaStyle,
  lightboxStyle, 
  modalStyle,
} from '../../styles'
import {rgba, isMobile} from '../../util'

export class SharingSettings extends Component<any, any> {

  componentWillMount () {

    this.setState({
      activated: false,
      editMode: false,
      id: 0
    })
  }

  componentWillReceiveProps ( nextProps: any) {
    if ( this.props.activated == false && nextProps.activated == true ) {
        this.setState({
            activated: true
        });
    } else if (this.props.activated && nextProps.activated == false) {
        this.setState({
            activated: false
        });
    }

  }

  toggleModal () {
    this.setState({
      activated: !this.state.activated
    })
  }

  render() {
    if ( this.state.activated ) {
      return (
       <div style={ styles.lightbox as any }>
          <div style={ styles.modal() as any } >
            { this.props.children }
          </div>
        </div>
      )
    } else {
      return (
        <span></span>
      )
    }
  }
}

let styles = {
  modal: () => {
    return { ...modalStyle(isMobile()), ...{
        maxWidth: '729px',
        left: ! isMobile() ? '72px' : '0px'
      }}
  },
  lightbox: lightboxStyle,
  resultingPath: {
    marginBottom: '1em'
  },
  cancelButton: {
    borderLeft: 'solid 0.2em #005aff'
  },
  header: {
    width: '100%',
    marginTop: '0.5em',
    marginBotto: '0.5em'
  },
  text: {
    width: '75%',
    padding: '0.25em',
    marginBottom: '0.5em',
    background: '#212121',
    border: 'solid 0.1em'+ rgba(255, 255, 255, 0.19),
    borderRadius: '2px',
    fontSize: '1em',
    color: 'white',
  },
  textArea: textAreaStyle,
  body: {

  },
  title: {

  }
}