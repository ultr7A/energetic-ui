import * as React from "react"; import { Component } from "react";

type VectorInputProps = {
    title: string,
    axis: number,
    style: boolean,
    decimalPlaces: number
}

export default class VectorInput extends Component<any, any> {

    public static defaultProps: Partial<VectorInputProps> = {
        title: "Button",
        axis: 3,
        style: false,
        decimalPlaces: 2
    }

    componentWillMount() {
        this.setState({
            values: new Array(this.props.axis + 1).join('0').split('').map(parseFloat)
        })
    }

    getValue() {
        return this.state.values
    }

    onChange(event: any, i: number) {
        let values = this.state.values

        values[i] = parseInt(event.target.value)

        this.setState({
            values
        })

        this.props.onChange && this.props.onChange(values, event)
    }


    render() {

        let innerStyle = this.props.innerStyle != false ? {...styles.inner, ...this.props.innerStyle } : styles.inner,
            style = this.props.style != false ? {...styles.button, ...this.props.style } : styles.button
        innerStyle.backgroundImage = 'url(' + (this.props.image != null ? this.props.image : "") + ')';

        return (

            <div style={styles.vectorInput} className="ui-vector-input">
                {
                    this.state.values.map((value: number, i: number) => {

                        return (
                            <input step={"" + (1 / (Math.pow(10, this.props.decimalPlaces)))}
                                onBlur={(e: any) => { this.onChange(e, i) }}
                                style={styles.numeric as any}
                                defaultValue={(i == 3 ? 1 : value)+""}
                                type='number'
                                key={i}
                            />
                        )

                    })
                }
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
    numeric: {
        display: 'inline-block',
        marginRight: '1em',
        width: '80px',
        color: "white",
        padding: '0.5em',
        background: 'rgba(2, 2, 2, 0.07) none repeat scroll 0% 0%',
        border: 'medium none',
        borderRadius: '0.15em',
        fontSize: '0.9em',
        boxShadow: 'inset 0 0 1em #0003'
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