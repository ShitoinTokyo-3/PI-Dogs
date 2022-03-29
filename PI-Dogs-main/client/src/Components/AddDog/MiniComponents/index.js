import { Label, GruopInput, Input } from "../Elements/Forms";
const InputContainer = (props) => {

    const handleChange = (e) => {
        props.setInputCon({
            ...props.inputCon,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <Label htmlFor={props.name}>{props.label}</Label>
            <GruopInput>
                <Input 
                type={props.type} 
                placeholder={props.placeholder} 
                name={props.name}
                onChange={handleChange}
                />
            </GruopInput>
        </div>
    );
}
export default InputContainer;