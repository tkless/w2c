/**
 * @overview ccm component component cloud
 * @author Tea Kless <tea.kless@web.de> 2018
 * @copyright Tea Kless - All rights reserved.
 */

( function () {

  const component = {

    name: 'w2c',

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-20.0.0.js',

    config: {
      html: {
        "main": {
          "id": "main",
          "inner": [
            {
              "id": "head",
              "inner": [
                {
                  "id": "nav-items",
                  "class": "nav-items",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "brand",
                      "inner": {
                        "tag": "img",
                        "src": "resources/img/learningApp_market_logo.svg",
                        "width": "160px;",
                        "alt": "work&study Logo"
                      }
                    },
                    {
                      "id": "home",
                      "tag": "a",
                      "class": "nav-a",
                      "inner": "Home"
                    },
                    {
                      "tag": "a",
                      "class": "nav-a",
                      "id": "all-components",
                      "inner": "All Components"
                    },
                    {
                      "tag": "a",
                      "class": "nav-a",
                      "id": "how-to",
                      "inner": "How To"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "href": "javascript:void(0)",
                  "class": "icon navbar-toggler-icon",
                  "onclick": "%show_nav%",
                  "inner": {
                    "tag": "i",
                    "class": "fa fa-bars"
                  }
                }
              ]
            },
            {
              "id": "content",
              "class": "mb-5 mt-5"
            },
            {
              "id": "feedback",
            },
            {
              "id": "footer-section",
              "class": "mt-5"
            }
          ]
        },
        "overview": {
          "id": "component",
          "inner": [
            {
              "tag": "legend",
              "id": "section",
              "class": "container-fluid",
              "inner": "INFO"
            },
            {
              "id": "abstract",
              "class": "container-fluid",
              "inner": [
                {
                  "tag": "span",
                  "inner": {
                    "class": "blockquote-footer",
                    "inner": [
                      "Developed by",
                      {
                        "tag": "span",
                        "inner": {
                          "class": "btn btn-outline-light text-success btn-sm",
                          "inner": "%autor%"
                        }
                      }
                    ]
                  }
                },
                {
                  "class": "text-secondary mb-4",
                  "inner": "%abstract%"
                },
                {
                  "tag": "p",
                  "inner": "%note%"
                },
                {
                  "id": "description"
                },
              ]
            },
            {
              "tag": "legend",
              "id": "section",
              "class": "container-fluid",
              "inner": "EXAMPLE"
            },
            {
              "id": "demo",
              "class": "container-fluid bg-gray",
            },
            {
              "id": "discussion",
              "class": "container-fluid"
            }
          ]

        }
      },
      data: {
        "store": [ "ccm.store", { "name": "w&s_marketplace", "url": "https://ccm2.inf.h-brs.de" } ],
        "key": { }
      },
      footer: [ "ccm.load", { "url": "resources/footer.html", "type": "data" } ],
      menu:  [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.4.4.js", {
        "html": {
          "main": {
            "id": "main",
            "inner": [
              {
                "tag": "ul",
                "class": "nav nav-tabs",
                "id": "entries",
                "style": "padding: 0 1em;"
              },
              {
                "id": "content"
              }
            ]
          },
          "entry": {
            "tag": "li",
            "class": "entry nav-item",
            "onclick": "%click%",
            "style": "cursor: pointer",
            "inner": {
              "tag": "a",
              "class": "title nav-link"
            }
          }
        },
        "css": [ "ccm.load",
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
          "resources/css/menu.css"
        ]
        } ],
      listing: [ "ccm.component", "https://ccmjs.github.io/akless-components/listing/versions/ccm.listing-2.0.3.js", {
        "key": "local",
        "html": {
          "main": {
            "class": "container-fluid",
            "inner": {
              "class": "row",
              "id": "entries"
            }
          },
          "entry": {
            "class": "entry col-md-4 col-sm-4 mx-auto mt-3 mb-3",
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
                    "tag": "h4",
                    "class": "title text-monospace text-center font-weight-light",
                    "style": "font-weight: bold !important; color: #239BD1;", //#84A266
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
        "css": [ "ccm.load", "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css", "resources/css/listing.css" ]
      } ],
      feedback: [  "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
        from_above: 20,
        css: [ "ccm.load", "resources/css/feedback.css"],
        data: { "store": [ "ccm.store", { "name": "w&s_feedback", "url": "https://ccm2.inf.h-brs.de" } ] }
      } ],
      component_manager: [ "ccm.component", "https://ccmjs.github.io/akless-components/component_manager/versions/ccm.component_manager-2.2.5.js",
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
      source : { url: 'http://localhost:8080' },
      db_prefix: 'w&s',
      css: [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap-4/css/bootstrap.css",
        { "context": "head", "url":"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
        "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
        "resources/css/w2c.css"
      ]
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
        const main_elem = $.html( my.html.main, {
          show_nav: () => {
            let nav_items = main_elem.querySelector( "#nav-items" );
            if (nav_items.className === "nav-items") {
              nav_items.className += " responsive";
            } else {
              nav_items.className = "nav-items";
            }
          }
        } );
        await my.feedback.start( { root: main_elem.querySelector( '#feedback' )} );

        setUpNavItems();
        renderHome();

        $.setContent( self.element, main_elem );

        async function renderAllComponents() {
          setNavItemActive( '#all-components' );

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
            onclick: async ( event, element, data ) => {
              $.setContent(  main_elem.querySelector( '#footer-section' ), ''  );
              $.setContent( main_elem.querySelector( '#content' ), ( $.html({
                "id": "title",
                "class": "d-flex mb-4 align-items-center",
                "inner": [
                  {
                    "id": "icon",
                    "tag": "img",
                    "src": data.icon
                  },
                  {
                    "tag": "h2",
                    "class": "text-monospace ml-3",
                    "style": "font-weight: bold !important; color: #239BD1;",
                    "inner": data.title
                  }
                ]
              } ) ) );

              const menu = await my.menu.start( {
                  selected: 1,
                  data: { entries: [ {"title": 'Overview'}, {"title": 'Create App'} ] },
                  onclick: async ( event, menu ) => {
                    const tab = event.nr;
                    switch ( tab ) {
                      case 2:
                        const builder = await self.ccm.component( data.ignore.builder[0].url );
                        data.ignore.builder[0].config.app = [ 'ccm.component', data.url ];

                        if ( my.source.url && !my.source.name )
                          my.source.name = my.db_prefix? my.db_prefix + '_' + data.key: data.key;

                        data.ignore.builder[0].config.data = { store: [ 'ccm.store', my.source ] };
                        const builder_inst = await builder.start( data.ignore.builder[0].config );
                        $.setContent( menu.element.querySelector( '#content' ), builder_inst.root );
                        break;
                      case 1:
                        const comp_element = $.html( my.html.overview, {
                          autor: data.developer,
                          note: "Our components can be used platform-independent and therefore the generated content can be " +
                            "embedded on any website and used in real time. For more information please check out our getting started pages.",
                          abstract: data.abstract
                        } );
                        $.setContent( menu.element.querySelector( '#content' ), comp_element );
                        const demo = await self.ccm.component( data.url );
                        const config = await $.solveDependency( data.ignore.demos[0].config );
                        config.root = menu.element.querySelector( '#demo' );
                        await demo.start( config );
                        break;
                    }

                  }
                }
              );
              main_elem.querySelector( '#content' ).appendChild( menu.root );
            }

          } );
        }

        function renderHome() {
          setNavItemActive( '#home' );
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.footer ) );
        }
        
        function renderHowTo() {
          setNavItemActive( '#how-to' );
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.footer ) );
        }

        function clearContentDiv() {
          $.setContent( main_elem.querySelector( '#content' ), '' );
        }

        function setUpNavItems() {
          main_elem.querySelectorAll( '.nav-a' ).forEach( item => {
            item.addEventListener( "click", event => {
              main_elem.querySelectorAll(  '.nav-a' ).forEach( item => { item.classList.remove( 'active' )});
              switch ( event.target.id ) {
                case 'home':
                  event.target.classList.add( 'active' );
                  main_elem.querySelector( '#nav-items' ).classList.remove( 'responsive' );
                  clearContentDiv();
                  renderHome();
                  break;
                case 'all-components':
                  event.target.classList.add( 'active' );
                  main_elem.querySelector( '#nav-items' ).classList.remove( 'responsive' );
                  clearContentDiv();
                  $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.footer ) );
                  renderAllComponents();
                  break;
                case 'how-to':
                  event.target.classList.add( 'active' );
                  main_elem.querySelector( '#nav-items' ).classList.remove( 'responsive' );
                  clearContentDiv();
                  renderHowTo();
                  break;
              }
            } )
          } );

        }

        function setNavItemActive( nav_id ) {
          main_elem.querySelector( nav_id ).classList.add( 'active' );
        }

      };

    }

  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();