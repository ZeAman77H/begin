// Select all audio elements and their parent list items
const audioElements = document.querySelectorAll(".audio-player");
const listItems = document.querySelectorAll(".audio-item");

// Add event listeners to each audio element
audioElements.forEach((audio, index) => {
  audio.addEventListener("play", () => {
    // Pause other audio files
    audioElements.forEach((otherAudio, otherIndex) => {
      if (otherIndex !== index) {
        otherAudio.pause();
        otherAudio.currentTime = 0; // Reset to the beginning
      }
    });

    // Highlight the currently playing item
    listItems.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.style.backgroundColor = "#f0f8ff"; // Light blue
      } else {
        item.style.backgroundColor = "#fff"; // White
      }
    });
  });

  // Remove highlight when the audio stops
  audio.addEventListener("pause", () => {
    listItems[index].style.backgroundColor = "#fff"; // White
  });
});

// Select the search bar and audio items
const searchBar = document.getElementById('search-bar');
const audioItems = document.querySelectorAll('.audio-item');

// Add an event listener to the search bar to filter audio items
searchBar.addEventListener('input', function () {
  const query = searchBar.value.toLowerCase(); // Get the search query

  // Loop through each audio item and hide/show based on the query
  audioItems.forEach(item => {
    const title = item.querySelector('p').textContent.toLowerCase();
    
    // If the title includes the query, show the item, otherwise hide it
    if (title.includes(query)) {
      item.style.display = 'flex';  // Show item (changed to 'flex' for consistency with the first snippet)
    } else {
      item.style.display = 'none';  // Hide item
    }
  });
});
