

function createTable(width,height,isEmpty){
    var $table=$('<table>');
    var $td,$tr;

    for (var y=0; y<8;y++){
        $tr=$('<tr>');
        for (var x=0; x<8;x++){
            $td=$('<td>');

            if((i+j)%2===0){
                $td.addClass('black');
            }
            $td.on('click',function(){
                $(this).toggleClass('black');
            });
            $tr.append($td);

        }
        $table.append($tr);
    }
  return $table;
}
createTable(8,8);
$('#app').append()
function makeCheckboard($table){}
$table.find('tr').each(function(y){
    $this.find('td').each(function(x){
        $(this).addClass(
        index % 2=== 0 ?
            'black :'')
})
});
return $table;
}
function makeInteractive($table){}
/*

setInterval(function(){
    var $collection =$('td:not(.black)');
    var n = $collection.length;// lengrth dlatego,że obiekty w tabeli są przedstawiane w tablicy.
    // Jeżeli są przedstawiane w tablicy to,żeby zdefiniować ile jest elementów albo który chcemy wybrać
    //to wybieramy .length albo numer indeksowy
    $('td').eq(
        Math.round(
            Math.random() *n
        )
    ).click()
},1000);

*/