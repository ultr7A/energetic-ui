import * as React from "react"; 
import { Component } from "react";
import Button from '../button/button'
import ContextMenu from './context-menu'

interface CardProps {
  color?: any
  compact?: boolean
  quarterSize?: boolean
  showTitle: boolean
  description?: string
  title: string
  image?: string
  category?: string
  dir?: string
  username?: string
  onContextMenu?: Function
  clickHandler: Function
  contextMenuOptions?: any[]
}
export default class Card extends Component<CardProps, any> {

  private defaultProps: CardProps

  public props: CardProps

  componentWillMount () {
   this.setState({
     isHovering: false
   })
  }

  handleContextAction (name: string, e: any) {
    let data: any = {}

    // display a modal window here if needed.
    if ( name == "Rename" || name == "Edit" || name == "Delete" ) {
      data.filename = this.props.title
      data.username = this.props.username
    }
    if (!this.props.onContextMenu) {
      return;
    }
    if ( name == "Delete" ) {
      if ( confirm(`Delete ${data.filename}?`) ) {
        this.props.onContextMenu(name, data, e)
      } else {
        this.props.onContextMenu("", {}, {})
      }
    } else {
      this.props.onContextMenu(name, data, e)
    }
  }

  handleCardClick (evt: any) {
    let elemClass = evt.target && evt.target.getAttribute("class")

    if ( elemClass == "ui-card-outer" || elemClass == "ui-card-title" ) // make sure the outer div was clicked
      this.props.clickHandler( evt, this.props.title )

  }

  onMouseEnter(evt: any) {
    this.setState({
      isHovering: true
    })
  }

  onMouseLeave(evt: any) {
    this.setState({
      isHovering: false
    })
  }

  render() {

    return (
        <div style={styles.card(this.props.image+"", this.props.color, !!this.props.compact, !!this.props.quarterSize) as any}
             onClick={ evt => this.handleCardClick(evt) }
             onMouseMove={ evt => this.onMouseEnter(evt) }
             onMouseLeave={ evt => this.onMouseLeave(evt) }
             title={this.props.title }
             className={"ui-card-outer"}
        >
            {(!!this.props.showTitle ? (
                <span style={styles.title(this.props.image+"", !!this.props.quarterSize) as any}
                      className="ui-card-title"
                >
                { this.props.title }
                </span>
            ) : "")}
            {
              this.props.onContextMenu ? (
                <ContextMenu options={this.props.contextMenuOptions} 
                             onAction={ (name: string, e: any) => this.handleContextAction( name, e ) }
                             compact={ !!this.props.compact }
                             title={ this.props.title+"" }
                             isHovering={ !!this.state.isHovering }
                             isImage={ this.props.image != "" }
                             username={ this.props.username+"" }
                             category={ this.props.category+"" }
                             dir={ this.props.dir+"" }
                />
              ) : ''
            }
            {
              this.props.description != "" ? (
                <div style={styles.description(!!this.props.compact)}>
                  { this.props.description }
                </div>
              ) : ""
            }
        </div>
    )
  }
}

let styles = {
  card: (image: string, color: any, compact: boolean, quarterSize: boolean) => {
    return {
      borderRadius: '2.5px',
      boxShadow: '0 0.25em 0.5em 0px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      width: quarterSize ? '120px' : '240px',
      height: quarterSize ? '120px' : (compact ? '60px' : '240px'),
      display: 'inline-block',
      marginRight: '0.5em',
      marginBottom: '0.5em',
      backgroundColor: 'rgba(255,255,255, 0.2)',
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`,
      textAlign: "center",
      verticalAlign: "top",
    }
  },
  description: (compact: boolean) => {
    return {
      opacity: 0.8
    }
  },
  title: (image: string, quarterSize: boolean) => {
    return {
      width: '100%',
      fontSize: quarterSize ? '12px' : '16px',
      textShadow: quarterSize || image != '' ? 'rgba(0, 0, 0, 0.33) 1px 1px 1px' : 'none',
      height: '32px',
      paddingTop: '8px',
      display: 'block',
      wordBreak: 'break-word',
      backgroundColor: quarterSize || image != '' ? 'transparent' : 'rgba(0,0,0,0.2)'
    }
  }
}