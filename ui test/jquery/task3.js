$(document).ready(function(){
  
    $("#submit").click(function(event){
        event.preventDefault()
        let a= $("#ip1").val()
        let b=$("#ip2").val()
        let c=$("#ip3").val()
        console.log(a)
        $(".con").text(a)
        $(".con1").text(b)
        $(".con2").text(c)

    });
})