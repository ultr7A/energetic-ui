import * as React from "react"; import { Component } from "react";

type ToggleInputProps = {
    value: boolean,
    onChange?: Function
}

export class ToggleInput extends Component<any, any> {

    public static defaultProps: Partial<ToggleInputProps> = {
        value: false
    }

    componentWillMount() {
        this.setState({})
    }

    getValue() {
        return this.state.values
    }

    onChange(event: any) {
        this.props.onChange && this.props.onChange(!this.props.value, event)
    }

    indicateState() {
        return this.props.value
            ? { right: 0, 
                backgroundColor: "#00e200", 
                boxShadow: "0px 0px 10px #00e200",
                marginRight: "0.6em",
                marginLeft: "auto" 
            }
            : { left: 0, backgroundColor: "#e20000" }
    }

    render() {

        let innerStyle = this.props.innerStyle != false ? {...styles.inner, ...this.props.innerStyle } : styles.inner,
            style = this.props.style != false ? {...styles.vectorInput, ...styles.button, ...this.props.style } : styles.button
        innerStyle.backgroundImage = 'url(' + (this.props.image != null ? this.props.image : "") + ')';

        return (
            <div style={style} className="ui-vector-input" onClick={ (evt: any)=> this.onChange(evt) }>
               <div style={{ ...innerStyle, ...this.indicateState() }}></div>
            </div>
        )
    }
}

let styles = {
    button: {
        display: 'inline-block',
        width: '60px',
        height: '60px'
    },
    vectorInput: {
        display: 'inline-block',
        height: '20px',
        width: '62px',
        paddingBottom: '0.5em',
        paddingLeft: '0.75em',
        paddingTop: '0.25em',
        marginBottom: '0.25em',
        background: 'linear-gradient(to top, rgb(12, 12, 12), rgb(17, 17, 17), rgb(33, 33, 33))',
        borderRadius: '2px'
    },
    inner: {
        transition: 'all 0.2s linear',
        width: '20px',
        height: '100%',
        display: 'block',
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        cursor: 'pointer'
    },
    file: {
        position: 'relative',
        bottom: '-1.5em',
        left: '0.5em',
        width: '92px',
        opacity: 0
    }
}