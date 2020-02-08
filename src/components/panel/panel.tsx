import * as React from "react"; import { Component } from "react";

const panelStyle = {
    display: "inline-block",
    height: "100%"
};
const controlStyle = {
    display: "block"
};

export interface PanelProps {
    customStyle?: CSSStyleDeclaration;
    customExpandedWidth?: string;
    controlStyle?: CSSStyleDeclaration;
}

export interface PanelState {
    open: boolean;
}

export class Panel extends Component<PanelProps, PanelState> {
    constructor(props: PanelProps){
        super(props);

        this.state = {
            open: false
        };
    }
    
    onToggle() {
        this.setState({
            open: !this.state.open
        })
    }

    computeStyle() {
        const style = {...panelStyle, width: "1em", ...(this.props.customStyle ? this.props.customStyle : {})};

        if (this.state.open) {
            style.width = this.props.customExpandedWidth ? this.props.customExpandedWidth : "5em";
        }

        return style;
    }

    render() {
        return (
            <aside style={this.computeStyle() as any}>
                <div style={{ ...controlStyle, ...(this.props.controlStyle ? this.props.controlStyle : {})} as any}
                    onPointerDown={(e)=> this.onToggle()}
                >
                    X
                </div>
                { this.props.children }
            </aside>
        )
    }
}

