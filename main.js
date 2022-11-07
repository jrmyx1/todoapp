$(function () {
    $("#btn").click((e) => {
        let inputVal = $("#input").val()
        if(inputVal === ""){
            $('#btn').disabled = true;
        }
        else{
            $('#button').disabled = false;
            $('.list').append("<div class='d-flex lists'>" + "<input type='checkbox' class='check' onClick='hello()'>" + "<li>" + inputVal + "</li>" + "<button class='btnx' onClick='$(this).parent().remove();'>x</button>" + "</div>")
        }
       

        // $(".check").click((e) => {
        //     $("#nav-disabled").append("<div class='d-flex lists'>" + "<inputVal type='checkbox' class='check' checked>" + "<li>" + inputVal + "</li>" + "<button class='btnx' onClick='$(this).parent().remove();'>x</button>" + "</div>");
        //  });
    })


    $(".check").change(function message() {
        alert('hello')
    })
})

function hello() {
    let inputVal = $("#inputVal").val()

    $('#destination').append("<div class='d-flex lists'>" + "<input type='checkbox' class='check' checked onClick='$(this).parent().remove();'>" + "<li>" + inputVal + "</li>" + "<button class='btnx' onClick='$(this).parent().remove();'>x</button>" + "</div>")
}


function hello() {
    let inputVal = $("#inputVal").val()

    $('#destination2').append("<div class='d-flex lists'>" + "<input type='checkbox' class='check' checked onClick='hey();'>" + "<li>" + inputVal + "</li>" + "<button class='btnx' onClick='$(this).parent().remove();'>x</button>" + "</div>")
}



// if ($(".check").checked = true){
//     $(this).parent().detatch().appendTo(".destination");
// }

// $(".check").click((e) => {
//    

// })
    
// $(".list").addEventListener()

// $(".list").addEventListener('click', remove)

// function remove(){
//     let closeBtn = $(".btnx")
//     closeBtn.click((e) => {
        
//     })
// }
// onClick= '$(this).parent().appendTo('.destination');'