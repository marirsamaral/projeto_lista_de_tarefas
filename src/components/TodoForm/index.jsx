import { TextInput } from "../TextInput";
import { Button } from "../Button";
import './todoform.style.css';


export function TodoForm ({onSubmit}) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput placeholder="Digite o item que deseja adicionar" 
            required/>
            <Button>
                Salvar Item
            </Button>
        </form>
    )
}