import Chat from "./components/chat/chat";
import Details from "./components/details/details";
import List from "./components/list/list";

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Details/>
    </div>
  )
}

export default App