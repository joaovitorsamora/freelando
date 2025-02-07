import { Global } from "@emotion/react"

export const Styles = () => {
    
    const style = theme => {
        return {
            html: {
                fontFamily: theme.fontFamily
            },
            body: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box'
            }
        }
    }
    
    return (
        <Global styles={style} />
    )
}