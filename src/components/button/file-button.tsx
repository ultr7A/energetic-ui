import * as React from "react"; import { Component } from "react";
import { fileButtonStyle } from '../../styles'

let styles = {
  button: fileButtonStyle
}

type FileButtonProps = {
  title: string,
  style?: any,
  onClick: Function
}

export default class FileButton extends Component<FileButtonProps, any> {

  private defaultProps: FileButtonProps

  render() {
    
    return (
        <div style={ { ...styles.button, ...this.props.style} } 
             onClick={ (evt) => {
                this.props.onClick && this.props.onClick(evt, this.props.title)
             }}
             title={ this.props.title } 
        >
           { this.props.title }
        </div>
    )
  }
}