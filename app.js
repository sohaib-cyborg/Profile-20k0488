// JavaScript for filtering projects
document.getElementById('techFilter').addEventListener('input', function () {
    var filter = this.value.toLowerCase();
    var projectCards = document.getElementsByClassName('project-card');

    for (var i = 0; i < projectCards.length; i++) {
        var technology = projectCards[i].getAttribute('data-technology').toLowerCase();
        var display = technology.includes(filter) ? '' : 'none';
        projectCards[i].style.display = display;
    }
});
