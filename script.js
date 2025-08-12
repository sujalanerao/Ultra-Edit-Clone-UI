    (function () {
      const navToggle = document.getElementById('nav-toggle');
      const primaryMenu = document.getElementById('primary-menu');

      navToggle.addEventListener('click', () => {
        const visible = primaryMenu.getAttribute('data-visible') === 'true';
        primaryMenu.setAttribute('data-visible', String(!visible));
        navToggle.setAttribute('aria-expanded', String(!visible));
        // toggle class for CSS animations
        primaryMenu.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!primaryMenu.contains(e.target) && !navToggle.contains(e.target)) {
          primaryMenu.setAttribute('data-visible', 'false');
          primaryMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    })();

    
    function handleSearch(e) {
      e.preventDefault();
      const q = document.getElementById('search-input').value.trim();
      if (!q) {
        alert('Please enter search terms.');
        return false;
      }
      
      window.location.hash = 'result';
      return false;
    }

    
    (function () {
      const form = document.getElementById('subscribe-form');
      const input = document.getElementById('subscribe-email');
      const error = document.getElementById('subscribe-error');
      const success = document.getElementById('subscribe-success');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        error.textContent = '';
        success.textContent = '';

        const email = input.value.trim();
        if (!email) {
          error.textContent = 'Please enter your email address.';
          input.focus();
          return;
        }
       

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
          error.textContent = 'Please enter a valid email address.';
          input.focus();
          return;
        }

        
        success.textContent = 'Thanks — you are subscribed (demo).';
        form.reset();
      });
    })();

    
    document.getElementById('year').textContent = new Date().getFullYear();