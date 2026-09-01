import './emptyState.style.css'

export function EmptyState() {
    return ( <section className='empty-state'>
        <p>Ainda não tem tarefas cadastradas, adicione para começar</p>
        <img src='./public/empty.png' alt='' />

    </section>)
}