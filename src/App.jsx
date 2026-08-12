import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { TextInput } from "./components/Textinput"
import { Button } from "./components/Button"
import { TodoForm } from "./components/TodoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { TodoGroup } from "./components/TodoGroup"


function App() {
  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = use(TodoContext)
  
  const handleFormSubmit = (formData) => {
    addTodo(formData)
    openFormTodoDialog()
  }


  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        
        <ChecklistsWrapper>

          <TodoGroup
            heading="Para estudar"
            items={todos.filter(t => !t.completed)}
          />

          <TodoGroup
            heading="Concluído"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
               <TodoForm onSubmit={handleFormSubmit}
               defaultValues={selectedTodo?.description}
               />
            </Dialog>
            <FabButton onClick={openFormTodoDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
