// $(document).ready(function()
// {
//     $("#btn1").click(function()
//     {
//         $
//     }
//     )    
// })
$(document).ready(function()
{
    $("#btn1").click(function()
    {
        $("btn1").append("x");
    });
    $("#btn2").click(function()
    {
        $("").append("<li>Appended item</li>");
    });
});

function x_function()
{
    var copyText=document.getValueById("btn1");
    
    alert("Copied the text: " + copyText.value);
}