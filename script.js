
function toggleDetails(element){
  const d = element.querySelector('.details');
  d.style.display = d.style.display === 'block' ? 'none' : 'block';
}
function openModal(el){
  const title = el.dataset.title || el.querySelector('strong')?.textContent || 'Item';
  document.getElementById('mTitle').textContent = title;
  document.getElementById('mVibe').textContent = 'Vibe: ' + (el.dataset.vibe || '');
  document.getElementById('mContext').textContent = el.dataset.context || '';
  document.getElementById('mLearn').href = el.dataset.learn || '#';
  const bd = document.getElementById('modalBackdrop');
  bd.style.display = 'flex';
}
function closeModal(ev){
  if(ev && ev.target && ev.target.id !== 'modalBackdrop') return;
  document.getElementById('modalBackdrop').style.display = 'none';
}
