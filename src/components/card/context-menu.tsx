import * as React from "react"; 
import { Component } from "react";
import { Button } from '../button/button'

interface ContextMenuProps {
  options: any
  onAction: Function
  compact: boolean
  title: string
  isHovering: any
  isImage: boolean
  username: string
  category: string
  dir: string
  showTitle?: boolean
  color?: any
}

export class ContextMenu extends Component<ContextMenuProps, any> {

  public static defaultProps: Partial<ContextMenuProps> = {
    title: "File Options",
    dir: "",
    username: "",
    showTitle: false,
    isHovering: false,
    color: '#252525',
    compact: false,
    isImage: false,
    options: [
      { name: "Download" },
      // { name: "Rename" },
      { name: "Edit" },
      { name: "Delete" },
    ]
  }

  public props: ContextMenuProps

  componentDidMount () {
    this.setState({
      activated: false
    })
  }

  toggle () {
    this.setState({
      activated: ! this.state.activated
    })
  }

  handleContextAction (action: any, evt: any) {
    if (this.props.onAction)
      this.props.onAction(action, evt)

    this.toggle()

  }

  render() {
    let username = this.props.username,
        dir = this.props.dir,
        numberOfOptions = this.props.options.length,
        nonEntity = this.props.category && this.props.category == "Properties" || this.props.category == "Components"

    if ( this.state.activated ) {
      return (
        <div style={styles.card(this.props.color, this.props.compact) as any} title={this.props.title }>
          {(this.props.showTitle ? (
            <span style={styles.title}>{ this.props.title }</span>
          ) : "")}
          <Button style={ styles.button(this.props.compact, "", true) as any }
                  image="/data/images/x.png"
                  onClick={ (e: any) => this.toggle() }
                  title="Close"
          />
          <div style={styles.options}>
            {
              this.props.options.map((opt: any, i: number) =>{
                if ( nonEntity && opt.name =="Add To Space")
                  return ""
                
                return (
                  <div onClick={ (e: any)=> this.handleContextAction( opt.name, e ) }
                       style={ { ...styles.option, borderBottom: i < numberOfOptions -1 ? styles.option.borderBottom : 'none' } as any }
                       key={i}
                  >
                    { opt.name == "Download" ? (
                      <a title={this.props.title} style={styles.link} target="_blank" href={`/data/user/${username}${dir}/${this.props.title}`}>Download</a>
                    ) : opt.name }
                  </div>
                )
              })
            }
          </div>
        </div>
      )
  } else {
      return (
        <Button image="/data/images/configure.png"
                title="File Options"
                onClick={ (e: any)=> this.toggle() }
                style={ styles.button( this.props.compact, "", false, this.props.isHovering ) }
        />
      )
    }
  }
}


let styles = {
  card: (color: any, compact: boolean) => {
    return {
      position: 'relative',
      cursor: 'pointer',
      width: '224px',
      height: '220px',
      display: 'inline-block',
      marginRight: '0.5em',
      marginLeft: '8px',
      marginBottom: '0.5em',
      backgroundColor: 'rgb(34, 34, 34)',
      textAlign: "center",
      borderRadius: "5px",
      color: "white",
      boxShadow: "rgba(0, 0, 0, 0.27) 6px 1em 1.2em 8px",
      fontWeight: "600",
      border: "1px rgba(77, 77, 77, 0.64) solid"
    }
  },
  link: {
    textDecoration: 'none'
  },
  option: {
    textAlign: 'left',
    paddingLeft: '0.8em',
    paddingBottom: '0.2em',
    borderBottom: '0.2em solid rgb(49, 48, 48)'

  },
  options: {
    paddingTop:'0.4em',
    fontSize: '17px'
  },
  button: (compact: boolean, image: string, close: boolean, isHovering?: boolean) => {
    return {
      position: 'relative',
      top: compact ? '-50px' : close ? '-50px' : '-48px',
      right: close ? '-16px' : '-104px',
      opacity: isHovering ? (close ? 1 : image ? 0.5 : 0.33) : 0,
      float: close ? 'right' : 'none'
    }
  },
  title: {
    width: '100%',
    height: '40px',
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}
