import React from 'react'
import { HP } from '../../services/HP'
import { containerChildrenPadding } from './../../services/layout_settings'

export default function LayoutContainer({children, style}) {

    let custom = {padding: containerChildrenPadding}

    return (
        <div style={HP.combineStyles(custom, style)}>
            <div className="container">
                    {children}
            </div>
        </div>
    )
}
