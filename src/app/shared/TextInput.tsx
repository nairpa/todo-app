import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"

interface TextInputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

export const TextInput = ({...rest}: TextInputProps) => {
    return (
        <>
            <input className="bg-dark-desat-blue outline-0 caret-primary" type="text" { ...rest }></input>
        </>
    )
}