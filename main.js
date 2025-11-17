function showLastModified() {
    var d = document.lastModified;
    var el = document.getElementById('last-modified');
    if (el) {
        el.innerHTML = 'Last modified: ' + d;
    }
}