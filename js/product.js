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

  let trLightGreen = () => {
    for (let tr = 1; tr < tableTr.length; tr++) {
      if (tableTr[tr].rowIndex % 2 === 0) {
        tableTr[tr].classList.add('lightgreen');
      } else {
        tableTr[tr].classList.remove('lightgreen');
      }
    }
  };

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
    let selectOptionTr = selectOptionLi[a].closest('tr');
    selectOptionLi[a].addEventListener('click', () => {
      switch (selectOptionLi[a].textContent) {
        case 'Published':
          selectBtn.value = 'PUBLISHED';
          selectLiBtn.textContent = 'PUBLISHED';
          statusColor();
          trLightGreen();
          break;
        case 'Unpublished':
          selectBtn.value = 'UNPUBLISHED';
          selectLiBtn.textContent = 'UNPUBLISHED';
          statusColor();
          trLightGreen();
          break;
        default:
          selectOptionTr.remove();
          trLightGreen();
          break;
      }
    });
  }
  trLightGreen();
  statusColor();
  //check選單
  for (let i = 0; i < tableCheckboxLabel.length; i++) {
    //表單label 與 input連動
    let tableCheckboxId = 'product' + i;
    tableCheckboxLabel[i].setAttribute('for', tableCheckboxId);
    tableCheckboxInput[i].setAttribute('id', tableCheckboxId);
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

    tableCheckboxLabel[i].addEventListener('click', () => {
      tableCheckboxInput[i].setAttribute('checked', 'checked');
      tableCheckboxInput[i].checked
        ? tableCheckboxInput[i].setAttribute('checked', 'checked')
        : tableCheckboxInput[i].removeAttribute('checked', 'checked');
    });
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
  //增加選項modal部分
  let addLabel = document.querySelector('add_image>form>label');
  let addInput = document.querySelector('#addImage');
  let addInputId = addInput.getAttribute('id');
  let preview = document.querySelector('.image_previews');
  let defaultImg = document.querySelector('.image_previews>img');
  //照片上傳
  function readURL(input) {
    let files = input.files;
    if (files && files[0])
      for (let f = 0; f < files.length; f++) {
        //需要放在循環裡，因為每次循環會重新製造一個新的
        //放外面會報錯
        let reader = new FileReader();
        reader.addEventListener(
          'load',
          e => {
            let image = new Image();
            image.src = e.target.result;
            image.alt = input.files[0].name;
            //插入在預設之前
            preview.insertBefore(image, defaultImg);
          },
          false
        );
        reader.readAsDataURL(addInput.files[f]);
      }
  }
  addInput.addEventListener(
    'change',
    function() {
      readURL(this);
    },
    false
  );
  let addBtn = document.querySelector('.add_product_btn');
  let modal = document.querySelector('.add_modal');
  let closeBtn = document.querySelector('.close_btn');
  let specification = document.querySelector('.specification_info');
  let addNewBtn = document.querySelector('.add_new_btn');
  let newLi = document.createElement('li');
  let specificationContentDefault = `<label for="size0">
    <span>Size</span>
    <select name="size0" id="size0">
      <option value="L">L</option>
      <option value="M">M</option>
      <option value="S">S</option>
    </select>
    </label>
    <label for="flavor0"><span>Flavor</span><input type="text" id="flavor0" name="flavor0"></label>
    <label for="inventory0"><span>Inventory</span><input type="number" id="inventory0" name="inventory0"></label>
    `;
  //目前增加行數
  let count = 0;
  let addNewContent = () => {
    count++;
    let newLi = document.createElement('li');
    let specificationContent = `<label for="${'size' + count}">
    <span>Size</span>
    <select name="${'size' + count}" id="${'size' + count}">
      <option value="L">L</option>
      <option value="M">M</option>
      <option value="S">S</option>
    </select>
    </label>
    <label for="${'flavor' +
      count}"><span>Flavor</span><input type="text" name="${'flavor' +
      count}" id="${'flavor' + count}"></label>
    <label for="${'inventory' +
      count}"><span>Inventory</span><input type="number" name="${'inventory' +
      count}" id="${'inventory' + count}"></label>
    `;
    newLi.innerHTML += specificationContent;
    specification.appendChild(newLi);
  };
  addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    //一開始先加一個(裡面沒有才新增)
    if (!specification.children.length) {
      newLi.innerHTML = specificationContentDefault;
      specification.appendChild(newLi);
    }
    if (!preview.children.length) {
      let newImage = document.createElement('img');
      newImage.setAttribute('src', '');
      newImage.setAttribute('alt', '');
      preview.appendChild(newImage);
    }
  });
  //按下按鈕會加入新的規格
  addNewBtn.addEventListener('click', function() {
    addNewContent();
  });
  //清空
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    specification.innerHTML = '';
    preview.innerHTML = '';
    count = 0;
  });
  window.addEventListener('click', function(evt) {
    if (evt.target == modal) {
      modal.style.display = 'none';
      specification.innerHTML = '';
      preview.innerHTML = '';
    }
  });
  $.ajax({
    url: '../dessert.json',
    type: 'get',
    success: function(res) {
      console.log(res);
    },
    error: function(xhr, resp, text) {
      console.log(xhr, resp, text);
    }
  });
  let saveDraft = document.querySelector('#save_draft');
  let publishedBtn = document.querySelector('#submit_btn');
  publishedBtn.addEventListener('click', event => {
    //在事件之外調用的話會獲取不到值
    let productName = document.getElementById('product_name').value;
    let imageSrc = document
      .querySelectorAll('.image_previews>img')[0]
      .getAttribute('src');
    let original = document.querySelector('#original').value;
    let discount = document.querySelector('#discount').value;
    let addTr = () => {
      let tbody = document.querySelector('.product_table>tbody');
      console.log(tbody);
      let newTr = document.createElement('tr');
      //下面要接API
      let newTdContent = `<td class="table_checkbox">
        <input type="checkbox">
        <label></label>
      </td>
      <td class="product">
        <img src="${imageSrc}">
        <span>${productName}</span>
      </td>
      <td class="original">$${original}</td>
      <td class="discount">$${discount}</td>
      <td class="information">
        <ul>
          <li>
            <div class="size">L</div>
            <ul class="flavor">
              <li>香草</li>
              <li>焦糖</li>
            </ul>
            <ul class="inventory">
              <li>15</li>
              <li>20</li>
            </ul>
          </li>
          <li>
            <div class="size">M</div>
            <ul class="flavor">
              <li>香草</li>
              <li>焦糖</li>
            </ul>
            <ul class="inventory">
              <li>15</li>
              <li>20</li>
            </ul>
          </li>
          <li>
            <div class="size">S</div>
            <ul class="flavor">
              <li>香草</li>
              <li>焦糖</li>
            </ul>
            <ul class="inventory">
              <li>15</li>
              <li>20</li>
            </ul>
          </li>
        </ul>
      </td>
      <td class="status">
        <button class="status_Btn" value="PUBLISHED">PUBLISHED<span class="triangle_bottom"></span>
          <ul class="status_option">
            <a href="javascript:;" class="Published">
              <li>Published</li>
            </a>
            <a href="javascript:;" class="Unpublished">
              <li>Unpublished</li>
            </a>
            <a href="javascript:;" class="delect">
              <li>Delect</li>
            </a>
          </ul>
        </button>
      </td>`;
      newTr.innerHTML = newTdContent;
      tbody.appendChild(newTr);
    };

    //送出表單
    let submitForm = () => {
      let form1 = document.querySelector('#form1');
      form1.submit();
      return false;
    };

    function post_data() {
      $.ajax({
        url: 'http://localhost:3000/dessert',
        type: 'POST',
        data: $('form').serialize(),
        success: function(res) {
          if (res.success === true) {
            alert('傳送成功');
            console.log(res);
          } else {
            console.log(res);
          }
        },
        error: function(xhr, resp, text) {
          console.log(xhr, resp, text);
        }
      });

      return false; //重要!一定要写
    }
    if (preview.children.length === 0) {
      alert('請傳照片');
    } else {
      post_data();
      submitForm();
      addTr();
    }
    specification.innerHTML = '';
    preview.lastChild.remove();
    if (specification.innerHTML === '') {
      specification.insertAdjacentHTML(
        'beforeend',
        specificationContentDefault
      );
    }
  });
})();
