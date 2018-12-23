import React from 'react';
import fire from '../firebaseinit';
const db=fire.database();
class InputComponent extends React.Component 
{
handleSend(){
    let body = document.getElementById('message').value;
    let author = document.getElementById('name').value;

    body=body.trim();
    author=author.trim();
    if(author.length ===0 || body.length ===0){
        alert('Cannot store empty messages');
        return;
    }

    db.ref('messages/').push({
        author,
        body,
        time : Date.now()
    }).then((val) => {
       // console.log('Done', val);
        document.getElementById('name').value= '';
        document.getElementById('message').value= '';
        });

}

    render()
    {
      return(
        <div> 
        <label>Name :</label>
        <input type='text' id='name' />
        <br />
        <label>Message :</label>
        <input type='text' id='message' />
        <br />
        <button onClick={() => this.handleSend()} >Send</button>
        
       </div>
      )
           
    }
}
export default InputComponent;

