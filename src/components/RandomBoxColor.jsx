import React from 'react'

function BoxColor(props) {

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    // (0, 0, 0) -> preto
    // (255, 255, 255) -> branco

    let corTexto = "black"

    if (parseInt(r) + parseInt(g) + parseInt(b) < 200) {
        corTexto = "white"
    }

    const backgroundColor = `rgb(${r}, ${g}, ${b})`

    const rgbToHex = (rgb) => {

        let hex = rgb.toString(16)
        return hex.length === 1 ? "0" + hex : hex

    }

    let hexColors = [r, g, b].map(rgbToHex)

    return (
        <div
            style={{ backgroundColor, color: corTexto }}
            className='box-color'>
            {backgroundColor}

            <div>
                #{hexColors}
            </div>

            <h2>{props.children}</h2>
        </div>
    )
}

export default BoxColor