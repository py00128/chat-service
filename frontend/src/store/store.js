import { createStore } from "vuex";

export default createStore({
    state: {
        conversations: [],
        selectedConversationID: null
    },
    mutations: {
        setSelectedConversationID(state, conversationID){
            state.selectedConversationID = conversationID
        }
    },
    actions:{
        
    }
})