
document.addEventListener('DOMContentLoaded', function(){
  const pom = document.getElementById('openPomodoro');
  if(pom){
    pom.addEventListener('click', function(e){
      e.preventDefault();
      alert('Pomodoro: 25 minutes focus, then 5 minutes break.');
    });
  }

  function hoverIn(e){
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
  }
  function hoverOut(e){
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'none';
  }

  const hoverables = document.querySelectorAll('.hoverable, button, .nav-link, a.nav-link');
  hoverables.forEach(node => {
    node.addEventListener('mouseover', hoverIn);
    node.addEventListener('mouseout', hoverOut);
    node.addEventListener('focus', hoverIn);
    node.addEventListener('blur', hoverOut);
  });
});

function validateContact(){
  const msg = document.getElementById('cmessage').value.trim();
  if(msg.length < 20){
    alert('Message must be at least 20 characters.');
    return false;
  }

  alert('Message submitted (demo).');
  return false; 
}
if(document.getElementById('registerForm')){
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', function(e){
    const pwd = document.getElementById('password').value || '';
    const cp = document.getElementById('confirm_password').value || '';
    if(pwd !== cp){
      e.preventDefault();
      alert('Passwords do not match.');
      return false;
    }
    if(!/(?=.*[A-Za-z])(?=.*\d).{8,}/.test(pwd)){
      e.preventDefault();
      alert('Password must be at least 8 characters and include at least one letter and one number.');
      return false;
    }
    const postcode = document.getElementById('postcode').value || '';
    if(!/^\d{4}$/.test(postcode)){
      e.preventDefault();
      alert('Postcode must be 4 digits.');
      return false;
    }
    const phone = document.getElementById('phone').value || '';
    if(!/^\d{8,15}$/.test(phone)){
      e.preventDefault();
      alert('Phone must be digits (8-15).');
      return false;
    }
  });
}

document.addEventListener('contextmenu', function(e){
  if(e.target.closest('.hero') || e.target.tagName === 'IMG'){
    e.preventDefault();
  }
});
