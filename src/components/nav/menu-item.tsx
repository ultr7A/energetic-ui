/* menu item */
import * as React from "react"; import { Component } from "react";
import Button from '../button/button'

export default class MenuItem extends Component<any, any> {
    private defaultProps = {
        title: "Menu Item"
    }
    
  render() {
    return (
        <div className="menu-item" title={this.props.title }
             onClick={ (evt: any) => { this.props.onClick(evt, this.props.title) } }
        >
            <span>
                { this.props.title }
            </span>
            <Button title={this.props.title}
                    onClick={(evt: any, title: string) => { this.props.onClick(evt) }}
                    image={this.props.image}
                    style={{ marginRight: "0.25em"}}
            />
        </div>
    )
  }
}