/**
 * @overview W2C scripts
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
$( document ).ready( function() {

  const ccm = window.ccm[ '16.6.0' ];
  let datasets;

  ccm.load( 'resources/w2c_datasets.js', function ( result ) {
    datasets = result;
    renderAllComponents();
  } );

  function renderAllComponents() {
    var sorted_data = [];
    sortComponentByName();

    for ( var key in sorted_data ) {
      setPreviewsContent( sorted_data[ key ].data );
    }

    // expand thumbnail for create-component view
    $('.gallery-items').imagelistexpander({ prefix: "gallery-" });

    function sortComponentByName() {
      for ( var data in datasets ) {
        sorted_data.push( { "name": datasets[ data ].title, "data": datasets[ data ] } );
      }

      sorted_data.sort( compare );

      //sort components bei name
      function compare( a, b ) {
        return a.name.localeCompare( b.name );
      }
    }
  }

  function setPreviewsContent( data ) {

    const clone = document.importNode( document.querySelector( '#components' ).content, true );
    const inner = $( clone.querySelector('li') );

    inner.find( 'img' ).attr ( 'src', ( data.screenshots ? data.screenshots[ 0 ] : 'resources/preview.jpg' ) );
    inner.find( 'h3' ).html( data.title );
    inner.find( '.abstract' ).html( data.abstract );
    inner.find( '.detail' ).click( function () {
      renderComponentDetail( data );
    } );

    if ( data.factories ) {
      inner.find( '.create' ).click( function () {
        renderCreateAppView( ccm.helper.clone( data ) );
      });
    }
    else inner.find( '.create' ).remove();

    $( '#all' ).append( clone );

    function renderComponentDetail( data ) {
      const clone = document.importNode( document.querySelector( '#component-detail' ).content, true );
      const inner = $( clone.querySelector('div') );

      inner.find( 'img' ).attr( 'src', 'resources/component.png' );
      inner.find( '#title' ).html( data.title );
      inner.find( '.developer' ).html( data.developer + '<span class="glyphicon glyphicon-chevron-right"></span>' );
      inner.find( '.lead' ).html = data.abstract;
      inner.find( '#comp-name' ).html( data.key );
      inner.find( '.developer' ).html( data.developer );
      inner.find( '.developer' ).attr( 'href', data.website );
      inner.find( '#developer' ).html( data.developer );
      inner.find( '#website a' ).html( data.website );
      inner.find( '#website a' ).attr( 'href', data.website ).attr( 'target', '_blank' );
      inner.find( '#license' ).html( data.license );

      if (  data.description )
        inner.find( '#description' ).html( data.description );
      else {
        inner.find( '.descr' ).remove();
      }

      const versions_elem = inner.find( '#versions' );
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

      $( '#detail' ).html( '' ).append( clone );

    }

    function renderCreateAppView( data ) {
      let loaded_app_key;
      let is_save_btn;

      let embed_code_div_id;
      let ccm_key_div_id;

      initializeModalDilogs();

      inner.find( '#storage' ).attr('value', '["ccm.store",{"store":"w2c_' + data.key + '","url":"https://ccm2.inf.h-brs.de","method":"POST"}]');

      let config = data.factories[0].config;

      config.onfinish = function ( instance ) {
        let comp_config = instance.getValue();

        let store = { value: inner.find( '#storage' ).attr( 'value' ) };
        ccm.helper.decodeObject( store );

        if ( loaded_app_key && is_save_btn ) {
          comp_config.key = loaded_app_key;
        }

        ccm.helper.solveDependency( store, 'value', function ( store ) {
          store.set( comp_config, function ( result ) {
            let embed_code = getEmbedCode( data.key, data.versions[0].version, { store: 'w2c_' + data.key, url: 'https://ccm2.inf.h-brs.de' }, result );
            $( embed_code_div_id ).html( '<code>&lt;script src="'+ data.versions[0].source + '"&gt;&lt;/script&gt; '+ embed_code +'</code>' );
            $( ccm_key_div_id ).html('<pre>'+result+'</pre>');
            copyToClipboard( embed_code_div_id );
          } );
        } );
      };

      // render component preview bei changing component factory settings
      config.onchange = function ( instance ) { renderPreview( instance, data ); };
      config.submit_button = false;
      config.preview = false;

      ccm.start( data.factories[0].url, config, onAfterFactoryStarted );

      function onAfterFactoryStarted( instance ) {

        inner.find( '#render-factory' ).html('');
        inner.find( '#render-factory' ).append( instance.root );
        resizeHeight();
        renderPreview( instance, data );
        instance.element.querySelector( '#button-advanced' ).addEventListener( 'click', function () {
          resizeHeight();
        } );

        inner.find( '.save-as-new-btn' ).click( function() {
          embed_code_div_id = '#ccm-embed-code-'+ data.key+'-save-as';
          ccm_key_div_id = '#ccm-id-'+ data.key+'-save-as';
          is_save_btn = false;
          instance.submit();
        });
        inner.find( '.save-btn' ).click( function() {
          embed_code_div_id = '#ccm-embed-code-'+ data.key+'-save';
          ccm_key_div_id = '#ccm-id-'+ data.key+'-save';
          is_save_btn = true;
          instance.submit();
        });
      }

      function initializeModalDilogs() {
        let factory = data.factories[0];

        // click event for rendering of load app modal dialog
        inner.find( '.load-app-btn' ).click( function () {

          // set data-target attr. of modal dialog
          inner.find( '.load-app-btn' ).attr(  'data-target', '#ccm-'+ data.key );

          let load_app_clone = document.importNode( document.querySelector( '#load' ).content, true );
          load_app_clone.querySelector( '.modal' ).id = 'ccm-'+ data.key;
          let load_app_inner = $( load_app_clone.querySelector('div') );

          // click Event of load-app button
          load_app_inner.find( '.load-app' ).click( function () {
            if ( 'Web Component Cloud (W2C)' === load_app_inner.find ( '#src option:selected' ).text() ) {
              ccm.get( { store: 'w2c_' + data.key, url: 'https://ccm2.inf.h-brs.de' }, load_app_inner.find ('#key').val(), function ( result ) {
                loaded_app_key = load_app_inner.find ('#key').val();
                factory.config.data = { store: [ 'ccm.store', { x: result } ], key: 'x' };
                ccm.start( factory.url, factory.config, onAfterFactoryStarted );

                // display save-btn
                $( '.save-btn' ).fadeIn( 2000 );
              });
            }
          });
          document.body.appendChild( load_app_clone );
          $( this ).unbind( 'click' );
        });

        // click event for rendering modal dialog  with app usage information
        inner.find( '.save-as-new-btn' ).click( function () {
          inner.find( '.save-as-new-btn' ).attr(  'data-target', '#ccm-'+ data.key +'-save-as-new' );
          const modal_save_as_clone = document.importNode( document.querySelector( '#save' ).content, true );
          modal_save_as_clone.querySelector( '.modal' ).id = 'ccm-'+ data.key +'-save-as-new';
          const modal_save_as_clone_inner = $( modal_save_as_clone.querySelector( 'div' ) );
          modal_save_as_clone_inner.find('div span' ).eq(1).attr( 'id', 'ccm-embed-code-'+ data.key+'-save-as' );
          modal_save_as_clone_inner.find( 'div span' ).eq(4).attr( 'id', 'ccm-id-'+ data.key+'-save-as' );
          document.body.appendChild(  modal_save_as_clone );
          $( this ).unbind( 'click' );
        });

        // click event for rendering of save-app modal dialog
        inner.find( '.save-btn' ).click( function () {
          inner.find( '.save-btn' ).attr( 'data-target', '#ccm-'+ data.key +'-save' );
          const modal_saved_clone = document.importNode( document.querySelector( '#save' ).content, true );
          modal_saved_clone.querySelector( '.modal' ).id = 'ccm-'+ data.key +'-save';
          const modal_saved_clone_inner = $( modal_saved_clone.querySelector( 'div' ) );
          modal_saved_clone_inner.find('div span' ).eq(1).attr( 'id', 'ccm-embed-code-'+ data.key+'-save' );
          modal_saved_clone_inner.find( 'div span' ).eq(4).attr( 'id', 'ccm-id-'+ data.key+'-save' );
          document.body.appendChild(  modal_saved_clone );
          $( this ).unbind( 'click' );
        });

      }

      function getEmbedCode( name, version, store_settings, key ) {
        const index = name + ( version ? '-' + version.replace( /\./g, '-' ) : '' );
        return '&lt;ccm-'+index+' key=\'["ccm.get",'+JSON.stringify(store_settings)+',"'+key+'"]\'>&lt;/ccm-'+index+'&gt;';
      }

      function renderPreview( instance,  data ) {
        if(!instance.getValue) return;

        ccm.start( data.versions[0].source, instance.getValue(), function ( inst ) {
          ccm.helper.setContent( inner.find( '.preview' )[0], inst.root );

          resizeHeight();
        } );
      }
      
      function copyToClipboard( div ) {

        $( '.copy' ).click( function() {
          const range = document.createRange();
          range.selectNode( document.querySelector( div ));
          const selection = window.getSelection();
          selection.removeAllRanges();
          if( ! selection.containsNode( document.querySelector( div ) ) ) selection.addRange(range);
          document.execCommand('copy');
        });

      }

    }
  }

  function resizeHeight() {
    $(window).resize( function () {
      const max_height =  $( '.gallery-expander-contents' ).outerHeight();
      const height =  $( '.gallery-contents' ).outerHeight() + max_height;

      $('.gallery-item active').css( 'height', height);
      $('.gallery-item active > .gallery-expander').css( 'max-height', max_height );
    });

    $(window).trigger('resize');

  }
} );