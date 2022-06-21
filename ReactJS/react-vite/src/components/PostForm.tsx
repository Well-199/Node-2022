import { useState } from "react"

type Props = {
    onAdd: (title: string, body: string) => void
}

export const PostForm = ({ onAdd }: Props) => {

    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    const handleAddTitleChange = (title: string) => {
        setAddTitleText(title)
    }
    
    const handleAddBodyChange = (text: string) => {
        setAddBodyText(text)
    }

    const handleAddClick = () => {

        if(addTitleText && addBodyText){
            // função que executa a requsição
            onAdd(addTitleText, addBodyText)
            setAddTitleText('')
            setAddBodyText('')
        } else {
            alert("Preencha os Campos")
        }
        
    }

    return(
        <fieldset>
            <legend>Adicionar Novo Post</legend>

            <input 
            type="text"
            value={addTitleText} 
            placeholder="Digite um titulo"
            onChange={(e) => handleAddTitleChange(e.target.value)}
            /><hr/>

            <textarea 
            value={addBodyText}
            placeholder="Digite um texto"
            onChange={(e) => handleAddBodyChange(e.target.value)}
            ></textarea><hr/>

            <button onClick={handleAddClick}>Adicionar</button>

        </fieldset>
    )
}
