console.group("These messages suck")

$(window).on("keydown", event => {
    console.log(event.key)
    if (event.keyCode == 32) {
        const highlight = $(".highlight").text();
        console.log(highlight)
        $("#inputfield").val(highlight)
    }
})