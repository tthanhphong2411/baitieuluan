document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('starRating');
    const stars = starContainer.querySelectorAll('.star-item');
    const ratingInput = document.getElementById('selectedRating');
    const feedbackForm = document.getElementById('feedbackForm');

    let currentRating = 0;

    
    stars.forEach((star, index) => {
        // Sự kiện Click: Chốt số sao
        star.addEventListener('click', () => {
            currentRating = index + 1;
            ratingInput.value = currentRating;
            updateStars(currentRating);
        });

        
        star.addEventListener('mouseover', () => {
            updateStars(index + 1);
        });

        
        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });
    });

        function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
                star.textContent = '★';
            } else {
                star.classList.remove('active');
                star.textContent = '☆';
            }
        });
    }

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn trang tải lại

        const name = document.getElementById('userName').value.trim();
        const message = document.getElementById('userMessage').value.trim();
        const rating = ratingInput.value;

                if (rating === "0") {
            showNotification("Bạn ơi, hãy chọn số sao đánh giá nhé!", "error");
            return;
        }

        
        const submitBtn = feedbackForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "ĐANG GỬI...";
        submitBtn.disabled = true;

        
        setTimeout(() => {
            console.log("Feedback nhận được:", { name, rating, message });
            
            showNotification(`Cảm ơn ${name}! Tự Do đã nhận được phản hồi của bạn.`, "success");

            
            feedbackForm.reset();
            currentRating = 0;
            ratingInput.value = "0";
            updateStars(0);
            
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    
    function showNotification(msg, type) {
        // Bạn có thể thay bằng Toast hoặc SweetAlert. Ở đây dùng alert cơ bản:
        alert(msg);
    }
});