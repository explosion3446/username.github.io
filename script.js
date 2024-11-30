// Trafo turu hesaplama fonksiyonu
function hesaplaTur() {
  const guc = document.getElementById('guc').value;
  const voltaj = document.getElementById('voltaj').value;
  
  if (guc && voltaj) {
    // Trafo tur sayısı hesaplama formülü
    const tur = (guc * 1000) / voltaj;
    document.getElementById('tur').value = tur.toFixed(2);
  } else {
    alert('Lütfen tüm alanları doldurun!');
  }
}

// Tel kesiti hesaplama fonksiyonu
function hesaplaKesit() {
  const akim = document.getElementById('akim').value;
  const uzunluk = document.getElementById('uzunluk').value;
  
  if (akim && uzunluk) {
    // Tel kesiti hesaplama formülü (örnek: I * L / K)
    const kesit = (akim * uzunluk) / 10;
    document.getElementById('telKesiti').value = kesit.toFixed(2);
  } else {
    alert('Lütfen tüm alanları doldurun!');
  }
}
