// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element and button to open it
    const modal = document.getElementById('contactModal');
    const openModalLink = document.querySelector('a[href="#contactModal"]');

    // Get the close button inside the modal
    const closeBtn = document.querySelector('.close');

    // Open the modal when the link is clicked
    openModalLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default behavior of the anchor link
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when the background outside the modal is clicked
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});