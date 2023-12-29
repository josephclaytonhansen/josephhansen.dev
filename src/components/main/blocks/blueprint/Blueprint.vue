<script>
    import './script.js'
</script>

<template>
    <div class = "blueprint">
        <div id = "back"></div>
        <div id = "back2"></div>
        <div id = "back3"></div>

        <img id = "align" :src = "alignImage" style = "position: absolute; z-index:9; transform: scale(.4); left:-80px; top:-40px; opacity:.5;pointer-events:none;">

        <div style = "position:absolute; width: 200px; height: 200px; top:45px;left:240px;z-index:6;" id="square1-over">
            <p style = "padding:2rem;color:white;font-family:sans-serif;font-size:1.5rem;pointer-events:none">This is a square</p>
        </div>

        <div style = "position:absolute; width: 200px; height: 200px; top:40px;left:480px;z-index:6;" id="square2-over">
            <p style = "padding:2rem;color:white;font-family:sans-serif;pointer-events:none;font-size:1.5rem;">This is also a square</p>
        </div>

        <div style = "position:absolute; width: 200px; height: 200px; top:50px;left:730px;z-index:6;" id="square4-over"></div>

        <div id = "square-target" style = "position:absolute; width: 500px; height: 400px; bottom:40px;right:40px;z-index:6;"></div>

        <div id = "line">
            <div id = "line-cover" style = "background-color:black;z-index:3"></div>
        </div>
    </div>
</template>

<style scoped>
    #line, #line-cover{
        transition: opacity 0.3s ease;
    }

    .blueprint{
        background-color:rgb(10, 154, 251);
        overflow:hidden;
        width: 100vw;
        height: 100vh;
    }

    #square1-over, #square2-over, #square3-over, #square4-over, #square-target{
        border-radius:4px;
        border: 3px dashed #f2f2f2;
        transition: border 0.3s ease-out;
        box-sizing: border-box;
        background-color: transparent;
    }

    #back, #back2, #back3 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgb(10, 154, 251);
        background-size: 40px 40px, 120px 120px, 120px 120px;
        background-image: radial-gradient(circle, rgba(242, 242, 242, .2) 2px, rgba(0, 0, 0, 0) 1px), 
        linear-gradient(to right, rgba(242, 242, 242, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(242, 242, 242, 0.1) 1px, transparent 1px);
        background-position: 0 0, -20px -20px, -20px -20px;

    }

    #back2, #back3 {
        z-index:4;
    }

</style>