import React from 'react'
import { HP } from './../../script/HP';

export default function TitleDescription({title, desc, gap, style, titleStyle, descStyle}) {

    let tCustom = {marginBottom: gap ?gap : 5,}
    let pCustom = {marginTop: 0}
    return (
        <div style={style}>
            <h1 style={HP.combineStyles(tCustom, titleStyle)}>{title}</h1>
            <p style={HP.combineStyles(pCustom, descStyle)}>{desc}</p>
        </div>
    )
}
