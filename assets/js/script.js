// toggle complete
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})

// delete
$('ul').on('click', 'i.fa-times', function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})

// add new todo
$('input[type=text]').keypress(function(event){
    if($(this).val() !== '') {
        if(event.which === 13 ) {
            let newTodo = $(this).val();
            $(this).val('');
            $('ul').append(`<li class="list-group-item">${newTodo} <i class="fa fa-times" aria-hidden="true"></i></li>`)
        }
    }
})

// add new todo button
$('#addTodoBtn').on('click', function () {
    if($('input[type=text]').val() !== '') {
            let newTodo = $('input[type=text]').val();
            $('input[type=text]').val('');
            $('ul').append(`<li class="list-group-item d-flex justify-content-between align-items-center">${newTodo} <i class="fa fa-times" aria-hidden="true"></i></li>`)
    }
})

//add new note button
$('#addNoteBtn').on('click', function () {
    $('.note-area').append('<div class="draggable resizable card note text-dark flex-row-reverse"><i class="fa fa-times" aria-hidden="true"></i><textarea name="" id="" cols="30" rows="10" placeholder="Note..."></textarea></div>')
    setDraggable()
    setResizable()
    setDelete()
});

// delete note
function setDelete() {
    $('.note').on('click', 'i.fa-times', function(){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })
    })
}


function setDraggable() {
    $( ".draggable" ).resizable().draggable({
        grid: [20, 20],
        containment: ".root"
      });
 }

 function setResizable() {
    $( ".resizable" ).resizable({
        grid: 20
      });
  }

setDelete() 
setDraggable()
setResizable()