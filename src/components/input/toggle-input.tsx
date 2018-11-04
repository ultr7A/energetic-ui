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
            ? { left: 0 }
            : { right: 0 }
    }

    render() {

        let innerStyle = this.props.innerStyle != false ? {...styles.inner, ...this.props.innerStyle } : styles.inner,
            style = this.props.style != false ? {...styles.button, ...this.props.style } : styles.button
        innerStyle.backgroundImage = 'url(' + (this.props.image != null ? this.props.image : "") + ')';

        return (
            <div style={styles.vectorInput} className="ui-vector-input" onClick={ (evt: any)=> this.onChange(evt) }>
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
        paddingBottom: '0.5em',
        paddingLeft: '0.75em',
        marginBottom: '0.25em'
    },
    inner: {
        transition: 'all 0.2s linear',
        width: '60px',
        height: '60px',
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