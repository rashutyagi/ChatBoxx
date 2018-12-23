import React from 'react';
import fire from '../firebaseinit';
import date from 'date-and-time';
const db=fire.database();
class OutputComponent extends React.Component {
    state ={
        messages : [],
    }
    componentDidMount(){
        // db.ref('messages/').on('value',(snapshot) =>{
        //     console.log(snapshot.val());
        //     let obj=snapshot.val();
        //     let msgs =[];
        //     for(let key in obj){
        //         msgs.push(obj[key]);
        //     }
        //     this.setState(
        //         {
        //             messages : msgs,
        //         }
        //     )
        // })

        db.ref('messages/').on('child_added',(snapshot) => {
            console.log(snapshot.val())
            this.setState(
                {
                    messages : [...this.state.messages,snapshot.val()]
                }
            )
        });
    }
    render()
    {
        return (
            <div>
                {/* Output Message is here. */}

                <ul>{
                    // this.state.messages && 
                    this.state.messages.map((msg,index) => 
                    <li key={index}>Author : {msg.author} <br />
                    Message : {msg.body} <br />
                    Time : {date.format(new Date(msg.time),'ddd MMM DD YYYY hh:mm A')}
                    </li>)
                }
                </ul>
            </div>

        )
    }
}

export default OutputComponent;