import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const[dataForm, setDataForm] = useState({
  boxSize: '',
  boxholder: ''
  });
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addBox(dataForm);
    navigate(`/mailboxes/${dataForm.id}`);
  };

  return (
    <div>
    <h1>New Mailbox</h1>
    <form onSubmit={handleSubmit}>
      <label>Enter a Boxholder:</label>
      <input
        type="text"
        placeholder="Boxholder Name"
        value={dataForm.boxholder}
        onChange={(e) => setDataForm((state) => ({ ...state, boxholder: e.target.value }))}
        required
      />
      <label>Select a Box Size:</label>
      <select value={dataForm.boxSize} onChange={(e) => setDataForm((state) =>({...state, boxSize:e.target.value}))}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  );
};

export default MailboxForm;

