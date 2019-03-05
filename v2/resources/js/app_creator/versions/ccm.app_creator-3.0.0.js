/**
 * @overview ccm component for creating apps
 * @author Tea Kless <tea.kless@web.de> 2019
 * @copyright Tea Kless - All rights reserved.
 * @version latest (3.0.0)
 * @based on ccm.app_builder by Andrè Kless
 */

( function () {

  const component = {

    name: 'app_creator',
    version: [3,0,0],

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-20.0.0.js',

    config: {

      "html": {
        "main": {
          "id": "wrapper",
          "inner": [
            {
              "id": "section-builder",
              "inner": [
                {
                  "id": "wrapper-builder",
                  "inner": [
                    {
                      "id": "builder"
                    },
                    {
                      "id": "preview-button",
                      "inner": {
                        "id": "button-sticky",
                        "inner": {
                          "id": "wrapper-button",
                          "inner": {
                            "tag": "a",
                            "id": "button",
                            "inner": "preview",
                            "style": "color: #fff;"
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "id": "buttons",
                  "class": "text-center",
                  "inner": [
                    {
                      "tag": "button",
                      "id": "button-load",
                      "class": "btn",
                      "onclick": "%onLoad%",
                      "inner": [
                        {
                          "tag": "span",
                          "class": "fas fa-wrench"
                        },
                        {
                          "class": "footer-icon",
                          "inner": "LOAD APP"
                        }
                      ]
                    },
                    {
                      "tag": "button",
                      "id": "button-update",
                      "class": "btn",
                      "disabled": true,
                      "onclick": "%onUpdate%",
                      "inner":[
                        {
                          "tag": "span",
                          "class": "fas fa-cloud-upload-alt"
                        },
                        {
                          "class": "footer-icon",
                          "inner": "UPDATE APP"
                        }
                      ]
                    },
                    {
                      "tag": "button",
                      "id": "button-create",
                      "class": "btn",
                      "onclick": "%onCreate%",
                      "inner": [
                        {
                          "tag": "span",
                          "class": "far fa-plus-square"
                        },
                        {
                          "class": "footer-icon",
                          "inner": "NEW APP"
                        }
                      ]
                    },
                    {
                      "tag": "button",
                      "id": "button-delete",
                      "disabled": true,
                      "class": "btn",
                      "onclick": "%onDelete%",
                      "inner": [
                        {
                          "tag": "span",
                          "class": "far fa-trash-alt"
                        },
                        {
                          "class": "footer-icon",
                          "inner": "DELETE APP"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "section-preview",
              "inner": [
                {
                  "id": "preview"
                }
              ]
            }
          ]
        },

        "read": {
          "id": "read",
          "inner": [
            {
              "tag": "legend",
              "class": "text-primary",
              "inner": "Load an existing App"
            },
            {
              "tag": "p",
              "inner": "Use one of the following ways to load an app:"
            },
            {
              "id": "embed",
              "class": "input-group mb-3",
              "inner": [
                {
                  "class": "input-group-prepend",
                  "inner": {
                    "tag": "span",
                    "class": "input-group-text",
                    "inner": "Embed"
                  }
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "embed_code",
                  "class": "form-control",
                  "aria-label": "Embed Code"
                },
                {
                  "class": "input-group-append",
                  "inner": {
                    "tag": "button",
                    "id": "embed_load",
                    "class": "btn btn-success",
                    "type": "button",
                    "inner": "Load App",
                    "onclick": "%embed%"
                  }
                }
              ]
            },
            {
              "class": "input-group mb-3",
              "inner": [
                {
                  "class": "input-group-prepend",
                  "inner": {
                    "tag": "span",
                    "class": "input-group-text",
                    "inner": "App ID"
                  }
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "app_id",
                  "class": "form-control",
                  "aria-label": "App ID"
                },
                {
                  "class": "input-group-append",
                  "inner": {
                    "tag": "button",
                    "id": "id_copy",
                    "class": "btn btn-success",
                    "type": "button",
                    "inner": "Load App",
                    "onclick": "%app_id%"
                  }
                }
              ]
            },
            {
              "class": "input-group mb-3",
              "inner": [
                {
                  "class": "input-group-prepend",
                  "inner": {
                    "tag": "span",
                    "class": "input-group-text",
                    "inner": "URL"
                  }
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "app_url",
                  "class": "form-control",
                  "aria-label": "URL"
                },
                {
                  "class": "input-group-append",
                  "inner": {
                    "tag": "button",
                    "id": "url_copy",
                    "class": "btn btn-success",
                    "type": "button",
                    "inner": "Load App",
                    "onclick": "%url%"
                  }
                }
              ]
            }
          ]
        },

        "usage": {
          "id": "usage",
          "inner": [
            {
              "tag": "legend",
              "class": "text-primary",
              "inner": [
                "How can you use the App?",
                {
                  "tag": "span",
                  "class": "copy-embed-code btn btn-sm btn-warning float-right",
                  "inner": "Copy"
                }
              ]
            },
            {
              "tag": "p",
              "class": "text-info",
              "inner": [
                "Add the following ",
                {
                  "tag": "code",
                  "inner": "EMBED CODE"
                },
                " to your page:"
              ]
            },
            {
              "tag": "p",
              "inner": {
                "tag": "code",
                "id": "embed-code"
              }
            },
            {
              "tag": "legend",
              "class": "text-primary",
              "inner": [
                "If you want to change the created App...",
                {
                  "tag": "span",
                  "class": "copy-id btn btn-sm btn-warning float-right",
                  "inner": "Copy"
                }
              ]
            },
            {
              "tag": "p",
              "class": "alert alert-info",
              "role": "alert",
              "inner": [
                {
                  "tag": "span",
                  "class": "glyphicon glyphicon-exclamation-sign"
                },
                " Note this ID: ",
                {
                  "tag": "span",
                  "class": "text-danger",
                  "id": "id"
                }
              ]
            }
          ]
        },

        "deleted": {
          "id": "deleted",
          "inner": {
            "tag": "p",
            "id": "success",
            "class": "lead text-danger",
            "inner": "App was deleted successfully."
          }
        },

        "handover": {
          "id": "handover",
          "inner": [
            {
              "class": "d-flex",
              "inner": [
                {
                  "inner": [
                    {
                      "id": "embed",
                      "class": "input-group mb-3",
                      "inner": [
                        {
                          "class": "input-group-prepend",
                          "inner": {
                            "tag": "span",
                            "class": "input-group-text",
                            "inner": "Embed"
                          }
                        },
                        {
                          "tag": "input",
                          "readonly": true,
                          "type": "text",
                          "id": "embed_code",
                          "class": "form-control bg-white",
                          "aria-label": "Embed Code"
                        },
                        {
                          "class": "input-group-append",
                          "inner": {
                            "tag": "button",
                            "id": "embed_copy",
                            "class": "btn btn-success",
                            "type": "button",
                            "inner": "Copy"
                          }
                        }
                      ]
                    },
                    {
                      "class": "input-group mb-3",
                      "inner": [
                        {
                          "class": "input-group-prepend",
                          "inner": {
                            "tag": "span",
                            "class": "input-group-text",
                            "inner": "App ID"
                          }
                        },
                        {
                          "tag": "input",
                          "readonly": true,
                          "type": "text",
                          "id": "app_id",
                          "class": "form-control bg-white",
                          "aria-label": "App ID"
                        },
                        {
                          "class": "input-group-append",
                          "inner": {
                            "tag": "button",
                            "id": "id_copy",
                            "class": "btn btn-success",
                            "type": "button",
                            "inner": "Copy"
                          }
                        }
                      ]
                    },
                    {
                      "class": "input-group mb-3",
                      "inner": [
                        {
                          "class": "input-group-prepend",
                          "inner": {
                            "tag": "span",
                            "class": "input-group-text",
                            "inner": "URL"
                          }
                        },
                        {
                          "tag": "input",
                          "readonly": true,
                          "type": "text",
                          "id": "app_url",
                          "class": "form-control bg-white",
                          "aria-label": "URL"
                        },
                        {
                          "class": "input-group-append",
                          "inner": {
                            "tag": "button",
                            "id": "url_copy",
                            "class": "btn btn-success",
                            "type": "button",
                            "inner": "Copy"
                          }
                        }
                      ]
                    }
                  ]
                },
                { "id": "qr_code", "class": "pl-2" }
              ]
            },
            {
              "class": "text-center",
              "inner": [
                {
                  "tag": "button",
                  "type": "button",
                  "id": "download",
                  "class": "btn btn-primary mr-2",
                  "inner": [
                    {
                      "tag": "span",
                      "class": "fas fa-file-download"
                    },
                    " File"
                  ]
                },
                {
                  "tag": "a",
                  "id": "booklet",
                  "class": "btn btn-secondary mr-2",
                  "inner": [
                    {
                      "tag": "span",
                      "class": "fas fa-bookmark"
                    },
                    " Booklet"
                  ]
                },
                {
                  "tag": "button",
                  "type": "button",
                  "id": "ibook",
                  "class": "btn btn-info mr-2",
                  "inner": [
                    {
                      "tag": "span",
                      "class": "fas fa-book"
                    },
                    " iBook Widget"
                  ]
                },
                {
                  "tag": "button",
                  "type": "button",
                  "id": "scorm",
                  "class": "btn btn-danger",
                  "inner": [
                    {
                      "tag": "span",
                      "class": "fas fa-archive"
                    },
                    " SCORM"
                  ]
                }
              ]
            }
          ]
        }

      },
      "data": { "store": [ "ccm.store" ] },
      "warning": "Are you sure you want to delete this App?",
      "modal": [ "ccm.component",  "https://ccmjs.github.io/tkless-components/modal/ccm.modal.js", {
        "css": [ "ccm.load", "https://use.fontawesome.com/releases/v5.6.3/css/all.css" ]
      } ],
      "qr_code": [ "ccm.load", "https://ccmjs.github.io/akless-components/libs/qrcode-generator/qrcode.min.js" ],
      "helper": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/helper.js", "type": "module" } ],
      "css": [ "ccm.load", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
        "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
        { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
        "https://tkless.github.io/w2c/v2/resources/js/app_creator/resources/default.css"
      ]

      //  "convert": { "app_to_builder": json => json, "builder_to_app": json => json },
      //  "builder",
      //  "app",
      //  "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.2.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ],
      //  "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.1.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ],
      //  "onchange"

    },

    Instance: function () {

      let $;

      /**
       * current app-specific builder instance
       * @type {Object}
       */
      let builder;

      this.ready = async () => {

        // set shortcut to help functions
        $ = this.ccm.helper;

        // set function for JSON conversion of app configuration
        if ( $.isObject( this.data ) && this.convert ) this.data.convert = this.convert.app_to_builder;

        // logging of 'ready' event
        this.logger && this.logger.log( 'ready', $.privatize( this, true ) );

      };

      this.start = async () => {

        const self = this;

        /**
         * app configuration
         * @type {Object}
         */
        let dataset = await $.dataset( this.data );

        // logging of 'start' event
        this.logger && this.logger.log( 'start', $.clone( dataset ) );

        /**
         * current App-ID
         * @type {string}
         */
        let app_id = dataset.key; delete dataset.key;

        let is_new = !Object.keys( dataset ).length;

        // render main HTML structure
        $.setContent( self.element, $.html( self.html.main, {
          onLoad: loadApp,
          onCreate: createApp,
          onUpdate: updateApp,
          onDelete: deleteApp
        } ) );

        /**
         * website area for app building
         * @type {Element}
         */
        const builder_elem = this.element.querySelector( '#builder' );

        /**
         * website area for app preview
         * @type {Element}
         */
        const preview_elem = this.element.querySelector( '#preview' );

        this.element.querySelector( '#button' ).addEventListener( 'click', () => {
          this.element.querySelector( '#wrapper' ).classList.toggle( 'active' );
        } );

        /**
         * website area for CRUD buttons
         * @type {Element}
         */
        const buttons_elem = this.element.querySelector( '#buttons' );

        /**
         * app configuration is managed in a local JavaScript object
         * @type {boolean}
         */
        const isLocalStore = !this.data.store.source().name;

        // render initial app state
        await renderApp();

        /**
         * renders loaded app and updates preview
         * @returns {Promise}
         */
        async function renderApp() {

          // render new app-specific builder with loaded app configuration as start values
          builder = await self.builder.start( {
            root: builder_elem,
            data: {
              store: [ 'ccm.store', { app: dataset } ],
              key: 'app'
            },
            onchange: updatePreview
          } );

          // activate "Update" and "Delete" button
          !isLocalStore && !is_new && buttons_elem.querySelectorAll( '.disabled' ).forEach( button => button.removeAttribute( 'disabled' ) );

          // update preview of build app
          await updatePreview();

        }

        /** when "Create" button has been clicked */
        async function createApp() {

          // has user instance? => perform login
          self.user && await self.user.login();

          // get current app configuration from app-specific builder
          dataset = builder.getValue(); delete dataset.key;

          // add permission settings
          if ( self.user ) dataset._ = { access: { get: 'all', set: 'creator', del: 'creator' } };

          // save app configuration
          app_id = await self.data.store.set( dataset ); delete dataset.key;

          // logging of 'create' event
          self.logger && self.logger.log( 'create', $.clone( dataset ) );

          // give app to user
          await handoverApp();

          // has 'change' callback? => perform it
          self.onchange && self.onchange( self );

        }

        /** when "Load" button has been clicked */
        async function loadApp() {

          // logging of 'read' event
          self.logger && self.logger.log( 'read' );

          /**
           * modal dialog content for loading an existing app
           * @type {Element}
           */
          const content = $.html( self.html.read, {
            embed: async () => {

              /**
               * decomposed embed code
               * @type {Object}
               */
              const result = self.helper.decomposeEmbedCode( content.querySelector( '#embed_code' ).value.trim() );

              // load app
              result && await load( result.key, result.store.name ? await ccm.store( result.store ) : undefined );

            },
            app_id: async () => await load( content.querySelector( '#app_id' ).value.trim() ),
            url: async () => {

              /**
               * decomposed app URL
               * @type {Object}
               */
              const result = self.helper.decomposeAppURL( content.querySelector( '#app_url' ).value.trim() );

              // load app
              result && await load( result.key, result.store.name ? await ccm.store( result.store ) : undefined );

            }
          } );

          // render modal dialog
          const dialog = await self.modal.start( {
            modal_title: $.html ( { "tag": "span", "id": "failed", "class": "text-danger", "style": "display: none;", "inner": "App-ID not found" } ) ,
            modal_content: content,
            footer: null
          } );

          /**
           * loads a ccm-based app
           * @param {string|string[]} key - app ID
           * @param {Object} store - settings for the ccm data store that contains the ccm-based app instance configuration
           * @returns {Promise<void>}
           */
          async function load( key, store=self.data.store ) {

            // has user instance? => perform login
            self.user && await self.user.login();

            // no app ID? => abort
            if ( !key ) return;

            // load app configuration
            dataset = await store.get( key );

            // no app configuration with entered App-ID exists? => show failed message
            if ( !dataset ) return failed();

            // remove modal dialog
            dialog.close();

            // logging of 'load' event
            self.logger && self.logger.log( 'load', $.clone( dataset ) );

            // remember App ID
            app_id = dataset.key; delete dataset.key;

            // starts not from new app configuration
            is_new = false;

            // render loaded app
            await renderApp();

            // perform 'change' callback
            self.onchange && self.onchange( self, 'read' );

            /** shows failed message */
            function failed() {
              const failed_elem = dialog.element.querySelector( '#failed' );
              failed_elem.style.display = 'block';
              fadeOut( failed_elem );
            }

          }

        }

        /** when "Update" button has been clicked */
        async function updateApp() {

          // invalid state? => abort
          if ( !app_id || is_new || isLocalStore ) return;

          // has user instance? => perform login
          self.user && await self.user.login();

          // get current app configuration from app-specific builder
          dataset = builder.getValue();

          // add App-ID to app configuration (to save app under same App-ID again)
          dataset.key = app_id;

          // logging of 'update' event
          self.logger && self.logger.log( 'update', $.clone( dataset ) );

          // save app configuration
          app_id = await self.data.store.set( dataset ); delete dataset.key;

          // give app to user
          await handoverApp();

          // has 'change' callback? => perform it
          self.onchange && self.onchange( self );

        }

        /** when "Delete" button has been clicked */
        async function deleteApp() {

          // invalid state or user is not sure about deletion? => abort
          if ( !app_id || is_new || isLocalStore || !confirm( self.warning ) ) return;

          // has user instance? => perform login
          self.user && await self.user.login();

          // logging of 'delete' event
          self.logger && self.logger.log( 'delete', $.clone( app_id ) );

          // delete app configuration
          await self.data.store.del( app_id );

          // forget App-ID
          app_id = undefined;

          // render success message (and slowly fade it out)
          await self.modal.start( {
            modal_title: ' ',
            modal_content: self.html.deleted,
            footer: [ { "caption": "Ok", "style": "success", "onclick": function () { this.close(); } } ]
          } );

          // disable "Update" and "Delete" button
          buttons_elem.querySelector( '#button-update' ).removeAttribute( 'disabled' );
          buttons_elem.querySelector( '#button-delete' ).removeAttribute( 'disabled' );

          // has 'change' callback? => perform it
          self.onchange && self.onchange( self );

        }

        /** gives app to user */
        async function handoverApp() {

          // activate "Update" and "Delete" button
          !isLocalStore && buttons_elem.querySelectorAll( 'button' ).forEach( button => {
            if ( button.disabled ) button.removeAttribute( 'disabled' );
          } );

          /**
           * modal dialog content for handover of the app
           * @type {Element}
           */
          const content = $.html( self.html.handover );

          // render modal dialog
          await self.modal.start( {
            "modal_title": "Handover of the App",
            "modal_content": content,
            "footer": null
          } );

          // prepare data store settings (needed for embed code)
          let store_settings = self.data.store.source(); if ( !isLocalStore ) { store_settings = {}; store_settings[ app_id ] = dataset; }

          /**
           * embed code for saved app
           * @type {string}
           */
          const embed_code = self.helper.embedCode ? await self.helper.embedCode( self.app.url, store_settings, app_id, undefined, self.ccm ) : undefined;

          // provide App via Embed Code
          if ( embed_code ) {
            content.querySelector( '#embed_code' ).value = embed_code;
            content.querySelector( '#embed_copy' ).addEventListener( 'click', () => copyToClipboard( content.querySelector( '#embed_code' ) ) );
          }
          else $.removeElement( content.querySelector( '#embed' ) );

          // provide App ID
          content.querySelector( '#app_id'  ).value = app_id;
          content.querySelector( '#id_copy' ).addEventListener( 'click', () => copyToClipboard( content.querySelector( '#app_id' ) ) );

          // provide App via URL
          const app_url = self.helper.appURL( self.app.url, store_settings, app_id );
          content.querySelector( '#app_url'  ).value = app_url;
          content.querySelector( '#url_copy' ).addEventListener( 'click', () => copyToClipboard( content.querySelector( '#app_url' ) ) );

          // provide App via QR Code
          if ( self.qr_code && qrcode ) {
            let demoQRCode = qrcode( 0, 'M' );
            demoQRCode.addData( app_url );
            demoQRCode.make();
            let qrCodeSVGTag = document.createElement( 'div' );
            qrCodeSVGTag.innerHTML = demoQRCode.createImgTag();
            $.setContent( content.querySelector( '#qr_code' ), qrCodeSVGTag.firstChild );
          }
          else $.removeElement( content.querySelector( '#qr_code' ) );

          // provide App via Download as HTML File
          if ( embed_code && self.helper.downloadApp )
            content.querySelector( '#download' ).addEventListener( 'click', () => self.helper.downloadApp( embed_code ) );
          else
            $.removeElement( content.querySelector( '#download' ) );

          // provide App via Booklet
          if ( self.booklet )
            content.querySelector( '#booklet' ).setAttribute( 'href', ( await self.booklet.instance( {
              app: [ 'ccm.start', self.app.url, self.getValue() ],
              icon: self.icon
            } ) ).booklet() );
          else
            $.removeElement( content.querySelector( '#booklet' ) );

          // provide App via iBook Widget
          if ( embed_code && self.helper.iBookWidget )
            content.querySelector( '#ibook' ).addEventListener( 'click', () => self.helper.iBookWidget( embed_code ) );
          else
            $.removeElement( content.querySelector( '#ibook' ) );

          // provide App via SCORM
          if ( embed_code && self.helper.scorm )
            content.querySelector( '#scorm' ).addEventListener( 'click', () => self.helper.scorm( embed_code ) );
          else
            $.removeElement( content.querySelector( '#scorm' ) );

          /**
           * copies text inside a HTML element to clipboard
           * @param element
           */
          function copyToClipboard( element ) {

            const range = document.createRange();
            range.selectNode( element );
            const selection = window.getSelection();
            selection.removeAllRanges();
            if ( !selection.containsNode( element ) )
              selection.addRange( range );
            document.execCommand( 'copy' );

          }

        }

        /**
         * fades out an element
         * @param {Element} elem
         */
        function fadeOut( elem ) {
          elem.style.opacity = 1;
          ( function fade() {
            if ( ( elem.style.opacity -= .005 ) >= 0 ) requestAnimationFrame( fade );
          } )();
        }

        /** updates website area for app preview */
        async function updatePreview() {

          let config = self.getValue();
          if ( self.convert && self.convert.builder_to_app ) config = self.convert.builder_to_app( config );
          preview_elem && $.setContent( preview_elem, ( await self.app.start( config ) ).root );
        }

      };

      /**
       * returns resulting instance configuration for target component
       * @returns {Object} instance configuration for target component
       */
      this.getValue = () => builder && builder.getValue && $.clone( builder.getValue() ) || null;

    }

  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();