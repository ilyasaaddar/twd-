// إضافة إلى السلة (بسيط، يمكن توسيعه)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى السلة!');
        // يمكن إضافة منطق حقيقي هنا، مثل تحديث عداد السلة
    });
});

// تمرير سلس للأقسام
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// بحث بسيط (placeholder)
document.querySelector('.search-bar').addEventListener('input', (e) => {
    console.log('البحث عن:', e.target.value);
    // يمكن إضافة منطق بحث حقيقي
});
