import * as React from "react"; import { Component } from "react";
import { Card } from "../card/card";

const panelStyle = {
    display: "inline-block",
    height: "1em",
    width: "100%",
    overflow: "visible"
};
const controlStyle = {
    display: "inline-block",
    float: "right",
    paddingRight: "0.5em"
};

export interface PanelProps {
    title?: string;
    customStyle?: CSSStyleDeclaration;
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
        const style = {...panelStyle, height: "1em", overflow: "hidden", ...(this.props.customStyle ? this.props.customStyle : {})};

        if (this.state.open) {
            style.height = "auto";
            style.overflow = "visible";
        } 

        return style;
    }

    render() {
        return (
            <aside style={this.computeStyle() as any}>
                <div style={{width: "100%"}}>
                    <div style={{ float: "left", "display": "inline-block" }}>
                        <Card 
                            showTitle={true} 
                            title={this.props.title || "Panel"} 
                            clickHandler={()=> this.onToggle()} 
                        />
                    </div>
                    <div style={{ ...controlStyle, ...(this.props.controlStyle ? this.props.controlStyle : {})} as any}
                        onPointerDown={(e)=> this.onToggle()}
                    >
                        X
                    </div>
                </div>
                { this.props.children }
            </aside>
        )
    }
}

