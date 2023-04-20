<template>
    <nav class="navbar">
        <ul id="navbar-list">
            <li id="logo"><h3>SwiftShop<span><img src="logo.png"/></span></h3></li>
            <li id="search-bar"><input type="text" placeholder="Enter the product you are looking for..."/></li>
            <li :key="link" v-for="link in links">
                <a 
                v-bind:href="link.url"
                >{{link.icon}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style>

.navbar{
    background-color: white;
    color: inherit;
    display: table-row;
    justify-content: space-evenly;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    padding-bottom: 0px;
    box-shadow:0px 0px 0px 6px rgb(236, 236, 236) inset;
}

.navbar img{
    width: 60px;
    height: 60px;
}

.navbar ul{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;

}

.navbar li{
    padding-left: 10px;
    padding-right: 10px;
    list-style: none;
}

.navbar a{
    text-decoration: none;
    color: black;
}

.navbar input{
    width: 100%;
    align-self: center;
    vertical-align: middle;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 30px;
    border-style: solid;
    padding-left: 20px;
    padding-left: 20px; 
}

.navbar #search-bar{
    width: 50%;
}

.navbar #logo h3{
    color:rgb(39, 126, 240) ;
}
</style>