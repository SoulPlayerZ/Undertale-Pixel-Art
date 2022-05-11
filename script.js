const sectionSub = document.querySelector('#sub');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const papyrusSpeak = document.querySelector('.papyrus');
const board = document.getElementById('pixel-board');
const imgFakeEraseBtn = document.querySelector('.erasing-img');
const p = document.querySelector('p');
const clearButton = document.getElementById('clear-board');
const textoH1 = document.getElementById('title');
const eraseButton = document.getElementById('erase');
const header = document.querySelector('header');
const colorBtn = document.querySelector('#new-input-color');
const fakeErase = document.querySelector('#erasing');
const generateBoardButton = document.getElementById("generate-board");
const boardInputNumber = document.getElementById('input-number');
const logoImage = document.getElementById('logo');
const divSelect = document.getElementById('theme');
let printed = false;
const select = document.getElementById('char');

  /* const audioVolume = document.getElementById('audio'); */
  // audio.volume = 0.3;
  // referência de como alterar volume do audio.
  //https://stackoverflow.com/questions/33747398/html-audio-tag-volume
  //Não precisei da const audioVolume ? Oo
  
  function intro() {
    audio.volume = 0.3;
    setTimeout(() => {
      header.style.display = 'flex';
      header.style.marginTop = '400px';
      audio.src = 'undertale-intro.mp3';
        
      setTimeout(() => {
          audio.src = ''
      }, 1700);
    }, 2000);
    setTimeout(() => {
      sectionSub.style.display = 'flex';
      main.style.display = 'flex';
      footer.style.display = 'flex';
      header.style.marginTop = '0px';
      audio.volume = 0.1;
      audio.src = 'megalovania.mp3'
    }, 6000);
  }

  colorBtn.addEventListener('click', () => {
    fakeErase.style.display = 'none';
    eraseButton.style.display = 'flex';
    if (select.value === 'sans') {
      board.style.cursor = 'url(images/sans-genocide-cursor.png), auto';
    }else if (select.value === 'bloood') {
      board.style.cursor = 'url(images/itachi-sharingan.png), auto';
    }else {
      board.style.cursor = 'url(images/flowey-cursor.png), auto'
    }
  });

  function boardByInputNumber(input){
    const board = document.getElementById('pixel-board');
    const select = document.getElementById('char');
    if (select.value === 'sans') {
      board.style.cursor = 'url(images/sans-genocide-cursor.png), auto';
    }else if (select.value === 'bloood') {
      board.style.cursor = 'url(images/itachi-sharingan.png), auto';
    }else {
      board.style.cursor = 'url(images/flowey-cursor.png), auto'
    }
    for (indexColumn = 1; indexColumn  <= input; indexColumn  += 1) {
      let column = document.createElement('div');
      board.appendChild(column);
      column.className = 'col';             
      for (indexRow = 1; indexRow <= input; indexRow += 1) {
        let row = document.createElement('div');
        row.className = "pixel";
        row.addEventListener('mousedown', paintingBoard);  
        column.appendChild(row);
      }   
    }
    colorBtn.addEventListener('click', () => {
      fakeErase.style.display = 'none';
      eraseButton.style.display = 'flex';
      if (select.value === 'sans') {
        board.style.cursor = 'url(images/sans-genocide-cursor.png), auto';
      }else if (select.value === 'bloood') {
        board.style.cursor = 'url(images/itachi-sharingan.png), auto';
      }else {
        board.style.cursor = 'url(images/flowey-cursor.png), auto'
      }
    });
  } 


  function selectSecretLink(event) {
    event.target.style.color = 'yellow';
    event.target.style.border = '2px solid yellow';
    event.target.addEventListener('mouseleave', (event) => {
      event.target.style.color = 'rgb(224, 107, 22)';
      event.target.style.border = '2px solid rgb(224, 107, 22)';
    })
  }


  generateBoardButton.addEventListener('change', () => {
    fakeErase.style.display = 'none';
    eraseButton.style.display = 'flex';
    if (select.value === 'sans') {
      board.style.cursor = 'url(images/sans-genocide-cursor.png), auto';
    }else if (select.value === 'bloood') {
      board.style.cursor = 'url(images/itachi-sharingan.png), auto';
    }else {
      board.style.cursor = 'url(images/flowey-cursor.png), auto'
    }
  });

  eraseButton.addEventListener('click', (event) => {
    const board = document.getElementById('pixel-board');
    if (event.target.id === 'erase') {
      event.target.style.display = 'none';
      board.style.cursor = 'url(images/rubber-icon.png), auto';
      fakeErase.style.display = 'flex';
      if ((select.value === 'sans') || (select.value === 'papyrus')) {
        imgFakeEraseBtn.src = 'images/sans-soul.png';
      }
      if ((select.value === 'undyne') || (select.value === 'undyneG')) {
        imgFakeEraseBtn.src = 'images/Undyne-Soul-Fight.png';
      }
      if (select.value === 'mettatonEX') {
        imgFakeEraseBtn.src = 'images/mettaton-soul.png';
      }
      if (select.value === 'muffet') {
        imgFakeEraseBtn.src = 'images/muffet-soul.png';
      }
      if (select.value === 'bloood') {
        imgFakeEraseBtn.src = 'images/sharingan3.png';
      }
      if ((select.value === 'asriel-final-form') || (select.value === 'asriel')
       (select.value === 'asgore') || (select.value === 'toriel')
       (select.value === 'napstablook')) {
          imgFakeEraseBtn.src = 'images/red-soul.png';
      }
    }else {
      if (event.target.parentNode.id === 'erase') {
        board.style.cursor = 'url(images/rubber-icon.png), auto';
        event.target.parentNode.style.display = 'none';
        fakeErase.style.display = 'flex';
        if ((select.value === 'sans') || (select.value === 'papyrus')) {
          imgFakeEraseBtn.src = 'images/sans-soul.png';
        }
        if ((select.value === 'undyne') || (select.value === 'undyneG')) {
          imgFakeEraseBtn.src = 'images/Undyne-Soul-Fight.png';
        }
        if (select.value === 'mettatonEX') {
          imgFakeEraseBtn.src = 'images/mettaton-soul.png';
        }
        if (select.value === 'muffet') {
          imgFakeEraseBtn.src = 'images/muffet-soul.png';
        }
        if (select.value === 'bloood') {
          imgFakeEraseBtn.src = 'images/sharingan3.png';
        }
        if ((select.value === 'asriel-final-form') || (select.value === 'asriel')
         (select.value === 'asgore') || (select.value === 'toriel')
         (select.value === 'napstablook')) {
            imgFakeEraseBtn.src = 'images/red-soul.png';
        }
      }
    }
  });

  function blooodRainTheme() { 
    const enableSound = document.createElement('audio');
    papyrusSpeak.style.display = 'none';
    const sound = document.getElementById('container-audio');
    enableSound.src = 'bloood-enable.mp3';
    const audioVolume = document.getElementById('audio');
    audioVolume.volume = 0;
    enableSound.volume = 0.4;
    sound.appendChild(enableSound);
    enableSound.play();  
    const blooodTheme = document.createElement('option');
    blooodTheme.value = 'bloood';
    blooodTheme.id = 'bloood';
    blooodTheme.innerText = 'Bloood Rain';
    select.appendChild(blooodTheme);
    cheet.disable('b l o o d r a i n');
  }

  function limitingBoard(input) {
    if (input <= 8) {
      deleteBoard();
    return boardByInputNumber(8);
    }
    if (input >= 32) {
      deleteBoard();
      return boardByInputNumber(32);
    } else {
      deleteBoard();
      return boardByInputNumber(input);
    }
  } 

  function deleteBoard() {
    let deleteBoard = document.querySelector('main');
    let aBoard = document.getElementById('pixel-board');  
    deleteBoard.removeChild(aBoard); 
    let newboard = document.createElement('div');
    newboard.id = 'pixel-board';
    deleteBoard.appendChild(newboard); 
  }



  function paintingBoard(event) {       
    let colorSelected = document.querySelector('.selected');
    if (fakeErase.style.display === 'flex') {
      event.target.style.backgroundColor = 'white'; 
      printed = true;
      let pix = document.querySelectorAll('.pixel');
      for (let index = 0; index < pix.length; index += 1) {
        pix[index].addEventListener('mousemove', function () {
          if (printed === true) {
            pix[index].style.backgroundColor = 'white';
          }
        });   
        pix[index].addEventListener('mouseup', function () {
          printed = false;
        });         
      } 
    }else {
      event.target.style.backgroundColor = colorSelected.value; 
      printed = true;
      let pix = document.querySelectorAll('.pixel');
      for (let index = 0; index < pix.length; index += 1) {
        pix[index].addEventListener('mousemove', function () {
          if (printed === true) {
            pix[index].style.backgroundColor = colorSelected.value;
          }
        });   
        pix[index].addEventListener('mouseup', function () {
          printed = false;
        });                  
      } 
    }   
  }        

  function clearBoard() {
    let boardItems = document.querySelectorAll('.pixel');
    for (let keys of boardItems) {
      let board = document.getElementById('pixel-board');
      keys.style.backgroundColor = 'white';
      board.style.backgroundColor = "white";
    }
  }       


  clearButton.addEventListener('click', clearBoard);    

  generateBoardButton.addEventListener('click',  () => {
    deleteBoard();
    limitingBoard(boardInputNumber.value);
  });


  clearButton.addEventListener('mouseover', () => {
    const iconButton = document.querySelector('.clear-btn-image');
    if ((select.value === 'sans') || (select.value === 'papyrus')) {
      iconButton.src = 'images/sans-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if ((select.value === 'undyne') || (select.value === 'undyneG')) {
      iconButton.src = 'images/Undyne-Soul-Fight.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'mettatonEX') {
      iconButton.src = 'images/mettaton-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'muffet') {
      iconButton.src = 'images/muffet-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'bloood') {
      iconButton.src = 'images/sharingan3.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else {
      iconButton.src = 'images/red-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      clearButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.clear-btn-image');
        iconButton.src = 'images/Clear-All-Icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }  
  })

  eraseButton.addEventListener('mouseover', () => {
    const iconButton = document.querySelector('.erase-btn-image'); 
    if ((select.value === 'sans') || (select.value === 'papyrus')) {
        iconButton.src = 'images/sans-soul.png';
        iconButton.style.width = '27px';
        iconButton.style.marginLeft = '8px';
        eraseButton.addEventListener('mouseleave', () => {
          const iconButton = document.querySelector('.erase-btn-image');
          iconButton.src = 'images/borracha-laranja.png';
          iconButton.style.width = '35px';
          iconButton.style.marginLeft = '0px';
        });
    }else if ((select.value === 'undyne') || (select.value === 'undyneG')) {
      iconButton.src = 'images/Undyne-Soul-Fight.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      eraseButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.erase-btn-image');
        iconButton.src = 'images/borracha-laranja.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'mettatonEX') {
      iconButton.src = 'images/mettaton-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      eraseButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.erase-btn-image');
        iconButton.src = 'images/borracha-laranja.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'muffet') {
      iconButton.src = 'images/muffet-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      eraseButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.erase-btn-image');
        iconButton.src = 'images/borracha-laranja.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'bloood') {
      iconButton.src = 'images/sharingan3.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      eraseButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.erase-btn-image');
        iconButton.src = 'images/borracha-laranja.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else {
      iconButton.src = 'images/red-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      eraseButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.erase-btn-image');
        iconButton.src = 'images/borracha-laranja.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }  
  })

  generateBoardButton.addEventListener('mouseover', () => {
    const iconButton = document.querySelector('.resize-btn-image');
    if ((select.value === 'sans') || (select.value === 'papyrus')) {
      iconButton.src = 'images/sans-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if ((select.value === 'undyne') || (select.value === 'undyneG')) {
      iconButton.src = 'images/Undyne-Soul-Fight.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'mettatonEX') {
      iconButton.src = 'images/mettaton-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'muffet') {
      iconButton.src = 'images/muffet-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else if (select.value === 'bloood') {
      iconButton.src = 'images/sharingan3.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }else {
      iconButton.src = 'images/red-soul.png';
      iconButton.style.width = '27px';
      iconButton.style.marginLeft = '8px';
      generateBoardButton.addEventListener('mouseleave', () => {
        const iconButton = document.querySelector('.resize-btn-image');
        iconButton.src = 'images/resize-icon.png';
        iconButton.style.width = '35px';
        iconButton.style.marginLeft = '0px';
      });
    }  
  })

  boardInputNumber.addEventListener('change', () => {
    deleteBoard();
    limitingBoard(boardInputNumber.value);
  });

