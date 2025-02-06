import { css, Global } from "@emotion/react"

export const Styles = () => {
    
    const style = css`
        *{
        font-family: 'Montserrat', sans-serif
    }
    `
    
    return (
        <Global styles={style} />
    )
}