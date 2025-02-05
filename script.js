$(document).ready(function() {
    // Mostra l'overlay iniziale e sfoca il contenuto principale
    $('#overlay').fadeIn();
    $('#main-content').addClass('blur');
  
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('nomodal')) {
      $('#overlay').fadeIn();
      $('#main-content').addClass('blur');
    }
    loadTranslation('it');
  
    // Funzione per caricare la traduzione
    function loadTranslation(lang) {
      $.getJSON(lang + ".json", function(data) {
        $('#vacation-popup h2:first').text(data.chooseLanguage);
        $('#vacation-popup h2:last').text(data.chooseVacationType);
        $('.vacation-option[data-vacation="avventura"]').text(data.adventure);
        $('.vacation-option[data-vacation="cultura"]').text(data.culture);
        $('.vacation-option[data-vacation="relax"]').text(data.relax);
        $('header h1').text(data.headerTitle);
        $('header p').text(data.headerSubtitle);
        $('#suggestions h2').text(data.yourRecommendations);
        $('#home a').text(data.home);
        $('#footerMessage').text(data.footerMesssage);
  
        // Gestione click sulle opzioni di vacanza
        $('.vacation-option').off('click').on('click', function() {
          const vacationType = $(this).data('vacation');
          let content = '';
          if (vacationType === 'avventura') {
            content = `<p>${data.exploreAdventure}</p>
            <div class="image-grid">
              <figure>
                <a href="https://savanzadaclimbing.it/" class="open-modal" data-image="viaggio_avventura/arrampicata.jpeg" data-description="${data.arrampicata}">
                  <img src="viaggio_avventura/arrampicata.jpeg" alt="Arrampicata">
                  <figcaption>S'avanzada</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.easycletta.it/it/" class="open-modal" data-image="viaggio_avventura/bici.jpg" data-description="${data.bici}">
                  <img src="viaggio_avventura/bici.jpg" alt="Bici">
                  <figcaption>Easycletta</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.windsurfingclub.it/" class="open-modal" data-image="viaggio_avventura/windsurf.jpg" data-description="${data.windsurf}">
                  <img src="viaggio_avventura/windsurf.jpg" alt="Windsurf">
                  <figcaption>Windsurf</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.nautal.com/it/noleggio-barche/ricerca?priceTo=150&where=Cagliari,%20Italia" class="open-modal" data-image="viaggio_avventura/barca.jpg" data-description="${data.barca}">
                  <img src="viaggio_avventura/barca.jpg" alt="Barca">
                  <figcaption>Barca</figcaption>
                </a>
              </figure>
            </div>`;
          } else if (vacationType === 'cultura') {
            content = `<p>${data.visitCulture}</p>
            <div class="image-grid">
              <figure>
                <a href="https://cagliariturismo.comune.cagliari.it/it/vivicagliari/villa-di-tigellio" class="open-modal" data-image="viaggio_cultura/archeologia.webp" data-description="${data.tigellio}">
                  <img src="viaggio_cultura/archeologia.webp" alt="Villa Tigellio">
                  <figcaption>Villa Tigellio</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.google.it/maps/place/Santuario+di+Nostra+Signora+di+Bonaria/@39.2083168,9.1229017,684m/data=!3m2!1e3!4b1!4m6!3m5!1s0x12e73414cf670abd:0x93e6a7a45929876c!8m2!3d39.2083168!4d9.1254766!16s%2Fg%2F1226slf5?entry=ttu" class="open-modal" data-image="viaggio_cultura/bonaria.jpg" data-description="${data.bonaria}">
                  <img src="viaggio_cultura/bonaria.jpg" alt="Bonaria">
                  <figcaption>Bonaria</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.google.it/maps/place/Cittadella+dei+Musei/@39.2220777,9.1120855,17z/data=!3m1!4b1!4m6!3m5!1s0x12e7354a8824d3cf:0xc90f1668a683be6b!8m2!3d39.2220778!4d9.1169564!16s%2Fg%2F122x7v1r?entry=ttu" class="open-modal" data-image="viaggio_cultura/Museo.jpg" data-description="${data.museo}">
                  <img src="viaggio_cultura/Museo.jpg" alt="Musei">
                  <figcaption>Citadella dei Musei</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.google.it/maps/place/Orto+Botanico+di+Cagliari" class="open-modal" data-image="viaggio_cultura/ortobotanico.png" data-description="${data.orto}">
                  <img src="viaggio_cultura/ortobotanico.png" alt="Orto Botanico">
                  <figcaption>Orto Botanico</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.teatroliricodicagliari.it/it/" class="open-modal" data-image="viaggio_cultura/teatro.jpg" data-description="${data.teatrolirico}">
                  <img src="viaggio_cultura/teatro.jpg" alt="Teatro Lirico">
                  <figcaption>Teatro Lirico</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://teatromassimocagliari.it/" class="open-modal" data-image="viaggio_cultura/teatromassimo.jpg" data-description="${data.teatromassimo}">
                  <img src="viaggio_cultura/teatromassimo.jpg" alt="Teatro Massimo">
                  <figcaption>Teatro Massimo</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.sardegnaturismo.it/it/esplora/anfiteatro-romano-di-cagliari" class="open-modal" data-image="viaggio_cultura/teatroromano.jpg" data-description="${data.teatroromano}">
                  <img src="viaggio_cultura/teatroromano.jpg" alt="Teatro Romano">
                  <figcaption>Teatro Romano</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.comune.cagliari.it/portale/page/it/parco_di_tuvixeddu?contentId=LGO12342" class="open-modal" data-image="viaggio_cultura/Tuvixeddu.webp" data-description="${data.tuvixeddu}">
                  <img src="viaggio_cultura/Tuvixeddu.webp" alt="Tuvixeddu">
                  <figcaption>Tuvixeddu</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://cagliariturismo.comune.cagliari.it/it/vivicagliari/cattedrale-di-santa-maria-e-torre-campanaria" class="open-modal" data-image="viaggio_cultura/santamaria.jpg" data-description="${data.santamaria}">
                  <img src="viaggio_cultura/santamaria.jpg" alt="Santa Maria">
                  <figcaption>Santa Maria</figcaption>
                </a>
              </figure>
            </div>`;
          } else if (vacationType === 'relax') {
            content = `<p>${data.relaxBeaches}</p>
            <div class="image-grid">
              <figure>
                <a href="https://www.google.it/maps/place/Spiaggia+del+Poetto" class="open-modal" data-image="viaggio_relax/poetto.jpg" data-description="${data.poetto}">
                  <img src="viaggio_relax/poetto.jpg" alt="Spiaggia del Poetto">
                  <figcaption>Poetto</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.tripadvisor.it/Restaurant_Review-g187881-d10147675-Reviews-Terra_Mari-Cagliari" class="open-modal" data-image="viaggio_relax/terraemari.avif" data-description="${data.terramari}">
                  <img src="viaggio_relax/terraemari.avif" alt="Terra e Mari">
                  <figcaption>Terra e Mari</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.tripadvisor.it/Restaurant_Review-g187881-d27130378-Reviews-Il_Melograno_nel_Corso-Cagliari" class="open-modal" data-image="viaggio_relax/tziulillucu.jpg" data-description="${data.tziulillucu}">
                  <img src="viaggio_relax/tziulillucu.jpg" alt="Il Melograno">
                  <figcaption>Il Melograno</figcaption>
                </a>
              </figure>
              <figure>
                <a href="https://www.google.it/maps/place/Spiaggia+di+Calamosca" class="open-modal" data-image="viaggio_relax/calamosca.jpg" data-description="${data.calamosca}">
                  <img src="viaggio_relax/calamosca.jpg" alt="Cala Mosca">
                  <figcaption>Cala Mosca</figcaption>
                </a>
              </figure>
            </div>`;
          }
          $('#vacation-content').html(content);
          $('#overlay').fadeOut();
          $('#main-content').removeClass('blur');
        });
  
        // Gestione apertura del modale
        $(document).on('click', '.open-modal', function(e) {
          e.preventDefault();
          var imageSrc   = $(this).data('image');
          var description = $(this).data('description');
          var siteUrl     = $(this).attr('href'); // Recupera l'URL relativo dal link originale
  
          // Imposta l'immagine e la descrizione nel modale
          $('#modal-image').attr('src', imageSrc);
          $('#modal-description').text(description);
          // Aggiorna il bottone/link nel modale per reindirizzare al sito relativo
          $('#modal-link').attr('href', siteUrl).text("Visita sito");
  
          $('#image-modal').fadeIn();
        });
  
        // Gestione chiusura del modale
        $('#close-modal').click(function() {
          $('#image-modal').fadeOut();
        });
  
        // Chiusura modale cliccando fuori dal contenuto del modale
        $('#image-modal').click(function(e) {
          if (e.target === this) {
            $('#image-modal').fadeOut();
          }
        });
      });
    }
  
    // Gestione click per selezionare la lingua
    $('.flag-icon').click(function() {
      const lang = $(this).data('lang');
      loadTranslation(lang);
    });
  });
  