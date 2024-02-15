import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps=useMultiChatLogic(
        '4d91fcba-2d1a-434a-b5a9-6352db1607e7', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100vh'}} />
    </div>
    )
}

export default ChatsPage