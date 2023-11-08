<template>
    <!-- Make a footer -->
    <div class="footer">
        <div class="content-container">
            <div class="container-1">
                <p>Coded in Visual Studio Code. Built with Vue.js and CSS.<br>Acorn for headlines, GT Planar Regular for the body.</p>
                <br>
                <p>© 2023 Joan Gómez Pérez</p>
            </div>
            <div class="container-2">
                <div class="container-1">
                    <div class="ml-16">
                        <p class="color font-weight-bold">Elsewhere</p>
                        <p>Github</p>
                        <p>Linkedin</p>
                        <p>Instagram</p>
                        <p>CV</p>
                    </div>
                </div>
                <div class="container-2">
                    <p class="color font-weight-bold">Contact</p>
                    <p>Message</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>

.color {
    color:#125f52;
}
.container-1 {
    // background-color: blue;
    width: 60%;
    height: 100%;
    float: left;
    text-align: left;
    // background-color: red;
}
.container-2 {
    align-content: left;
    // background-color: green;
    width: 40%;
    height: 100%;
    float: right;
    // background-color: blue;
}
.footer {
    font-size: 0.9rem;
    max-width: 1600px;
    height: 230px;
    text-align: left;
    margin: auto; 
    // background-color: yellow;
    font-family: "GTPlanar";
    color: rgb(90, 90, 90);
    // background-color: green;
}
.content-container {
    // background-color: yellow;
    width: 75%;
    // background-color: red;
    margin:auto;
    display: block;
    
}

</style>