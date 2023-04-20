<template>
     <div id="chat-container">
        <div id="chat-content">

        </div>
        <div id="chat-input">
            <input type="text">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
        </div>
    </div>
</template>

<style scoped>
#chat-container{
    width: 75%;
    height: 100%;
    margin: 10px;
    background-color: white;
    border-radius: 5px;

    overflow: hidden;
}

#chat-input{
    width: 100%;
    height: 100%;
    background-color: black;
    height: 50px;
    display: flex;
    position: relative;
}

#chat-input input{
    width: 100%;
    border-radius: 50px;
    margin: 10px;
    padding-left: 10px;
    padding-right: 30px;
}

#chat-input input:focus{
    outline: none;
}

#chat-input svg{
    position: absolute;
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 20px;
    top: 27%;
    right: 1%;
}


#chat-content{
    height: 75vh;
}
</style>