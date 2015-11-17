/* Add items to the list */
function addItem() {
    var itemValue = $('#add-item').val();
    if( (itemValue == "") || (itemValue == " ") || (itemValue == "  ") ) {
		alert("Please add a valid product");
	}
	else {
    //dynamicaly create one row inside the shopping list 
	var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemValue + '</span><button class="delete" id="remove-button">x</button></li>');
    $('#list-item').append(row);
    }
    //empty the input box after submit
	$('#add-item').val('');
}






/* Clear items from the list */
function clearAllItems() {
    $('#list-item').empty();
}




/* Delete item one at a time */
function deleteItem() {
   $(this).parent().remove();
}



/* After click the items mark off */
function clickItem() {
   $(this).parent().toggleClass('checked');
}


$(document).ready(function() {
 //on click of the add to list button id add-button action addItem()
    $('#add-button').on('click', addItem);
 //on click of the add to list button id clear-all-items action clearAllItems()
    $('#clear-all-items').on('click', clearAllItems);
});

/*on ENTER add item */
	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addItem();
        }
	});



 //on click of the add to list button class checkbox action clickItem()
$(document).on('click', '.checkbox', clickItem);

 //on click of the add to list button id remove-button action deleteItem()
$(document).on('click', '#remove-button', deleteItem);