import * as React from "react"; import { Component } from "react";
import { FileButton } from '../components/button/file-button'
import { isMobile } from '../util'
import { 
  textAreaStyle,
  lightboxStyle, 
  modalStyle 
} from '../styles'
import {
  rgba,
  rgb
} from '../util'

export class TextEditor extends Component<any, any> {



  componentWillMount () {

    this.setState({
      activated: false,
      text: "",
      name: ""
    })

    if ( !!this.props.fileURL ) {

      this.props.readText( this.props.fileURL, this.props.username, this.props.cwd.join("/") )

    }
    
  }

  componentWillReceiveProps ( nextProps: any) {

    if ( this.props.readTextFetching && nextProps.readTextFetching == false && !!nextProps.textData ) {

      this.setState({
        text: nextProps.textData.text
      })

    }

    if ( this.props.filename != nextProps.filename || this.props.dir != nextProps.dir ) {

      if ( nextProps.dir != "" && nextProps.filename != "" ) {
        this.props.readText( nextProps.filename, nextProps.fileUser, nextProps.dir )
        this.setState({
          name: nextProps.filename
        })
      }

    }

    if ( this.props.activated == false && nextProps.activated == true ) {
      this.setState({
        activated: true
      })
    }

    if ( this.props.writeTextFetching && nextProps.writeTextFetching == false ) {
      this.props.listFiles( nextProps.username, nextProps.cwd.join("/") )
    }
  }

  componentWillUpdate ( nextProps: any, nextState: any ) {

  }

  handleTextChange(e: any) {
    this.setState({
      name: e.target.value
    })
  }

  handleTextArea(e: any) {
    this.setState({
      text: e.target.value
    })
  }

  save () {

    let name = this.state.name,
        dir = this.props.activated ? this.props.dir : this.props.cwd.join("/") 

    if ( name != "" ) {
      this.props.writeText( this.state.text, name, this.props.fileUser || this.props.username, dir )
      this.toggleModal()
    } else {
      alert("Name is required.")
    }
  }

  toggleModal () {
    this.props.closeTextEdit()
    this.setState({
      activated: !this.state.activated
    })
  }

  render() {

    if ( this.state.activated ) {
      return (
       <div style={ styles.lightbox as any}>
          <div style={ styles.modal() as any } >
            <div style={ styles.header }>
              <span style={ styles.title }> <span style={{marginRight: '0.5em'}}>Editing</span> 
                <input defaultValue={ this.state.name } type="text" onChange={ (e) => { this.handleTextChange(e) }} style={ styles.text } /> 
              </span>
            </div>
            <div style={ styles.body }>
              { this.props.readTextFetching == false  ? (
                <textarea defaultValue={ this.state.text } style={ styles.textArea(isMobile()) } onBlur={ e=> this.handleTextArea(e) } />
              ) : ""}
              <FileButton title="Save" onClick={ () => { this.save() } } />
              <FileButton title="Cancel" onClick={ () => { this.toggleModal() } } style={ styles.cancelButton } />
            </div>
          </div>
        </div>
      )

    } else {
      return (
        <FileButton title="New File" onClick={ () => { this.toggleModal() } } />
      )
    }
  }
}

let styles = {
  modal: () => {
    return { ...modalStyle(isMobile()), ...{
        maxWidth: '960px',
        left: ! isMobile() ? '72px' : '0px',
        boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.92)"
      }}
  },
  lightbox: {...lightboxStyle, backgroundColor: 'rgba(0,0,0,0.0)' },
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