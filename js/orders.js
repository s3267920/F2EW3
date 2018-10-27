//選單部分
(function() {
  let checkOption = document.querySelector('#check_more_option');
  let checkIcon = document.querySelector('#check_option_icon');
  let checkMenu = document.querySelector('#select_menu');
  let checkAllBox = document.querySelector('#all');
  //下箭頭選單
  checkOption.addEventListener('click', () => {
    checkMenu.style.display === 'none'
      ? (checkMenu.style.display = 'flex')
      : (checkMenu.style.display = 'none');
  });
  //勾選後出現標籤圖樣
  checkAllBox.addEventListener('click', () => {
    checkMenu.style.display = 'flex';
    checkAllBox.checked
      ? (checkIcon.style.display = 'flex')
      : (checkIcon.style.display = 'none');
    checkMenu.style.display === 'none'
      ? (checkMenu.style.display = 'flex')
      : (checkMenu.style.display = 'none');
  });
  //點擊標籤出現選單
  checkIcon.addEventListener('click', () => {
    checkMenu.style.display === 'none'
      ? (checkMenu.style.display = 'flex')
      : (checkMenu.style.display = 'none');
  });
  let editSectionOption = document.querySelector('.edit_section > a');
  let editSectionMenu = document.querySelector('#edit_section_menu');
  //右邊勾選選單
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
  let editSectionValue = document.querySelectorAll(
    '#edit_section_menu >li >input'
  );
  let tableTitle = document.querySelectorAll('.table_title');
  let tableTr = document.querySelectorAll('tr');
  let tableTd = document.querySelectorAll('tr>td');
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
      // console.log(tableTd);
    }
  }

  //Status狀態
  let statusLi = document.querySelectorAll('.status_select >a>li');
  let statusBtn = document.querySelectorAll('.status_Btn');
  let statusSpan = document.querySelectorAll('.status_Btn >span');
  let statusList = document.querySelectorAll('.status_select');

  for (let j = 0; j < statusBtn.length; j++) {
    statusBtn[j].addEventListener('click', () => {
      statusList[j].style.display === 'flex'
        ? ((statusList[j].style.display = 'none'),
          statusSpan[j].classList.remove('triangle_top'),
          statusSpan[j].classList.add('triangle_bottom'))
        : ((statusList[j].style.display = 'flex'),
          statusSpan[j].classList.remove('triangle_bottom'),
          statusSpan[j].classList.add('triangle_top'));
    });
    document.addEventListener('click', eve => {
      if (eve.target !== statusBtn[j] && eve.target !== statusList[j]) {
        statusList[j].style.display = 'none';
        statusSpan[j].classList.remove('triangle_top');
        statusSpan[j].classList.add('triangle_bottom');
      }
    });
    //顯示什麼就是什麼顏色
    let color = () => {
      for (let i = 0; i < editSectionValue.length; i++) {
        let statusBtnTr = statusBtn[j].parentNode.parentNode;
        switch (statusBtn[j].value) {
          case 'PAID':
            statusBtn[j].classList.add('green');
            statusBtn[j].classList.remove('orange', 'gray', 'skyblue');
            statusBtnTr.children[i].classList.remove('doneStyle');
            statusBtnTr.classList.remove('unpaidStyle');
            break;
          case 'UNPAID':
            statusBtn[j].classList.add('gray');
            statusBtnTr.classList.add('unpaidStyle');
            statusBtnTr.children[i].classList.remove('doneStyle');
            break;
          case 'SHIPPING':
            statusBtn[j].classList.add('orange');
            statusBtn[j].classList.remove('green', 'gray', 'skyblue');
            statusBtnTr.children[i].classList.remove('doneStyle');
            statusBtnTr.classList.remove('unpaidStyle');
            break;
          default:
            statusBtn[j].classList.add('skyblue');
            statusBtnTr.children[i].classList.add('doneStyle');
            statusBtnTr.classList.add('unpaidStyle');
            statusBtn[j].classList.remove('green', 'gray', 'orange');
            break;
        }
      }
    };
    for (let l = 0; l < statusLi.length; l++) {
      let statusLiBtn = statusLi[l].parentNode.parentNode.parentNode.firstChild;
      statusLi[l].addEventListener('click', function() {
        statusLi[l].textContent === 'Paid'
          ? ((statusLiBtn.textContent = 'PAID'),
            (statusLiBtn.parentNode.value = 'PAID'),
            color())
          : statusLi[l].textContent === 'Shipping'
            ? ((statusLiBtn.textContent = 'SHIPPING'),
              (statusLiBtn.parentNode.value = 'SHIPPING'),
              color())
            : statusLi[l].textContent === 'Unpaid'
              ? ((statusLiBtn.textContent = 'UNPAID'),
                (statusLiBtn.parentNode.value = 'UNPAID'),
                color())
              : ((statusLiBtn.textContent = 'DONE'),
                (statusLiBtn.parentNode.value = 'DONE'),
                color());
      });
      // console.log(statusBtn[j].parentElement.parentElement);
    }

    color();
    // console.log(statusBtn[j]).parentElement.parentElement.children[i]);
  }
})();