function theme() {
  const image = document.querySelector('.main-image');
  const board = document.getElementById('pixel-board');
  const secretBtn = document.getElementById('secret-btn');
  if(select.value === 'sans') {
    image.src = 'images/sans.gif';
    imgFakeEraseBtn.src = 'images/sans-soul.png';
    image.style.width = '120px'
    board.style.cursor = 'url(images/sans-genocide-cursor.png), auto';
    if(fakeErase.style.display === 'flex') {
      board.style.cursor = 'url(images/rubber-icon.png), auto'
    }
    logoImage.src = 'images/Undertale-Logo.png';
    logoImage.style.width = '650px';
    textoH1.style.display = 'inline';
    document.body.style.backgroundColor = 'black';
    audio.src = 'megalovania.mp3'; 
    audio.volume = 0.1;
    secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
    secretBtn.innerText = 'FIGHT SANS';
  }else if (select.value === 'undyne') {
    image.src = 'images/undyne1.gif';
    imgFakeEraseBtn.src = 'images/Undyne-Soul-Fight.png';
    image.style.width = '120px'
    board.style.cursor = 'url(images/flowey-cursor.png), auto';
    if(fakeErase.style.display === 'flex') {
      board.style.cursor = 'url(images/rubber-icon.png), auto'
    }
    logoImage.src = 'images/Undertale-Logo.png';
    logoImage.style.width = '650px';
    textoH1.style.display = 'inline';
    document.body.style.backgroundColor = 'black';
    audio.src = 'spear-of-justice.mp3';
    audio.volume = 0.1;
    secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
    secretBtn.innerText = 'FIGHT SANS';
  }else if (select.value === 'toriel') {
    image.src = 'images/toriel.gif';
    imgFakeEraseBtn.src = 'images/red-soul.png';
    image.style.width = '120px'
    board.style.cursor = 'url(images/flowey-cursor.png), auto';
    if (fakeErase.style.display === 'flex') {
      board.style.cursor = 'url(images/rubber-icon.png), auto';
    }
    logoImage.src = 'images/Undertale-Logo.png';
    logoImage.style.width = '650px';
    textoH1.style.display = 'inline';
    document.body.style.backgroundColor = 'black';
    audio.src = 'heartache.mp3';
    audio.volume = 0.1;
    secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
    secretBtn.innerText = 'FIGHT SANS';
  }else if (select.value === 'asgore') {
    image.src = 'images/asgore.gif';
    imgFakeEraseBtn.src = 'images/red-soul.png';
    image.style.width = '350px'
    board.style.cursor = 'url(images/flowey-cursor.png), auto';
    if (fakeErase.style.display === 'flex') {
      board.style.cursor = 'url(images/rubber-icon.png), auto'
    }
    logoImage.src = 'images/Undertale-Logo.png';
    logoImage.style.width = '650px';
    textoH1.style.display = 'inline';
    document.body.style.backgroundColor = 'black';
    audio.src = 'asgore-theme.mp3';
    audio.volume = 0.1;
    secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
    secretBtn.innerText = 'FIGHT SANS';
  }else if (select.value === 'asriel') {
    image.src = 'images/asriel.gif';
    imgFakeEraseBtn.src = 'images/red-soul.png';
    image.style.width = '350px'
    board.style.cursor = 'url(images/flowey-cursor.png), auto';
    if (fakeErase.style.display === 'flex') {
      board.style.cursor = 'url(images/rubber-icon.png), auto'
    }
    logoImage.src = 'images/Undertale-Logo.png';
    logoImage.style.width = '650px';
    textoH1.style.display = 'inline';
    document.body.style.backgroundColor = 'black';
    audio.src = 'asriel-theme.mp3';
    audio.volume = 0.1;
    secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
    secretBtn.innerText = 'FIGHT SANS';
 }else if (select.value === 'asriel-final-form') {
  image.src = 'images/asriel-final.gif';
  imgFakeEraseBtn.src = 'images/red-soul.png';
  image.style.width = '450px'
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  document.body.style.backgroundColor = 'black';
  audio.src = 'his-theme-slow.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
 }else if (select.value === 'mettaton') {
  image.src = 'images/Mettaton.gif';
  imgFakeEraseBtn.src = 'images/red-soul.png';
  image.style.width = '150px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  document.body.style.backgroundColor = 'black';
  audio.src = 'mettaton-theme.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
 }else if (select.value === 'mettatonEX') {
  image.src = 'images/MettatonEX.gif';
  imgFakeEraseBtn.src = 'images/mettaton-soul.png';
  image.style.width = '150px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  document.body.style.backgroundColor = 'black';
  audio.src = 'mettaton-ex-theme.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
}else if (select.value === 'napstablook') {
  image.src = 'images/Napstablook.gif';
  imgFakeEraseBtn.src = 'images/red-soul.png';
  image.style.width = '80px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  document.body.style.backgroundColor = 'black';
  audio.src = 'napstablook-theme.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
}else if (select.value === 'undyneG') {
  image.src = 'images/undyne-fight.gif';
  imgFakeEraseBtn.src = 'images/Undyne-Soul-Fight.png';
  image.style.width = '225px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  document.body.style.backgroundColor = 'black';
  audio.src = 'undyne-genocide.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
}else if (select.value === 'papyrus') {
  image.src = 'images/papyrus.gif';
  imgFakeEraseBtn.src = 'images/sans-soul.png';
  image.style.width = '140px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  textoH1.style.display = 'inline';
  document.body.style.backgroundColor = 'black';
  audio.src = 'papyrus-theme.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
}else if (select.value === 'muffet') {
  document.body.style.backgroundColor = 'black';
  image.src = 'images/muffet.gif';
  imgFakeEraseBtn.src = 'images/muffet-soul.png';
  image.style.width = '150px'
  board.style.cursor = 'url(images/flowey-cursor.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  textoH1.style.display = 'inline';
  logoImage.src = 'images/Undertale-Logo.png';
  logoImage.style.width = '650px';
  audio.src = 'muffet-theme.mp3';
  audio.volume = 0.1;
  secretBtn.href = 'https://jcw87.github.io/c2-sans-fight/';
  secretBtn.innerText = 'FIGHT SANS';
}else if (select.value === 'bloood') {
  secretBtn.href = 'https://www.twitch.tv/blooodrain';
  secretBtn.innerText = 'TWITCH';
  image.src = 'images/bloood.gif';
  image.style.width = '190px'
  textoH1.style.display = 'none';
  document.body.style.backgroundColor = 'rgb(173, 62, 62)';
  logoImage.src = 'images/blood-logo.png'
  logoImage.style.padding = '2px';
  imgFakeEraseBtn.src = 'images/sharingan3.png';
  
  board.style.cursor = 'url(images/itachi-sharingan.png), auto';
  if (fakeErase.style.display === 'flex') {
    board.style.cursor = 'url(images/rubber-icon.png), auto'
  }
  audio.src = 'minato-theme.mp3'; 
  audio.volume = 0.1;
}
}

  select.addEventListener('change', theme);

  function enableCheat() {
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', () => {
      alert(` Congratulations!\n
      -- Cheat Enabled -- \n
      Try a Sans fight by clicking FIGHT SANS or 
      typing 'blood rain' to unlock a new theme.`);
      cheet('b l o o d r a i n', blooodRainTheme);
      papyrusSpeak.src = 'images/papyrus-speak-2.png';
      const link = document.createElement('a');
      link.href ='https://jcw87.github.io/c2-sans-fight/';
      link.target ='_blank';
      link.innerText = 'FIGHT SANS';
      link.id = 'secret-btn';
      link.style.textDecoration = 'none';
      link.style.backgroundColor = 'black';
      link.style.fontSize = '32px';
      link.style.fontFamily = 'undertale-fight';
      link.style.color = 'rgb(224, 107, 22)';
      link.style.border = '2px solid rgb(224, 107, 22)';
      link.style.padding = '5px';
      link.addEventListener('mouseover', selectSecretLink);
      p.appendChild(link);
      textoH1.style.marginLeft = '284px';
      p.style.marginRight = '40px';  
      cheet.disable('↑ ↑ ↓ ↓ ← → ← → b a');
    })
  }

  window.onload = function main () {
    intro();
    boardByInputNumber(12);
    enableCheat();
  }
  

