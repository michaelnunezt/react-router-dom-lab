import { Link } from "react-router-dom";

const MailboxList = ({ item }) => {
  return ( 
    <div>
     <h2>Mailbox</h2>
        <Link to={`/mailboxes/${item._id}`} key={item._id} item ={item}>
          <div className="mail-box">
            <p>MailBox {item._id}</p>
          </div>
        </Link>
    </div>
  );
};


export default MailboxList;


