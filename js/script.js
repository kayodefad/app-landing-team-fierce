document.querySelector('.toggler').addEventListener('click', function () {
  if (document.querySelector('.search-div').classList.contains('show')) {
    document.querySelector('.search-div').classList.remove('show')
  } else {
    document.querySelector('.search-div').classList.add('show')
  }
})