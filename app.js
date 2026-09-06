'use strict';
document.getElementById('quote').addEventListener('submit',function(event){event.preventDefault();const data=new FormData(this);document.getElementById('result').textContent='Esimerkki: '+data.get('service')+', '+data.get('size')+' m², '+data.get('frequency').toLowerCase()+'. Oikealla yrityssivulla pyyntö toimitetaan yritykselle. Tästä demosta ei lähetetty mitään.';});
