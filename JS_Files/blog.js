document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true,
    });

    // Newsletter form submission
    const form = document.getElementById('newsletter-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                status.textContent = 'Thanks for subscribing!';
                status.style.color = 'white';
                form.reset();
            } else {
                status.textContent = 'Oops! There was a problem. Please try again.';
                status.style.color = '#ff4d4d';
            }
        });
    }

    // Firebase setup (Realtime Database)
    const firebaseConfig = {
        apiKey: "AIzaSyA_w9d7COnOIu5fXLKE8IKubqR5SboMXZw",
        authDomain: "brhs-chess-blog.firebaseapp.com",
        databaseURL: "https://brhs-chess-blog-default-rtdb.firebaseio.com",
        projectId: "brhs-chess-blog",
        storageBucket: "brhs-chess-blog.appspot.com",
        messagingSenderId: "895543826957",
        appId: "1:895543826957:web:96a64d211e6797aafd5344"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.database();

    // Keep track of which posts have been counted during this session
    const viewedPosts = new Set();

    // Blog post expand/collapse and view tracking
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const blogPost = button.closest('.blog-post');
            const postId = blogPost?.dataset?.postId;
            if (!postId) return;

            const isActive = blogPost.classList.contains('active');
            blogPost.classList.toggle('active');
            button.textContent = isActive ? 'Read More' : 'Read Less';

            // Only increment view count when opening the post
            // and only once per session
            if (!isActive && !viewedPosts.has(postId)) {
                const span = blogPost.querySelector('.view-count');
                const viewRef = db.ref(`views/${postId}`);

                viewRef.transaction(current => {
                    if (typeof current !== 'number') return 1;
                    return current + 1;
                }).then(result => {
                    if (result.committed) {
                        span.textContent = result.snapshot.val();
                        viewedPosts.add(postId); // mark as viewed
                    }
                }).catch(err => {
                    console.error('Error updating view count:', err);
                });
            }
        });
    });

    // Initialize current view counts when page loads
    const viewCounts = document.querySelectorAll('.view-count');
    viewCounts.forEach(span => {
        const post = span.closest('.blog-post');
        const postId = post?.dataset?.postId;
        if (!postId) return;

        const viewRef = db.ref(`views/${postId}`);
        viewRef.once('value').then(snapshot => {
            span.textContent = snapshot.val() || 0;
        }).catch(() => {
            span.textContent = 0;
        });
    });
});
