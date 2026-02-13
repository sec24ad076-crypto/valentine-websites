document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    let scale = 1;

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scale += 0.15;
        yesBtn.style.transform = `scale(${scale})`;
    });
});
