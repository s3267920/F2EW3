(function() {
  let checkOption = document.querySelector('#check_more_option');
  let checkIcon = document.querySelector('#check_option_icon');
  let checkMenu = document.querySelector('#select_menu');
  //標籤出現
  checkOption.addEventListener('click', () => {
    if (checkIcon.style.display === 'none') {
      checkIcon.style.display = 'flex';
      checkMenu.style.display = 'flex';
    } else {
      checkIcon.style.display = 'none';
      checkMenu.style.display = 'none';
    }
  });
  let editSectionOption = document.querySelector('.edit_section > a');
  let editSectionMenu = document.querySelector('#edit_section_menu');
  //下拉式選單
  editSectionOption.addEventListener('click', () => {
    if (editSectionMenu.style.display === 'none') {
      editSectionMenu.style.display = 'flex';
    } else {
      editSectionMenu.style.display = 'none';
    }
  });
  document.addEventListener('click', e => {
    //點擊其他地方後選單會隱藏
    if (e.target === document.documentElement) {
      editSectionMenu.style.display = 'none';
      checkIcon.style.display = 'none';
      checkMenu.style.display = 'none';
    }
  });
})();
