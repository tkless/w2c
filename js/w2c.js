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
    var row_div = document.createElement('div');
    row_div.className = 'row';
    row_div.id = 'view-all';
    document.querySelector( 'section' ).appendChild( row_div );
    for ( var data in datasets )
      setPreviewsContent( datasets[ data ] );
  }

  function setPreviewsContent( data ) {

    var clone = document.importNode( document.querySelector( '#all-components' ).content, true );
    var inner = clone.querySelector('div');

    if ( data.screenshots ) inner.querySelector( 'img' ).src = data.screenshots[ 0 ];
    inner.querySelector( 'h3' ).innerHTML = data.title;
    inner.querySelector( 'p' ).innerHTML = data.abstract;
    inner.querySelector( '.detail' ).onclick = renderComponentDetail;

    document.querySelector( '#view-all' ).appendChild( clone );

    function renderComponentDetail() {
      var clone = document.importNode( document.querySelector( '#component-detail' ).content, true );
      var inner = clone.querySelector('div');

      inner.querySelector('#title').innerHTML = data.title;
      inner.querySelector('#developer').innerHTML = data.developer;
      inner.querySelector('.lead').innerHTML = data.abstract;
      inner.querySelector('#description').innerHTML = data.description;

      document.querySelector( 'section' ).innerHTML = '';
      document.querySelector( 'section' ).appendChild( clone );
    }

  }

  function createApp() {

  }

} )();