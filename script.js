
//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', function() {
  const selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});