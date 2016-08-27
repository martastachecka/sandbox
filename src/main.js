/* var $newNode = $('<div>');
var $app = $('#app');
var $allDivs= $('div');
$chosenOne= $('.chosenOne');

$('#app').css({background:'green'}); */

/*

var $container =$('#app');
var $table=$('<table>');

$container.append($table);
for (var i=0; i<8;i++) {
    $table.append($('<tr>'));
}
for (var i=0; i<8;i++){
    $('tr').append($('<td>'));
}
*/

/* Drugie rozwiązanie*/

function createTable(width,height){
var $table=$('<table>');
var $td,$tr;

for (var i=0; i<8;i++){
    $tr=$('<tr>');
    for (var j=0; j<8;j++){
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
$('#app').append($table);
}
createTable(8,8);


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

