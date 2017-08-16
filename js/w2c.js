/**
 * @overview W2C scripts
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm = window.ccm[ '9.0.0' ];
  ccm.load( 'resources/w2c_datasets.js', renderAllComponents );

  function renderAllComponents( datasets ) {
    for ( var data in datasets )
      setPreviewsContent( datasets[ data ] );
  }

  function setPreviewsContent( data ) {

    var clone = document.importNode( document.querySelector( 'template' ).content, true );
    var inner = clone.querySelector('div');

    if ( data.screenshots ) inner.querySelector( 'img' ).src = data.screenshots[ 0 ];
    inner.querySelector( 'h3' ).innerHTML = data.title;
    inner.querySelector( 'p' ).innerHTML = data.abstract;
    inner.querySelector( '.detail' ).onclick = renderComponentDetail;

    document.querySelector( '.preview' ).appendChild( clone );

    function renderComponentDetail() {
      console.log( 'render', data );
    }

  }

  function createApp() {

  }

} )();