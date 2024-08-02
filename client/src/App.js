import ContactList from "./components/ContactsList/ContactList";
import CreateContactForm from './components/CreateContactForm/CreateContactForm'
import './index.css'
function App() {
  return (
    <div className="mx-auto max-w-[1280px] min-w-[400px] px-8 md:flex md:gap-10">
      <CreateContactForm />
      <ContactList/>
    </div>
  );
}


export default App;
