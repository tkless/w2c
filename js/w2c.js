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

  // Reset modal data
  $('#createApp').on('hidden.bs.modal', function () {
    $( '#usage' ).css( 'display', 'none' );
    $( '#save' ).removeClass( 'btn-success' );
    $( '#save' ).addClass( 'btn-primary' );
    $( '#save' ).html( 'Save App' );
    $( 'form' ).trigger( 'reset' );
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


    if ( data.factories ) {
      inner.find( '.create' ).click ( function () {
        $( '#createApp' ).modal( 'show' );
        renderCreateApp( data );
      } );
    }
    else inner.find( '.create' ).addClass( 'disabled' );

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
    inner.find( '#website a' ).attr( 'href', data.website ).attr( 'target', '_blank' );
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


    if ( data.factories ) {
      inner.find( '.createFrom' ).click ( function () {
        $( '#createApp' ).modal( 'show' );
        renderCreateApp( data );
      } );
    }

  }

  function renderCreateApp( data ) {

    var factory = data.factories[0];

    //set click Event of load-app button
    $( '.load-app' ).on( 'click', function ( event ) {
      event.preventDefault();

      if ( 'Web Component Cloud (W2C)' === $( '#src option:selected' ).text() ) {
        ccm.get( { store: 'w2c_' + data.name, url: 'https://ccm.inf.h-brs.de' }, $('#key').val(), function ( result ) {
          ccm.helper.encodeDependencies( result );
          factory.config.start_state = result;
          ccm.start( factory.url, factory.config, callback );
        });
      }
    });

    var config = data.factories[0].config;

    config.onfinish = function ( instance, cloze_config ) {
      var store = { value: $( '#storage' ).attr( 'value' ) };
      ccm.helper.decodeDependencies( store );

      if ( $( '#key' ).val() )
        cloze_config.key = $( '#key' ).val();

      ccm.helper.solveDependency( store, 'value', function ( store ) {
        store.set( cloze_config, function ( result ) {

          var embed_code = getEmbedCode( data.versions[0].source, data.name, data.versions[0].version, { store: 'w2c_' + data.name, url: 'https://ccm.inf.h-brs.de' }, result.key );

          $( '#save' ).attr('onclick','').unbind('click');
          $( '#save' ).removeClass( 'btn-primary' );
          $( '#save' ).addClass( 'btn-success' );
          $( '#save' ).html( 'Saved' );
          $( '#usage' ).fadeIn( 2000 );
          $( '#script-tag' ).html( '<code>&lt;script src="'+ data.versions[0].source + '"&gt;&lt;/script&gt;</code>' );
          $( '#html-tag' ).html('<code>'+ embed_code +'</code>');
          $( '#id' ).html('<pre>'+result.key+'</pre>');
        } );
      } );
    };
    ccm.start( factory.url, config, callback );

    function getEmbedCode( url, name, version, store_settings, key ) {
      var index = name + ( version ? '-' + version.replace( /\./g, '-' ) : '' );
      return '&lt;ccm-'+index+' key=\'["ccm.get",'+JSON.stringify(store_settings)+',"'+key+'"]\'>&lt;/ccm-'+index+'&gt;';
    }

    function callback( instance ) {
      $('#storage').attr('value', '["ccm.store",{"store":"w2c_' + data.name + '","url":"https://ccm.inf.h-brs.de"}]');
      $('#create').html('');
      $('#save').on('click', function () { instance.submit(); });
      $('#create').append(instance.root);
    }

  }
} );