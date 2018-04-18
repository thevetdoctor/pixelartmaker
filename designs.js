// Select color input
// Select size input

'use strict';

// define variables

let row = document.getElementById('input_height');
let column = document.getElementById('input_width');
let submit = document.getElementById('submit');
let form = document.getElementById('formPicker');
let col = document.getElementById('colorPicker');

// var row = $('#input_height');
// var column = $('#input_width');

	let r = row.value;
	let c = column.value;

	console.log(r, c);

// state the event listener function for the submit button

// When size is submitted by the user, call makeGrid()

submit.addEventListener('click', function(){
// preventDefault();
	r = row.value;
	c = column.value;
console.log('yeah');
console.log(col.value);
	makeGrid(r, c);
});

    let box = document.getElementById('pixel_canvas');


function makeGrid(row, column) {
box.innerHTML = '<table>';

// Your code goes here!
for(var i = 0; i < row; i++){
	var cell = "<tr>";
	  for(var j =0; j < column; j++){
			(cell += '<td></td>');
		}
		cell += '</tr>';
	box.innerHTML += cell;
	}
	box.innerHTML += '</table>';
}

makeGrid(r, c);

    box.addEventListener('click', function(e){
    	let ev = e.target;
    	ev.style.backgroundColor = col.value;

    })
  box.addEventListener('dblclick', function(e){
    	let ev = e.target;
    	ev.style.backgroundColor = '#fff';

    })

    	// console.log(box.style.backgroundColor);
    	// console.log(ev.innerHTML);
    // col.addEventListener('mouseover', function(e){
    // 	console.log(e.target);
    // 	console.log(e.target.style.color);
    // })


// makeGrid(6, 8);

    // function setTextColor(picker) {
    //     document.getElementsByTagName('body')[0].style.color = '#' + picker.toString()
    // }

// console.log(col.style.backgroundColor);
// console.log(document.body.style.backgroundColor);




