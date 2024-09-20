// Thêm hiệu ứng cuộn mượt khi bấm vào các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiển thị thông báo khi cuộn đến phần kết luận
window.addEventListener('scroll', function() {
    let conclusionSection = document.getElementById('conclusion');
    let conclusionPosition = conclusionSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (conclusionPosition < screenPosition) {
        alert("Bạn đã đến phần kết luận!");
    }
});