import React from 'react'

function BoxColor(props) {

    const { r, g, b } = props

    const backgroundColor = `rgb(${r}, ${g}, ${b})`

    const rgbToHex = (rgb) => {

        let hex = rgb.toString(16)
        return hex.length === 1 ? "0" + hex : hex

    }

    let hexColors = [r, g, b].map(rgbToHex)

    return (
        <div
            style={{ backgroundColor }}
            className='box-color'>
            {backgroundColor}

            <div>
                #{hexColors}
            </div>
        </div>
    )
}

export default BoxColor