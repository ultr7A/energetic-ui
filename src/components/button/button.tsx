import * as React from "react"; import { Component } from "react";
import { 
  buttonFileStyle,
  buttonInnerStyle,
  buttonStyle,
} from '../../styles'

let styles = {
  button: buttonStyle,
  inner: buttonInnerStyle,
  file: buttonFileStyle
}

export class Button extends Component<any, any> {

  public props: {
    style?: any
    innerStyle?: any
    title?: string
    image?: string
    onClick?: Function
    onFiles?: Function
    compact?:boolean
  }
  static get defaultProps() {
    return {
      title: "Button",
      style: false,
      compact: false
    }
  }

  render() {
    let compact =  this.props.compact as boolean,
        innerStyle = this.props.innerStyle != false ? { ...styles.inner(compact), ...this.props.innerStyle } : styles.inner(compact),
        style = this.props.style != false ? { ...styles.button(compact), ...this.props.style} : styles.button(compact)
      
    innerStyle.backgroundImage = 'url('+(this.props.image != null ? this.props.image : "")+')';

    return (
        <div style={style as any} className="ui-button">
            <div style={innerStyle}
                 title={this.props.title }
                 onClick={ (evt) => {
                   this.props.onClick && this.props.onClick(evt, this.props.title)
                 } }
            >
            { !!this.props.onFiles ? (
                <input type="file" multiple onChange={ (e: any) => {this.props.onFiles && this.props.onFiles( e.target.files )} } 
                       style={styles.file() as any} />
              ) : ""
            }
            </div>
        </div>
    )
  }
}

