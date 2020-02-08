import * as React from "react"; import { Component } from "react";

export interface VectorInputProps {
    title: string;
    axis: number;
    image?: string;
    decimalPlaces: number;
    onChange: (values: number[], event: Event) => void;
    style?: { [_: string]: any };
    innerStyle?: { backgroundImage?: string};
}

export interface VectorInputState {
    values: number[];
    coords: number[];
}

export class VectorInput extends Component<VectorInputProps, VectorInputState> {

    public static defaultProps: Partial<VectorInputProps> = {
        title: "Button",
        axis: 3,
        decimalPlaces: 2,
    }

    private mouseDown = false;

    componentWillMount() {
        this.setState({
            values: new Array(this.props.axis + 1).join('0').split('').map(parseFloat),
            coords: [0,0]
        })
    }

    getValue() {
        return this.state.values
    }

    onTouchChange(event: React.PointerEvent) {
        let values = this.state.values;

        let coords = [event.clientX, event.clientY];
        console.log("touch coords", coords, event);
        values[0] = coords[0];
        values[1] = coords[1];

        this.setState({
            values,
            coords
        });

        this.props.onChange && this.props.onChange(values, event.nativeEvent)
    }

    onChange(event: any, i: number) {
        let values = this.state.values

        values[i] = parseInt(event.target.value)

        this.setState({
            values
        })

        this.props.onChange && this.props.onChange(values, event)
    }


    onPointerDown(e: React.SyntheticEvent) {
        this.mouseDown = true;
    }

    onPointerUp(e: React.SyntheticEvent) {
        this.mouseDown = false;
    }

    onPointerMove(e: React.PointerEvent) {
        if (this.mouseDown) {
            this.onTouchChange(e);
        }
    }

    computeStyle() {
        let style = { ...styles.inner };

        style.top = this.state.coords[1] + "px";
        style.left = this.state.coords[0] + "px";

        return style;
    }

    render() {
        let innerStyle = this.props.innerStyle ? {...styles.inner, ...this.props.innerStyle } : styles.inner,
            style = this.props.style ? {...styles.button, ...this.props.style } : styles.button;

        innerStyle.backgroundImage = 'url(' + (this.props.image ? this.props.image : "") + ')';

        if (this.props.axis == 2) {
            return (
                <div style={styles.vectorInput} className="ui-vector-input"
                    onPointerDown={(e)=>this.onPointerDown(e) }
                    onPointerUp={(e)=>this.onPointerUp(e) }
                    onPointerMove={(e)=>this.onPointerMove(e) }
                >
                    <div style={this.computeStyle() as any}></div>
                </div>
            );
        } else {
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
                        );
                    })
                }
                </div>
            );
        }
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
        left: "0px",
        top: "0px",
        position: "relative",
        transition: 'all 0.2s linear',
        width: '1em',
        height: '1em',
        display: 'block',
        backgroundImage: '',
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