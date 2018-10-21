import * as React from "react"; import { Component } from "react";
import FileButton from '../components/button/file-button'
import { rgba, rgb } from '../util'

export default class NewFolder extends Component<any, any> {

  componentWillMount () {
    this.setState({
      activated: false,
      resultingPath: "",
      name: ""
    })
  }

  componentWillReceiveProps ( nextProps: any) {
    if ( this.props.creatingDir && nextProps.creatingDir == false ) {
      this.props.listDirectories( nextProps.username, nextProps.cwd.join("/") )
    }
  }

  componentWillUpdate ( nextProps: any, nextState: any ) {


  }

  toggleModal () {
    this.setState({
      name: "",
      activated: !this.state.activated
    })
  }

  handleTextChange(e: any) {
    this.setState({
      name: e.target.value
    })
  }

  make () {
    let cwd = this.props.cwd.join("/"),
        dirName = this.state.name.indexOf(' ') > -1 ? this.state.name.split(' ').join('-') : this.state.name,
        name = this.state.name

    if ( name != "" ) {

      this.props.createDirectory( this.props.username, `${cwd}/${dirName}` )
      this.toggleModal()

    } else {

      alert("Name is required.")

    }

  }

  render() {
    let cwd = !! this.props.cwd ? this.props.cwd.join("/") : "",
        resultingPath = `${this.props.username}${cwd}/${this.state.name.split(' ').join('-')}`

    if ( this.state.activated ) {

      return (
        <div style={ styles.lightbox as any }>
          <div style={ styles.modal as any } >
            <div style={ styles.header as any }>
              <span style={ styles.title as any }> New Folder </span>
            </div>
            <div style={ styles.body }>
              <input type="text" onChange={ (e) => { this.handleTextChange(e) }} style={ styles.text } />
              <div style={ styles.resultingPath }>
                { resultingPath }
              </div>
              <FileButton title="Make" onClick={ () => { this.make() } } />
              <FileButton title="Cancel" onClick={ () => { this.toggleModal() } } style={ styles.cancelButton } />
            </div>
          </div>
        </div>
      )

    } else {
      return (
        <FileButton title="New Folder" onClick={ () => { this.toggleModal() } } />
      )
    }
  }
}

let styles = {
  modal: {
    width: '20%',
    maxWidth: '729px',
    minWidth: '320px',
    height: '192px',
    padding: '0.25em',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    background: rgb(38, 38, 38),
    borderTop: '0.2em solid'+ rgba(255, 255, 255, 0.06),
    boxShadow: "0px 10px 100px rgba(0, 0, 0, 0.92)"
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: rgba(0, 0, 0, 0.0)
  },
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
  body: {

  },
  title: {

  }
}
