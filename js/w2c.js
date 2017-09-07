/**
 * @overview W2C scripts
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
$( document ).ready( function() {

  var ccm = window.ccm[ '10.0.0' ];
  var datasets;
  var unsorted_array = [];
// Add smooth scrolling to all links in navbar + footer link

  // Add smooth scrolling to all links in navbar + footer link
  $( ".navbar a, footer a[href='#w2c']" ).on( 'click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if ( this.hash !== "" ) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $( 'html, body' ).animate( {
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $( window ).scroll( function() {
    $( ".slideanim").each( function(){
      var pos = $( this ).offset().top;

      var winTop = $ (window ).scrollTop();
      if ( pos < winTop + 600 ) {
        $( this ).addClass( "slide" );
      }
    });
  });

  ccm.load( 'resources/w2c_datasets.js', function ( result ) {
    datasets = result;
    renderAllComponents();
  } );

  function sortCompByName() {
    for ( var data in datasets ) {
      unsorted_array.push( { "name": datasets[ data ].title, "data": datasets[ data ] } );
    }

    unsorted_array.sort( compare );

    //sort components bei name
    function compare( a, b ) {
      return a.name.localeCompare( b.name );
    }
  }

  function renderAllComponents() {
    sortCompByName();

    for ( var i = 0; i < unsorted_array.length; i++ ) {
      setPreviewsContent( unsorted_array[i].data );
    }
  }

  function setPreviewsContent( data ) {

    var clone = document.importNode( document.querySelector( '#all-components' ).content, true );
    var inner = $( clone.querySelector('div') );

    inner.find( 'img' ).attr ( 'src', ( data.screenshots ? data.screenshots[ 0 ] : 'resources/preview.jpg' ) );
    inner.find( 'h3' ).html( data.title );
    inner.find( '.abstract' ).html( data.abstract );
    inner.find( '.detail' ).click ( function () {
      renderComponentDetail( data );
    } );

    inner.find( '.create' ).click ( function () {
      renderCreateApp( data );
    } );

    $( '#all' ).append( clone );

  }

  function renderComponentDetail( data ) {
    var clone = document.importNode( document.querySelector( '#component-detail' ).content, true );
    var inner = $( clone.querySelector('div') );

    inner.find( 'img' ).attr( 'src', 'resources/component.png' );
    inner.find( '#title' ).html( data.title );
    inner.find( '.developer' ).html( data.developer + '<span class="glyphicon glyphicon-chevron-right"></span>' );
    inner.find( '.lead' ).html = data.abstract;
    inner.find( '#comp-name' ).html( data.name );
    inner.find( '#developer' ).html( data.developer );
    inner.find( '#website a' ).html( data.website );
    inner.find( '#website a' ).html( data.website );
    inner.find( '#license' ).html( data.license );

    if (  data.description )
      inner.find( '#description' ).html( data.description );
    else {
      inner.find( '.descr' ).remove();
    }

    var versions_elem = inner.find( '#versions' );
    data.versions.map( function ( entry ) {
      versions_elem.append( entry.version + ' - <a target="_blank" href="' + entry.source + '">source</a>' + ( entry.minified ? ' - <a target="_blank" href="' + entry.minified + '">minified</a>' : '' ) + '<br>' );
    } );

    if ( data.screenshots ) {
      data.screenshots.map( function ( entry ) {
        var screenshots_elem = document.importNode( document.querySelector( '#prev-img' ).content, true );
        var inner_1 = $ ( screenshots_elem.querySelector( 'div' ) );
        inner_1.find('img').attr( 'src', entry );
        inner.find('#prev-thumbnail').append( inner_1 );
      });
    } else {
      inner.find( '#prev' ).remove();
      inner.find( '.prev' ).remove();
    }

    if ( data.demos )
      ccm.start( data.versions[0].minified ? data.versions[0].minified : data.versions[0].source, data.demos[0], function (instance) {
        inner.find( '#demo-section' ).append( instance.root );
      } );
    else {
      inner.find( '#demo' ).remove();
      inner.find( '.demo' ).remove();
    }

    $( '#detail' ).html( '' );
    $( '#detail' ).append( clone );

    inner.find( '.createFrom' ).click ( function () {
      renderCreateApp( data );
    } );
  }

  function renderCreateApp( data ) {
    if ( data.factories )
      ccm.start( data.factories[0].url, function (instance) {
        $( '#create' ).html( '' );
        $( '#create' ).append( instance.root );
      } );
  }



} );