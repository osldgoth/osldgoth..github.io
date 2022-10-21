const justifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
]

const alignContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around'
]

function setFlexProperties(){
  const flexContainer = document.getElementById('flexProperties')
  const flexValues = document.getElementById('values')
  if (!flexContainer){console.log('escaped'); return};

  justifyContentValue = justifyContent[Math.floor(Math.random() * 6)];
  flexValues.innerText = `Justify Content is set to: \n ${justifyContentValue}`;
  flexContainer.style.setProperty('justify-content', justifyContentValue);
}

function documentIsLoaded(){
  setFlexProperties();
  setInterval(setFlexProperties, 5000);
}