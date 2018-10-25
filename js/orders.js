//選單部分
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
    editSectionMenu.style.display === 'none'
      ? (editSectionMenu.style.display = 'flex')
      : (editSectionMenu.style.display = 'none');
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
//表格部分
(function() {
  let data = [
    'Order ID',
    'Customer',
    'Product',
    'Total',
    'Add to Cart',
    'Check-out',
    'Address',
    'Phone',
    'Email',
    'Status'
  ];
  let editSectionValue = document.querySelectorAll(
    '#edit_section_menu >li >input'
  );
  let tableTitle = document.querySelectorAll('.table_title');
  let tableTr = document.querySelectorAll('tr');
  let tableContent = document.querySelectorAll('.table_content')[0].rows;

  for (let i = 0; i < editSectionValue.length; i++) {
    editSectionValue[i].addEventListener('click', () => {
      //加入已勾選狀態
      editSectionValue[i].checked
        ? editSectionValue[i].setAttribute('checked', 'checked')
        : editSectionValue[i].removeAttribute('checked', 'checked');
      //勾選的話就顯示，不然就隱藏
      for (let k = 1; k < tableTr.length; k++) {
        if (editSectionValue[i].value == tableTr[0].cells[i + 1].textContent) {
          // console.log(editSectionValue[i].value);
          if (editSectionValue[i].checked) {
            tableTr[0].cells[i + 1].style.display = 'inline-table';
            tableTr[k].cells[i + 1].style.display = 'inline-table';
          } else {
            tableTr[0].cells[i + 1].style.display = 'none';
            tableTr[k].cells[i + 1].style.display = 'none';
          }
        }
      }
    });
    //如果選單沒勾選的話就隱藏
    for (let k = 1; k < tableTr.length; k++) {
      if (editSectionValue[i].value == tableTr[0].cells[i + 1].textContent) {
        if (!editSectionValue[i].checked) {
          tableTr[0].cells[i + 1].style.display = 'none';
          tableTr[k].cells[i + 1].style.display = 'none';
        }
      }
      if (tableTr[k].rowIndex % 2 == 0) {
        tableTr[k].classList.add('lightgreen');
      }
      // console.log(tableTr[k]);
    }
  }

  //Status狀態
  let statusBtn = document.querySelectorAll('.status_Btn');
  let statusList = document.querySelectorAll('.status_select');
  for (let j = 0; j < statusBtn.length; j++) {
    statusBtn[j].addEventListener('click', () => {
      statusList[j].style.display === 'flex'
        ? (statusList[j].style.display = 'none')
        : (statusList[j].style.display = 'flex');
    });
  }
  // console.log(tableTr);
})();
