/**
 * @overview W2C scripts
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
$( document ).ready( function() {

  var ccm = window.ccm[ '11.5.0' ];
  var datasets;
  var unsorted_array = [];

  ccm.load( 'resources/w2c_datasets.js', function ( result ) {
    datasets = result;
    renderAllComponents();
  } );

  function renderAllComponents() {
    sortCompByName();

    for ( var i = 0; i < unsorted_array.length; i++ ) {
      setPreviewsContent( unsorted_array[i].data );
    }

    // expand thumbnail for crate component view
    $('.gallery-items').imagelistexpander({ prefix: "gallery-" });

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
  }

  function setPreviewsContent( data ) {

    var clone = document.importNode( document.querySelector( '#all-components' ).content, true );
    var inner = $( clone.querySelector('li') );

    inner.find( 'img' ).attr ( 'src', ( data.screenshots ? data.screenshots[ 0 ] : 'resources/preview.jpg' ) );
    inner.find( 'h3' ).html( data.title );
    inner.find( '.abstract' ).html( data.abstract );
    inner.find( '.detail' ).click ( function () {
      renderComponentDetail( data );
    } );

    if ( data.factories ) {
      renderCreateComponent( data );
    }
    else inner.find( '.create' ).addClass( 'disabled' );

    $( '#all' ).append( clone );

    function renderCreateComponent( data ) {

      //set click Event of load-app button
      $( '.load-app' ).on( 'click', function ( event ) {
        event.preventDefault();

        if ( 'Web Component Cloud (W2C)' === $( '#src option:selected' ).text() ) {
          ccm.get( { store: 'w2c_' + data.name, url: 'https://ccm.inf.h-brs.de' }, $('#key').val(), function ( result ) {
            ccm.helper.encodeDependencies( result );
            factory.config.start_values = result;
            ccm.start( factory.url, factory.config, callback );
          });
        }
      });

      var config = data.factories[0].config;

      config.onfinish = function ( instance ) {
        var comp_config = instance.getValue();
        var store = { value: inner.find( '#storage' ).attr( 'value' ) };
        ccm.helper.decodeDependencies( store );

        if ( inner.find( '#key' ).value )
          comp_config.key = inner.find( '#key' ).value;

        ccm.helper.solveDependency( store, 'value', function ( store ) {
          store.set( comp_config, function ( result ) {

            var embed_code = getEmbedCode( data.versions[0].source, data.name, data.versions[0].version, { store: 'w2c_' + data.name, url: 'https://ccm.inf.h-brs.de' }, result.key );

            inner.find( '#save' ).attr('onclick','').unbind('click');
            inner.find( '#save' ).removeClass( 'btn-primary' );
            inner.find( '#save' ).addClass( 'btn-success' );
            inner.find( '#save' ).html( 'Saved' );
            inner.find( '#usage' ).fadeIn( 2000 );
            inner.find( '#script-tag' ).html( '<code>&lt;script src="'+ data.versions[0].source + '"&gt;&lt;/script&gt;</code>' );
            inner.find( '#html-tag' ).html('<code>'+ embed_code +'</code>');
            inner.find( '#id' ).html('<pre>'+result.key+'</pre>');

            resizeHeight();
          } );
        } );
      };

      // render component preview bei changing component factory settings
      config.onchange = function ( instance ) { renderPreview( instance, data ); };
      config.submit_button = false;
      config.preview = false;

      var factory = data.factories[0];
      ccm.start( factory.url, config, callback );

      function getEmbedCode( url, name, version, store_settings, key ) {
        var index = name + ( version ? '-' + version.replace( /\./g, '-' ) : '' );
        console.log('!');
        debugger;
        return '&lt;ccm-'+index+' key=\'["ccm.get",'+JSON.stringify(store_settings)+',"'+key+'"]\'>&lt;/ccm-'+index+'&gt;';
      }

      function callback( instance ) {
        inner.find( '#storage' ).attr('value', '["ccm.store",{"store":"w2c_' + data.name + '","url":"https://ccm.inf.h-brs.de"}]');
        inner.find( '#render-factory' ).html('');
        inner.find('#save').on('click', function () { instance.submit(); });
        inner.find( '#render-factory' ).append(instance.root);
        renderPreview( instance, data );
      }

      function renderPreview( instance,  data ) {
        if(!instance.getValue) return;

        ccm.start( data.versions[0].source, instance.getValue(), function ( inst ) {
          ccm.helper.setContent( inner.find( '.preview' )[0], inst.root );

          resizeHeight();
        } );
      }

    }
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

  }

  function resizeHeight() {
    $(window).resize( function () {
      var max_height =  $( '.gallery-expander-contents' ).outerHeight();
      var height =  $( '.gallery-contents' ).outerHeight() + max_height;

      $('.gallery-item active').css( 'height', height);
      $('.gallery-item active > .gallery-expander').css( 'max-height', max_height );
    });

    $(window).trigger('resize');

  }
} );