import React from 'react'
import ViewsHolder, { View } from '../ui/ViewsHolder'

export default function ViewHolder() {
    return (
        <ViewsHolder type={1}>
            <View>
                <div className="form-block" >
                    <h1>Form 1</h1>
                    <input />
                    <input />
                    <input />
                    <input />
                    <button>submit</button>
                </div>
            </View>
            <View>
                <div className="form-block">
                    <h1>Form 2</h1>
                    <input />
                    <input />
                    <button>submit</button>
                </div>
            </View>
        </ViewsHolder>
    )
}
