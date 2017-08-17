/**
 * @overview W2C scripts
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm = window.ccm[ '9.0.0' ];
  var datasets;
  ccm.load( 'resources/w2c_datasets.js', function ( result )
  {
    datasets = result;

    //set click event of W2C Brand
    document.querySelector('.navbar-header').onclick = function ( event ) {
      if ( event ) event.preventDefault();
      document.querySelector( 'section' ).innerHTML = '';
      renderAllComponents();
    };
    renderAllComponents();
    fillDropdownMenue();
  } );


  function fillDropdownMenue() {
    for ( var data in datasets )
      setDropdownMenueItems( datasets[ data ] );
  }

  function renderAllComponents() {
    var row_div = document.createElement('div');
    row_div.className = 'row';
    row_div.id = 'view-all';
    document.querySelector( 'section' ).appendChild( row_div );

    for ( var data in datasets )
      setPreviewsContent( datasets[ data ] );
  }

  function setDropdownMenueItems( data ) {
    var clone = document.importNode( document.querySelector( '#dropdown-items' ).content, true );

    var inner = clone.querySelector('li');

    clone.querySelector( 'a' ).innerHTML = data.title;
    inner.querySelector( 'a' ).onclick = function ( event ) {
      if ( event ) event.preventDefault();
      renderComponentDetail( data );
    };

    document.querySelector( '.dropdown-menu' ).appendChild( clone );
  }

  function setPreviewsContent( data ) {

    var clone = document.importNode( document.querySelector( '#all-components' ).content, true );
    var inner = clone.querySelector('div');

    if ( data.screenshots ) inner.querySelector( 'img' ).src = data.screenshots[ 0 ];
    inner.querySelector( 'h3' ).innerHTML = data.title;
    inner.querySelector( 'p' ).innerHTML = data.abstract;
    inner.querySelector( '.detail' ).onclick = function ( event ) {
      if ( event ) event.preventDefault();
      renderComponentDetail( data );
    };

    document.querySelector( '#view-all' ).appendChild( clone );

  }

  function renderComponentDetail( data ) {
    var clone = document.importNode( document.querySelector( '#component-detail' ).content, true );
    var inner = clone.querySelector('div');

    inner.querySelector('img').src = "resources/component.png";
    inner.querySelector('#title').innerHTML = data.title;
    inner.querySelector('.developer').innerHTML = data.developer;
    inner.querySelector('.lead').innerHTML = data.abstract;
    inner.querySelector('#description').innerHTML = data.description;
    inner.querySelector('#comp-name').innerHTML = data.title;

    var versions_elem = inner.querySelector('#versions');
    data.versions.map( function ( entry ) {
      versions_elem.innerHTML += entry.version + ' - <a target="_blank" href="' + entry.source + '">source</a>' + ( entry.minified ? ' - <a target="_blank" href="\' + entry.minified + \'">minified</a>' : '' ) + '<br>';
    } );


    inner.querySelector('#website a').href = data.website;
    inner.querySelector('#website a').innerHTML = data.website;
    inner.querySelector('#license').innerHTML = data.license;

    var screenshots_elem = inner.querySelector('#versions');

    document.querySelector( 'section' ).innerHTML = '';
    document.querySelector( 'section' ).appendChild( clone );
  }

  //sort components bei name
  function sort() {
    var unsorted = 'update Link Add feature improve Report'.split(' ');
    unsorted.sort(function (a, b) {
      a.localeCompare(b); //  ["Add", "feature", "improve", "Link", "Report", "update"]
    } );

  }

} )();