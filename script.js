document.getElementById('addItemButton').addEventListener('click', function() {
    var itemInput = document.getElementById('itemInput');
    var itemText = itemInput.value.trim();
    
    if (itemText !== '') {
        var itemList = document.getElementById('itemList');
        
        var newItem = document.createElement('li');
        newItem.textContent = itemText;
        
        itemList.appendChild(newItem);
        
        itemInput.value = '';
        itemInput.focus();
    } else {
        alert('Por favor, insira um item.');
    }
});

document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addItemButton').click();
    }
});
