// resize header to size of browser window, but add a max height for larger screens
var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	// Set header height based on window inner height
	var header = document.querySelector(".header");
	header.style.height = window.innerHeight + "px";

	// Add a max height for very large screens to avoid excessive header size
	if (window.innerHeight > 800) {
		header.style.height = "800px";
	}
})

// set modal time delay before loading, consider user experience
setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

// ensure modal accessibility and focus management
$('#demo-modal').on('shown.bs.modal', function () {
	$('#demo-modal .btn').focus();  // Focus on the button when modal opens
});
