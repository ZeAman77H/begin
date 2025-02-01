// Search functionality for filtering audio items
const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function () {
  const query = searchBar.value.toLowerCase();
  const audioItems = document.querySelectorAll('.audio-item');

  audioItems.forEach(item => {
    const title = item.querySelector('p').textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = 'flex';  // Show item
    } else {
      item.style.display = 'none';  // Hide item
    }
  });
});
