import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileImage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class ChatSend extends React.Component {
    state = {
        messageToSend: ""
    }

    render() {
        return (
            <div className="chat-message clearfix">
                <textarea
                    name="messageToSend"
                    placeholder="Type your message"
                    value={this.state.messageToSend}
                    rows="1"
                    onChange={this.onChange}
                ></textarea>
                <button onClick={this.handleSend}><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        );
    }

    onChange = (e) => {
        const field = e.target.name;
        const newValue = e.target.value;
        this.setState(() => {
            return {
                [field]: newValue
            };
        });
    }

    handleSend = () => {
        if (this.state.messageToSend.trim() !== '') {
            this.props.send(this.state.messageToSend);
            this.setState(prevState => {
                return {
                    messageToSend: ""
                };
            });
        }
    }
}

export default ChatSend;

//url post id chat dare
//text to body
//token to header