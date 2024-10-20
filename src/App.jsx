import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
// import LetterForm from './components/LetterForm';
import NavBar from './components/NavBar';

const App = () => {

const initialState = [
{_id: 1,
  boxSize: 'Small',
  boxholder: 'Michael',
},
{_id: 2,
  boxSize: 'Medium',
  boxholder: 'Eddy',
},
{_id: 3,
  boxSize: 'Big',
  boxholder: 'Simon',
},
];



  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length +1;

    setMailboxes([...mailboxes, newMailbox]);
  };

  const [mailboxes, setMailboxes] = useState(initialState);
  



  return (
   <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={
        <>
        <h1>Mailbox List</h1>
        { mailboxes.map((item)=>(<MailboxList item={item} key= {item._id}/>))}
        </>
      } />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} /> } />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    </Routes>
   </>
   );
};


export default App;

