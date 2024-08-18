document.addEventListener('DOMContentLoaded', function() {
    
    const scrollLinks = document.querySelectorAll('.nav-links a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });



    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObject = Object.fromEntries(formData.entries());

        console.log(formDataObject); 

        
        setTimeout(() => {
            alert('Message sent successfully!');
            contactForm.reset(); 
        }, 1000);
    });
});