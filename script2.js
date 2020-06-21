function render(data){
	var html = "<div class='comentBox'><div class='leftPanelImg'><img src='images/smile.gif' style='width:100px; height:100px'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
    $('#container').append(html);
}
$(document).ready(function(){
	var coment = [
	{"name":"Shristi Rauniyar", "date":"20 june, 2020", "body":"awosome"}
	];
	  for(var i=0;i<coment.length;i++){
		render(coment[i]);

	   }
	$('#addComent').click(function(){
        var addObj = {
        	"name": $('#name').val(),
        	"date": $('#date').val(),
        	"body": $('#bodyText').val()

        };
        console.log(addObj);
        coment.push(addObj);
        render(addObj);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#bodyText').val('');
	});
});