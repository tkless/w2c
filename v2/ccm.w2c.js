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
                        "src": "https://tkless.github.io/w2c/v2/resources/img/learningApp_market_logo.svg",
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
                      "id": "how-to",
                      "tag": "a",
                      "class": "nav-a",
                      "inner": "How To"
                    },
                    {
                      "tag": "a",
                      "class": "nav-a",
                      "id": "analytic",
                      "inner": "App Results"
                    },
                    {
                      "id": "dashboard",
                      "tag": "a",
                      "class": "nav-a fas fa-lock"
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
        "store": [ "ccm.store", { "name": "ws_marketplace", "url": "https://ccm2.inf.h-brs.de" } ],
        "key": { }
      },
      template: {
        home: [ "ccm.load", { "url": "https://tkless.github.io/w2c/v2/resources/home.html", "type": "data", "method": "get" } ],
        how_to: [ "ccm.load", { "url": "https://tkless.github.io/w2c/v2/resources/how_to.html", "type": "data", "method": "get" } ],
        footer: [ "ccm.load", { "url": "https://tkless.github.io/w2c/v2/resources/footer.html", "type": "data", "method": "get" } ]
      },
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
          "https://tkless.github.io/w2c/v2/resources/css/menu.css"
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
        "css": [ "ccm.load", "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css", "https://tkless.github.io/w2c/v2/resources/css/listing.css" ]
      } ],
      feedback: [  "ccm.component", "https://ccmjs.github.io/tkless-components/feedback/versions/ccm.feedback-4.0.0.js", {
        from_above: "20",
        css: [ "ccm.load", "https://tkless.github.io/w2c/v2/resources/css/feedback.css"],
        data: { "store": [ "ccm.store", { "name": "ws_feedback", "url": "https://ccm2.inf.h-brs.de" } ] }
      } ],
      chart: [ "ccm.component", "https://ccmjs.github.io/akless-components/highchart/versions/ccm.highchart-3.0.0.js"],
      source : { url: "https://ccm2.inf.h-brs.de" },
      db_prefix: "ws",
      user: [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.3.1.js",
        {
          "title": "Log in for Admins only."
        },
        [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "cloud" ]
      ],
      analytic: [ "ccm.component", "https://ccmjs.github.io/akless-components/result/versions/ccm.result-2.0.0.js", [
        "ccm.get","https://ccmjs.github.io/akless-components/result/resources/configs.js","ws"
      ] ],
      css: [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap-4/css/bootstrap.css",
        { "context": "head", "url":"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
        "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
        { "context": "head", "url": "https://use.fontawesome.com/releases/v5.6.3/css/all.css" },
        "https://tkless.github.io/w2c/v2/resources/css/w2c.css"
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
          my.source.name = undefined;

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
                    "width": "64px",
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
                        const builder = await self.ccm.component( data.ignore.builder[0].url, { parent: self } );
                        const cfg = $.clone( data.ignore.builder[0].config );
                        cfg.app = [ 'ccm.component', data.url ];

                        if ( my.source.url && !my.source.name )
                          my.source.name = my.db_prefix? my.db_prefix + '_' + data.key: data.key;

                        cfg.data = { store: [ 'ccm.store', my.source ] };
                        cfg.root = menu.element.querySelector( '#content' );
                        await builder.start( cfg );
                        break;
                      case 1:
                        const comp_element = $.html( my.html.overview, {
                          autor: data.developer,
                          note: data.description? data.description: $.html( { "class": "text-muted", "inner": "No Content provided. No Content provided. No Content provided. No Content provided. No Content provided. No Content provided." } ),
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

        async function renderHome() {
          setNavItemActive( '#home' );
          $.setContent( main_elem.querySelector( '#content' ), $.html( my.template.home ) );
          main_elem.querySelector( 'button' ).addEventListener( 'click', async ()=> {
            // render how-to
            main_elem.querySelector( '#how-to' ).click();
            main_elem.querySelector( '#content' ).scrollTop = -20;
          } );
          renderChart();
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.template.footer ) );
        }

        async function renderChart() {
          const store_names = [ 'ws_chat', 'ws_comment', 'ws_exercise', 'ws_cloze',
                                'ws_live_poll', 'ws_mark_words', 'ws_pdf_viewer', 'ws_qiuck_decide',
                                'ws_quiz', 'ws_star_rating', 'ws_teambuild', 'ws_thumb_rating'];
          const app_title = [ 'Chat', 'Comment', 'Exercise', 'Fill in The Blanks',
                              'Live Poll', 'Mark Words', 'PDF Viewer', 'Qiuck Decision',
                              'Quiz', 'Star Rating', 'Team Building', 'Thumb Rating'];
          let chart_data = [];
          let max = 0;
          let max_name = '';
          let apps_total = 0;


          for ( let i = 0; i < store_names.length; i++ ) {
            let store = await $.solveDependency( [ "ccm.store", { name: store_names[ i ], url: my.source.url } ] );
            let store_data = await store.get({});

            if( max < store_data.length ) {
              max = store_data.length;
              max_name = app_title[ i ];
            }

            let entry = {
              name: app_title[ i ],
              y: store_data.length
            };

            store_data.length && chart_data.push( entry );

            apps_total = apps_total + store_data.length;

          }

          for( let app in chart_data ){
            if( chart_data[ app ]. name === max_name ) {
              chart_data[ app ].sliced = true;
              chart_data[ app ].selected = true;
            }
          }

          await my.chart.start({
            root: main_elem.querySelector( '#chart' ),
            settings: {
              colors: ["#90ed7d", "#7cb5ec", "#85a366", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#434348", "#f45b5b", "#ffcc66", "#91e8e1"],
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
              },
              title: {
                text: 'Total: ' + apps_total + ' Apps'
              },
              tooltip: {
                pointFormat: '{series.name}: <b>{point.y} ({point.percentage:.1f}%)</b>'
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}',
                    style: {
                      color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                  }
                }
              },
              series: [{
                name: 'Apps',
                colorByPoint: true,
                data: chart_data
              }]
            }
          });
        }

        function renderHowTo() {
          setNavItemActive( '#how-to' );
          $.setContent( main_elem.querySelector( '#content' ), $.html( my.template.how_to ) );
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.template.footer ) );
        }
        
        async function renderDashboard() {
          await self.user.login();
          setNavItemActive( '#lock' );
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.template.footer ) );
        }

        async function renderAnalytic() {
          await my.analytic.start( { root:  main_elem.querySelector( '#content' ) } );
          setNavItemActive( '#analytic' );
          $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.template.footer ) );
        }

        function clearContentDiv() {
          $.setContent( main_elem.querySelector( '#content' ), '' );
        }

        function setUpNavItems() {
          main_elem.querySelectorAll( '.nav-a' ).forEach( item => {
            item.addEventListener( "click", async event => {
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
                  $.setContent( main_elem.querySelector( '#footer-section' ), $.html( my.template.footer ) );
                  renderAllComponents();
                  break;
                case 'how-to':
                  event.target.classList.add( 'active' );
                  main_elem.querySelector( '#nav-items' ).classList.remove( 'responsive' );
                  clearContentDiv();
                  renderHowTo();
                  break;
                case 'analytic':
                  event.target.classList.add( 'active' );
                  await renderAnalytic();
                  break;
                case 'dashboard':
                  event.target.classList.add( 'active' );
                  await renderDashboard();
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