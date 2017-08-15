

( function () {
  var ccm = window.ccm['9.0.0'];
  ccm.load('resources/comp_info_datasets.js', renderAllComponents);

  function renderAllComponents( datasets ) {
    for ( var data in datasets)
       setPreviewsContent( datasets[ data ] ) ;
  }

  function setPreviewsContent( data ) {
    if ( supportsTemplate() ) {
      var t = document.querySelector('#all-components');

      if ( data.previews ) t.content.querySelector('img').src = data.previews[0];

      t.content.querySelector('h3').innerHTML = data.title;
      t.content.querySelector('p').innerHTML = data.abstract;

      var clone = document.importNode(t.content, true);
      document.querySelector('.preview').appendChild(clone);
    }
    else {
      console.log('template not supported');
    }
  }

  function supportsTemplate() {
    return 'content' in document.createElement( 'template' );
  }

})();

