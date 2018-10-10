/**
 * @overview ccm component component cloud
 * @author André Kless <tea.kless@web.de> 2018
 * @license MIT License
 */

( function () {

  const component = {

    name: 'component_cloud',

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-18.0.0.js',

    config: {

      html: {
        "main": {
          "inner": [
            {
              "id": "head"
            },
            {
              "id": "content"
            },
            {
              "id": "footer"
            }
          ]
        }
      },
      data: {
        "store": [ "ccm.store", { "name": "components", "url": "https://ccm2.inf.h-brs.de" } ],
        "key": { "$or": [
            { "_id": "news" }, { "_id": "quiz" }, { "_id": "exercise" }, { "_id": "pdf_viewer" },
            { "_id": "cloze" }, { "_id": "canban_board" }, { "_id": "canban_card" }, { "_id": "marking_words" },
            { "_id": "accordion" }, { "_id": "voting" }, { "_id": "thumb_rating" }, { "_id": "star_rating" },
            { "_id": "teambuild" }
          ] }
      },
      listing: [ "ccm.component", "https://ccmjs.github.io/akless-components/listing/versions/ccm.listing-2.0.0.js", {
        "key": "local",
        "html": {
          "main": {
            "inner": {
              "class": "row",
              "id": "entries"
            }
          },
          "entry": {
            "class": "entry col-md-2 col-sm-4 mx-auto",
            "inner": [
              {
                "class": "screenshot",
                "inner": [
                  {
                    "tag": "img",
                    "class": "rounded mx-auto d-block mb-4",
                    "style": "with:64px; height:64px",
                    "src": "%icon%"
                  },
                  {
                    "tag": "h5",
                    "class": "title text-center text-success text-monospace font-weight-light",
                    "inner": "%title%"
                  }
                ]
              },
              {
                "tag": "h6",
                "class": "description text-center text-secondary",
                "inner": "%abstract%"
              }
            ]
          }
        },
        "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap-4/css/bootstrap.css", "resources/css/listing.css" ]
      } ],
      component_manager: [ "ccm.component", "https://ccmjs.github.io/akless-components/component_manager/versions/ccm.component_manager-2.0.0.js",
        [ "ccm.get", "https://ccmjs.github.io/akless-components/component_manager/resources/configs.js", "demo", {

          "menu": {
            "component": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.3.0.js" ],
            "ignore": {
              "buttons": {
                "data": {
                  "entries": [
                    {
                      "title": "Details",
                      "content": { "id": "details" }
                    },
                    {
                      "title": "Rating",
                      "content": {
                        "inner": [
                          {
                            "class": "container-fluid",
                            "inner": [
                              { "tag": "h3", "inner": "Your Rating:" },
                              { "id": "rating" }
                            ]
                          },
                          {
                            "class": "container-fluid",
                            "inner": [
                              { "tag": "h3", "inner": "Rating Results:" },
                              { "id": "rating_result" }
                            ]
                          },
                          { "tag": "p" }
                        ]
                      }
                    },
                    {
                      "title": "Discussion",
                      "content": { "id": "comment" }
                    },
                    {
                      "title": "Demo",
                      "content": {
                        "style": "margin: 1em; display: grid; grid-template-columns: 13em auto",
                        "inner": [
                          { "id": "menu", "style": "margin-right: 1em;" },
                          { "id": "content", "style": "border: 3px double #ccc;" }
                        ]
                      }
                    },
                    {
                      "title": "Create App",
                      "content": {
                        "style": "margin: 1em; display: grid; grid-template-columns: 12em auto",
                        "inner": [
                          { "id": "menu", "style": "margin-right: 1em;" },
                          { "id": "content", "style": "border: 3px double #ccc;" }
                        ]
                      }
                    }
                  ]
                },
                "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/menu/resources/configs.js", "bootstrap" ],
              },
              "list_group": {
                "html": {
                  "main": {
                    "id": "main",
                    "inner": [
                      {
                        "inner": {
                          "class": "list-group",
                          "id": "entries"
                        }
                      }
                    ]
                  },
                  "entry": {
                    "tag": "a",
                    "class": "entry list-group-item",
                    "onclick": "%click%",
                    "style": "cursor: pointer",
                    "inner": {
                      "class": "title"
                    }
                  }
                },
                "css": [ "ccm.load",
                  "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
                  { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" }
                ]
              }
            }
          },
        } ]
      ],
      libs: [ "ccm.load", "resources/libs/elementQueries/ElementQueries.js", "resources/libs/elementQueries/ResizeSensor.js" ],
      css: [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap-4/css/bootstrap.css" ],

      //  "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.1.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ],
      //  "sort": ( a, b ) => a < b ? -1 : ( a > b ? 1 : 0 ),
      //  "defaults": {},
      //  "onclick": ( event, element, data, instance ) => {},
      //  "onrender": ( element, data, instance ) => console.log( element, data, instance )

    },

    Instance: function () {

      /**
       * own reference for inner functions
       * @type {Instance}
       */
      const self = this;

      /**
       * privatized instance members
       * @type {object}
       */
      let my;

      /**
       * shortcut to help functions
       * @type {Object.<string,function>}
       */
      let $;

      this.ready = async () => {

        // set shortcut to help functions
        $ = self.ccm.helper;

        // privatize all possible instance members
        my = $.privatize( self );

        // logging of 'ready' event
        this.logger && this.logger.log( 'ready', $.privatize( this, true ) );

      };

      this.start = async () => {
        const main_elem = $.html( my.html.main );

        await my.listing.start( {
          root: main_elem.querySelector( '#content' ),
          data: my.data,
          sort: ( a, b ) => {
            const title_x = a.title.toLowerCase();
            const title_y = b.title.toLowerCase();
            const developer_x = ( a.developer || '' ).toLowerCase();
            const developer_y = ( b.developer || '' ).toLowerCase();
            if ( title_x < title_y ) return -1;
            if ( title_x > title_y ) return 1;
            if ( developer_x < developer_y ) return -1;
            if ( developer_x > developer_y ) return 1;
            return 0;
          },
          onrender: ( element, data ) => {
            if ( !self.rating ) return;
            self.rating.start( {
              root: element.querySelector( '.rating' ),
              'data.key': data.key
            } );
          },
          onclick: async ( event, element, data ) => {
            const instance = await my.component_manager.start( {
              data: {
                store: my.data.store,
                key: data.key
              }
            } );
            $.setContent( main_elem, instance.root );
          }

        } );
        $.setContent( self.element, main_elem );
      };

    }

  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();