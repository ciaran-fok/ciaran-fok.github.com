// Get the checkbox and the block
var checkbox = document.getElementById('checkbox');
var hiddenBlock = document.getElementById('quick-note');
var target = document.getElementById('target')

// Add event listener to checkbox
checkbox.addEventListener('change', function() {
    // If checkbox is checked, display the block; otherwise, hide it
    if (this.checked) {
        hiddenBlock.style.display = 'block';
        target.value = '68g6sgxx60qxyjn1lq66869c';
    } else {
        hiddenBlock.style.display = 'none';
    }
});