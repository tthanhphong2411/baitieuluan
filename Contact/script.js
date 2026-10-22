
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Đã sao chép! ✓";
        tooltip.style.backgroundColor = "#3c523c"; 
        
        setTimeout(() => {
            tooltip.innerHTML = "Sao chép!";
            tooltip.style.backgroundColor = ""; 
        }, 2000);
    }).catch(err => {
        console.error('Không thể sao chép: ', err);
    });
}

function checkStoreStatus() {
    const now = new Date();
    const hour = now.getHours();
    const statusContainer = document.querySelector('.contact-header');
    
    // Giả sử giờ mở cửa từ 7:00 sáng đến 22:30 đêm
    const openTime = 7;
    const closeTime = 22;

    const statusBadge = document.createElement('div');
    statusBadge.className = 'status-badge';

    if (hour >= openTime && hour < closeTime) {
        statusBadge.innerHTML = `<span style="color: #3c523c; font-weight: bold;">● Đang mở cửa</span> · Đợi bạn ghé chơi!`;
    } else {
        statusBadge.innerHTML = `<span style="color: #9c2b2a; font-weight: bold;">○ Đã đóng cửa</span> · Hẹn bạn mai nhé!`;
    }

    statusContainer.appendChild(statusBadge);
}

document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.borderColor = "var(--color-accent)";
    });
    item.addEventListener('mouseleave', () => {
        item.style.borderColor = "var(--color-border)";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    checkStoreStatus();
});