document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            // Close all accordions
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.maxHeight = null;
            });

            // Toggle current
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
