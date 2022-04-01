import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import SecondNav from "../NavDeAndCr/Nav";
import { addDog,getDogs } from "../../Redux/Actions";
import { 
    Form,
    Label, 
    GruopInput, 
    Input, 
    LegendError, 
    ContainerLine, 
    ConteinerButton, 
    Button, 
    MessageSucces,
    MessageError,
    TempsContainer,
    Temps
} from "./Elements/Forms";
import InputContainer from "./MiniComponents";


export default function AddDog() {
    const dispach = useDispatch();
    const temperamentsRender = useSelector(state => state.temperamentsRender);

    useEffect(() => {
        dispach(getDogs())
    } , [])

    const [inputCon, setInputCon] = useState({
        name: "", validName: null,
        weightMin: "",
        weightMax: "",
        heightMin: "",
        heightMax: "",
        life_span: "",
        temperaments: [],
        dogUnique: null
    });

    const [formValid, setFormValid] = useState(null);

    const handleChange = (e) => {
        setInputCon({
            ...inputCon,
            [e.target.name]: e.target.value,
        })
    };

    const expresionRegular = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ 
    // Letras y espacios, pueden llevar acentos.
        
    const validB = (value) => {
        if (expresionRegular.test(value)) {
            setInputCon({...inputCon, validName: true});
        } else {
            setInputCon({...inputCon, validName: false});
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (inputCon.validName === true &&
            inputCon.weightMin !== "" &&
            inputCon.weightMax !== "" &&
            inputCon.heightMin !== "" &&
            inputCon.heightMax !== "" &&
            inputCon.life_span !== "" &&
            inputCon.temperaments.length > 0) {
                // PromiseResult
                addDog(inputCon)
                    .then(result =>{ 
                        if(result === 'llave duplicada viola restricción de unicidad «dogs_name_key»'){
                            setInputCon({...inputCon, dogUnique: false})
                        }else{
                            setInputCon({...inputCon, dogUnique: true})
                            setInputCon({
                                name: "", validName: null,
                                weightMin: "",
                                weightMax: "",
                                heightMin: "",
                                heightMax: "",
                                life_span: "",
                                temperaments: []
                            })
                            setFormValid(true);
                            e.target.reset();
                        }
                    })

        }else{
            setFormValid(false);
        }
    }
    const handleTemperaments = (e) => {
        if (e.target.checked) {
            setInputCon({
                ...inputCon,
                temperaments: [...inputCon.temperaments, parseInt(e.target.id)],
            })
        } else {
            setInputCon({
                ...inputCon,
                temperaments: inputCon.temperaments.filter(item => item !== e.target.id),
            })
        }
    }



    return (
        <div className="">
            <SecondNav />
            <div className="">
                <Form action="" onSubmit={onSubmit}>

{/* //--------------Componente que necesito controlar el input--------------------- */}
                    <ContainerLine>
                        <Label htmlFor="name" valid ={inputCon.validName} >Breed of Doggo</Label>
                        <GruopInput >
                            <Input 
                            type="text" 
                            placeholder={"Breed...🐶"} 
                            id='name'
                            name='name'
                            onChange={handleChange}
                            onKeyUp={() => validB(inputCon.name)}
                            valid={inputCon.validName}
                            />
                            <LegendError valid={inputCon.validName}>
                                It can only contain letters and spaces.
                            </LegendError>
                        </GruopInput>
                    </ContainerLine>
{/* //--------------------------------------------------------------------------       */}

{/* //--------------Componente de numeros que no necesito controlar--------------------- */}

{/* //----------------- Altura--------------------------------- */}
                    <InputContainer
                        label='Height Min'
                        placeholder='cm...'
                        type='number'
                        name='heightMin'
                        id='heightMin'
                        inputCon={inputCon}
                        setInputCon={setInputCon}
                    />
                    <InputContainer
                        label='Height Max'
                        placeholder='cm...'
                        type='number'
                        name='heightMax'
                        id='heightMax'
                        inputCon={inputCon}
                        setInputCon={setInputCon}
                    />
{/* //--------------------------------------------------------------------------                     */}
{/* //----------------- Peso--------------------------------- */}
                    <InputContainer
                        label='Weight Min'
                        placeholder='Kg...'
                        type='number'
                        name='weightMin'
                        id='weightMin'
                        inputCon={inputCon}
                        setInputCon={setInputCon}
                    />
                    <InputContainer
                        label='Height Max'
                        placeholder='Kg...'
                        type='number'
                        name='weightMax'
                        id='weightMax'
                        inputCon={inputCon}
                        setInputCon={setInputCon}
                    />
{/* //--------------------------------------------------------------------------                     */}
{/* //----------------- life_span--------------------------------- */}
                    <InputContainer
                        label='Life Span'
                        placeholder='Years...'
                        type='number'
                        name='life_span'
                        id='life_span'
                        inputCon={inputCon}
                        setInputCon={setInputCon}
                    />

{/* //-------------------------------------------------------------------------- */}


                    <ContainerLine>
                        <Label  htmlFor="TempsCon" ><b>Temperaments</b></Label>
                    </ContainerLine>
                            <TempsContainer id='TempsCon'>
                                {temperamentsRender.map((item, index) => (
                                    <Temps key={index}>
                                            <input
                                                key={index}
                                                id={item.id}
                                                type="checkbox"
                                                name="temperaments"
                                                value={item.id}
                                                onChange={handleTemperaments}
                                            />
                                            <label htmlFor={item.id}>{item.name}</label>
                                    </Temps>
                                ))}
                            </TempsContainer>

                        
                    

                    {formValid === false && <MessageError>
                        <p><b>Error:</b>Please fill in the form correctly</p>
                    </MessageError>}

                    {inputCon.dogUnique === false && <MessageError>
                        <p><b>Error:</b>The breed already exists</p>
                    </MessageError>}
                    <ConteinerButton>
                        <Button type="submit">Submit</Button>
                        {formValid && <MessageSucces>Doogo Created :D</MessageSucces>}
                    </ConteinerButton>
                </Form>
            </div>
        </div>
    )


}