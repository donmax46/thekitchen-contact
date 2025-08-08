// rotating quotes (header)
(function(){
  const quotes = [
    "Not every kitchen is for food.",
    "We call it ritual.",
    "Only those who know, enter.",
    "Fire meets silence.",
    "The menu is not on the wall."
  ];
  const qEl = document.getElementById && document.getElementById('rotQuote');
  function tick(){ if(!qEl) return; qEl.textContent = quotes[Math.floor(Math.random()*quotes.length)]; }
  tick(); setInterval(tick,7000);
})();

// Modal logic: open with data from clicked .item
(function(){
  function qs(sel, root=document) { return root.querySelector(sel); }
  function qsa(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <header><h2 id="modalTitle"></h2></header>
      <div class="body" id="modalBody"></div>
      <div class="actions">
        <a href="#" class="btn" id="learnMore" target="_blank" rel="noopener">Learn more</a>
        <button class="btn" id="closeModal">Close</button>
      </div>
    </div>`;
  document.body.appendChild(backdrop);
  const modalTitle = qs('#modalTitle', backdrop);
  const modalBody = qs('#modalBody', backdrop);
  const closeBtn = qs('#closeModal', backdrop);
  const learnBtn = qs('#learnMore', backdrop);

  function openModal(data){
    modalTitle.textContent = data.title;
    modalBody.innerHTML = `
      <p><strong>Vibe:</strong> ${data.vibe}</p>
      <p><strong>Context:</strong> ${data.context}</p>
      <p><strong>Harm reduction:</strong> ${data.harm}</p>
    `;
    learnBtn.href = data.learn || '#';
    backdrop.style.display = 'flex';
    setTimeout(()=> backdrop.classList.add('open'),20);
    // prevent scroll
    document.documentElement.style.overflow = 'hidden';
  }
  function closeModal(){
    backdrop.classList.remove('open');
    setTimeout(()=>{ backdrop.style.display='none'; document.documentElement.style.overflow=''; },220);
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function(e){
    if(e.target === backdrop) closeModal();
  });

  // wire items
  document.addEventListener('DOMContentLoaded', function(){
    qsa('.item').forEach(el=>{
      el.addEventListener('click', function(){
        // get data attributes
        const data = {
          title: el.dataset.title || el.querySelector('.name').textContent,
          vibe: el.dataset.vibe || el.dataset.vibe || '—',
          context: el.dataset.context || '',
          harm: el.dataset.harm || '',
          learn: el.dataset.learn || '#'
        };
        openModal(data);
      });
    });
  });
})();
