(function() {
  let checkAllBtn = document.querySelector('#all');
  let tableCheckboxLabel = document.querySelectorAll('.table_checkbox>label');
  let tableCheckboxInput = document.querySelectorAll('.table_checkbox>input');
  let checkMore = document.querySelector('#check_more_option');
  let checkIcon = document.querySelector('#check_option_icon');
  let checkSelectOption = document.querySelector('#select_menu');
  let checkSelectA = document.querySelectorAll('#select_menu>li>a');
  let tableTr = document.querySelectorAll('tr');
  let selectOptionLi = document.querySelectorAll('.status_option>a>li');
  //表格部分
  let statusBtn = document.querySelectorAll('.status_Btn');
  let selectOption = document.querySelectorAll('.status_option');
  for (let tr = 1; tr < tableTr.length; tr++) {
    if (tableTr[tr].rowIndex % 2 === 0) {
      tableTr[tr].classList.add('lightgreen');
    }
  }
  for (let btn = 0; btn < statusBtn.length; btn++) {
    selectOption[btn].style.display = 'none';
    statusBtn[btn].addEventListener('click', () => {
      selectOption[btn].style.display === 'none'
        ? (selectOption[btn].style.display = 'flex')
        : (selectOption[btn].style.display = 'none');
    });
    document.addEventListener('click', e => {
      if (e.target === document.documentElement) {
        checkSelectOption.style.display = 'none';
        selectOption[btn].style.display = 'none';
      }
    });
  }
  let statusColor = () => {
    for (let l = 0; l < statusBtn.length; l++) {
      let selectTr = statusBtn[l].parentNode.parentNode;
      if (statusBtn[l].value === 'PUBLISHED') {
        statusBtn[l].classList.add('green');
        statusBtn[l].classList.remove('gray');
        selectTr.classList.remove('unpublished');
      } else if (statusBtn[l].value === 'UNPUBLISHED') {
        statusBtn[l].classList.add('gray');
        statusBtn[l].classList.remove('green');
        selectTr.classList.add('unpublished');
      }
    }
  };
  for (let a = 0; a < selectOptionLi.length; a++) {
    let selectBtn = selectOptionLi[a].parentNode.parentNode.parentNode;
    let selectLiBtn =
      selectOptionLi[a].parentNode.parentNode.parentNode.firstChild;

    selectOptionLi[a].addEventListener('click', () => {
      selectOptionLi[a].textContent === 'Published'
        ? ((selectBtn.value = 'PUBLISHED'),
          (selectLiBtn.textContent = 'PUBLISHED'),
          statusColor())
        : ((selectBtn.value = 'UNPUBLISHED'),
          (selectLiBtn.textContent = 'UNPUBLISHED'),
          statusColor());
    });
  }
  statusColor();
  //check選單
  for (let i = 0; i < tableCheckboxLabel.length; i++) {
    checkMore.addEventListener('click', () => {
      checkSelectOption.style.display === 'none'
        ? (checkSelectOption.style.display = 'flex')
        : (checkSelectOption.style.display = 'none');
    });
    checkIcon.addEventListener('click', () => {
      checkSelectOption.style.display === 'none'
        ? (checkSelectOption.style.display = 'flex')
        : (checkSelectOption.style.display = 'none');
    });
    //表單label 與 input連動
    tableCheckboxLabel[i].setAttribute('for', i);
    tableCheckboxInput[i].setAttribute('id', i);
    checkAllBtn.addEventListener('click', () => {
      checkAllBtn.checked
        ? (tableCheckboxInput[i].setAttribute('checked', 'checked'),
          (checkIcon.style.display = 'flex'),
          (checkSelectOption.style.display = 'none'))
        : (tableCheckboxInput[i].removeAttribute('checked', 'checked'),
          (checkIcon.style.display = 'none'));
    });
    for (let j = 0; j < checkSelectA.length; j++) {
      checkSelectA[j].addEventListener('click', function() {
        for (let other = 0; other < checkSelectA.length; other++) {
          switch (checkSelectA[j].textContent) {
            case 'Select All':
            case 'Unselect All':
            case 'Published':
            case 'Unpublished':
              checkSelectA[other].classList.remove('has_check');
              this.classList.add('has_check');
              break;
            default:
              checkSelectA[other].classList.remove('has_check');
              this.classList.add('has_check');
              break;
          }
        }
        for (let check = 0; check < statusBtn.length; check++) {
          switch (checkSelectA[j].textContent) {
            case 'Select All':
              tableCheckboxInput[i].setAttribute('checked', 'checked');
              break;
            case 'Unselect All':
              tableCheckboxInput[i].removeAttribute('checked', 'checked');
              break;
            case 'Published':
              statusBtn[check].value === 'PUBLISHED'
                ? tableCheckboxInput[check].setAttribute('checked', 'checked')
                : tableCheckboxInput[check].removeAttribute(
                    'checked',
                    'checked'
                  );
              break;
            default:
              statusBtn[check].value === 'UNPUBLISHED'
                ? tableCheckboxInput[check].setAttribute('checked', 'checked')
                : tableCheckboxInput[check].removeAttribute(
                    'checked',
                    'checked'
                  );
              break;
          }
        }
      });
    }
  }
})();
