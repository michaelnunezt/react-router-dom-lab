import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
   const { mailboxId } = useParams();

   
   const selected = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

   return (
     <div>
       {selected ? (
         <div>
           <h2>Details</h2>
           <p>Boxholder: {selected.boxholder}</p>
           <p>Box Size: {selected.boxSize}</p>
         </div>
       ) : (
         <h2>Box not found</h2>
       )}
     </div>
   );
};

export default MailboxDetails;



