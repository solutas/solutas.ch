import React from "react";

export default class Blur extends React.Component {
    a = [ ["i", "n", "f", "o"],
["s", "o", "l", "u","t","a","s"], [".","c","h"]]

t = [["+", "4", "1 ",  "7", "9 "],[ "5", "9", "7 ", "5"],["0", "0" , "6"]];
    state = {
        active:false
    }
    unBlur = () => {
        let t = this.props.a ? this.a[0].join("") + "@" + this.a[1].join("") + this.a[2].join("")
        :
        this.t[0].join("") + this.t[1].join("") + this.t[2].join("");
        
        let text = this.props.a ? <a href={"mailto:" + t}>{t}</a> :
        <a href={"tel:"+ t}>{t}</a>;
        this.setState({
            active:true,
            text
        })
    }
    render() {
        return (
            this.state.active ? this.state.text : <span className="blur" title="click to see" onClick={()=>{this.unBlur()}}>xxxxxxx</span>
        )
    }
}