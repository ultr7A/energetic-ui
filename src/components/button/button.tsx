import * as React from "react"; import { Component } from "react";
import { 
  buttonFileStyle,
  buttonInnerStyle,
  buttonStyle,
} from '../../styles'

let styles = {
  button: buttonStyle,
  inner: buttonInnerStyle,
  file: buttonFileStyle,
  mouseDown: (color: [number, number, number], x = '-2px', y='0em') => {
    return {
      boxShadow: `inset rgba(${color.join(",")},0.8) ${x} ${y} 1em 3px, rgba(0, 0, 0, 0.3) 0px 0.25em 0.5em 0px`
    }
  }
}

export type ButtonProps = {
  style?: any
  color?: [number,number,number]
  innerStyle?: any
  title?: string
  image?: string
  onClick?: Function
  onFiles?: Function
  compact?:boolean
}

export class Button extends Component<ButtonProps, any> {
  public props: ButtonProps
  static get defaultProps() {
    return {
      title: "Button",
      style: false,
      compact: false
    }
  }

  componentWillMount() {
    this.setState({
      mouse: {
        x: 0,
        y: 0
      }
    })
  }

  private onMouseDown(event: any) {
    this.setState({ mouseDown: true })
  }

  private onMouseUp(event: any) {
    this.setState({ mouseDown: false })
  }

  private onMouseMove(event: MouseEvent) {
    if (this.onMouseDown) {
      this.setState({
        mouse: {
          x: event.layerX,
          y: event.layerY
        }
      })
    }
  }

  render() {
    let compact =  this.props.compact as boolean,
        innerStyle = this.props.innerStyle != false ? { ...styles.inner(compact), ...this.props.innerStyle } : styles.inner(compact),
        style = this.props.style != false ? { ...styles.button(compact), ...this.props.style} : styles.button(compact)
      
    innerStyle.backgroundImage = 'url('+(this.props.image != null ? this.props.image : "")+')';
    if (this.state.mouseDown && this.props.color) {
      innerStyle = {...innerStyle, ...styles.mouseDown(this.props.color, this.state.mouse.x, this.state.mouse.y)}
    }
    
    return (
        <div style={style as any} className="ui-button">
            <div style={innerStyle}
                 title={this.props.title }
                 onMouseDown={ (evt) => { this.onMouseDown(evt) }}
                 onMouseUp={ (evt) => { this.onMouseUp(evt) }}
                 onMouseMove={ (evt) => {this.onMouseMove(evt as any) }}
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

