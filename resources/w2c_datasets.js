/**
 * @overview W2C datasets of ccm components
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ "w2c_datasets.js" ] = {
  "exercise": {
    "title": "Exercise",
    "abstract": "Free Text Task",
    "name": "exercise",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/exercise/versions/ccm.exercise-1.0.0.js",
        "minified":"https://tkless.github.io/ccm-components/exercise/versions/ccm.exercise-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [
      [  "ccm.get", "https://tkless.github.io/ccm-components/exercise/resources/configs.js", "demo"  ]
    ],
    "factories": [
      {
        "url": "https://tkless.github.io/ccm-components/exercise_builder/versions/ccm.exercise_builder-1.0.0.min.js",
        "config": { }
      }
      /*    {
            "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
            "config": {
              "url_to_modify": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-2.0.0.js",
              "preview": false,
              "display_final_component_and_config": false,
              "no_bootstrap_container": true
            }
          }*/
    ]
  },
  "difference_chart": {
    "title": "Difference Chart",
    "abstract": "To show the results of a questionaire for different groups",
    "name": "difference_chart",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://kaul.inf.h-brs.de/data/ccm/difference_chart/versions/ccm.difference_chart-1.0.0.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos":[
      [ "ccm.get", "https://kaul.inf.h-brs.de/data/ccm/difference_chart/resources/configs.js", "research" ]
    ]
  },
  "pdf_viewer": {
    "title": "PDF Viewer",
    "abstract": "For rendering a PDF",
    "name": "pdf_viewer",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-2.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-2.0.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [
       { pdf: //[ "ccm.get", { url: "https://ccm.inf.h-brs.de", store: "file_upload" }, "1517228670954X509252249813553" ],
          "//cdn.mozilla.net/pdfjs/tracemonkey.pdf"  }
    ],
    "factories": [
      {
        "url": "https://tkless.github.io/ccm-components/pdf_viewer_builder/versions/ccm.pdf_viewer_builder-1.0.0.min.js",
        "config": {
          "css": [ "ccm.load", "https://tkless.github.io/ccm-components/libs/bootstrap/css/bootstrap.css",
            { "context": "head", "url": "https://tkless.github.io/ccm-components/libs/bootstrap/css/font-face.css" },
            "https://tkless.github.io/ccm-components/pdf_viewer_builder/resources/default.css"
          ],
          "target": [ "ccm.component", "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-2.0.0.js", {  "pdf": null  } ],
          //"submit_button": true,
          //"preview": true,
          "file_upload": [ "ccm.component", "https://tkless.github.io/ccm-components/file_upload/versions/ccm.file_upload-1.0.0.js", {
            data: { store: [ "ccm.store", { "store": "file_upload", "url": "https://ccm.inf.h-brs.de", "method": "POST" } ] },
          } ]
          /*
          "start_values": {
            "pdf": [ "ccm.get", { url: "http://localhost:8080", store: "file_upload" }, "1518776028787X4201785986475841" ],
            "css": "['ccm.load','https://tkless.github.io/ccm-components/pdf-viewer/resources/default.css']",
            "user": "['ccm.instance','https://akless.github.io/ccm-components/user/versions/ccm.user-2.0.0.min.js',{'sign_on':'demo'}]"
          }*/

          //  onchange
          //  onfinish
        }
      }
  /*    {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/pdf-viewer/versions/ccm.pdf_viewer-2.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }*/
    ]
  },
  "content": {
    "title": "Content",
    "abstract": "For rendering a predefined content.",
    "name": "content",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://akless.github.io/ccm-components/content/versions/ccm.content-2.0.0.js",
        "minified": "https://akless.github.io/ccm-components/content/versions/ccm.content-2.0.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/content/versions/ccm.content-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/content/versions/ccm.content-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/content/resources/configs.min.js", "demo" ]
    ]
    /*"factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/content/versions/ccm.content-2.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/content/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "comment": {
    "title": "Comment",
    "abstract": "For rendering a comment to any component.",
    "name": "comment",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/comment/versions/ccm.comment-1.0.0.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos":[ {} ]
   /* "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/comment/versions/ccm.comment-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "eval": {
    "title": "Eval",
    "abstract": "For interpreting a given JavaScript expression.",
    "screenshots": [
      "https://akless.github.io/ccm-components/eval/resources/screenshot_1.jpg"
    ],
    "name": "eval",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/eval/versions/ccm.eval-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/eval/versions/ccm.eval-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/eval/resources/configs.min.js", "demo" ]
    ]
    /*"factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/eval/versions/ccm.eval-1.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/eval/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "cloze": {
    "title": "Fill-in-the-Blank Text",
    "abstract": "For rendering a fill-in-the-blank text.",
    "screenshots": [
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_1.jpg",
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_2.jpg",
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_3.jpg"
    ],
    "description": "The component supports solution hints, visual feedback, point allocation, time limitation, different layouts, authentication procedures, customization of buttons and learning analysis.",
    "name": "cloze",
    "versions": [
      {
        "version": "3.9.0",
        "source": "https://akless.github.io/ccm-components/cloze/versions/beta/ccm.cloze-3.9.0.js",
        "minified": "https://akless.github.io/ccm-components/cloze/versions/beta/ccm.cloze-3.9.0.min.js"
      },
      {
        "version": "2.2.0",
        "source": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.2.0.js",
        "minified": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.2.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/cloze/resources/configs.min.js", "demo" ]
    ],
    "factories": [
      {
        "url": "https://akless.github.io/ccm-components/cloze_builder/versions/ccm.cloze_builder-1.7.0.min.js",
        "config": {}
      },
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/cloze/versions/beta/ccm.cloze-3.9.0.js",
          "external_config": "https://akless.github.io/ccm-components/cloze/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]
  },
  "editor": {
    "title": "Quill Texteditor",
    "abstract": "For rendering a quill text editor.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/editor_preview_1.jpg"
    ],
    "name": "editor",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://tkless.github.io/ccm-components/editor/versions/ccm.editor-2.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/editor/versions/ccm.editor-2.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]
    /*"factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/editor/versions/ccm.editor-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "fine_upload": {
    "title": "Fine Uploader Connector",
    "abstract": "Upload a file to a server via Fine Uploader",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/fine_upload/resources/screenshot_1.jpg"
    ],
    "description": "In order to embed the famous Fine Uploader software anywhere, use this connector. see <a href='https://fineuploader.com/' target='_blank'>https://fineuploader.com/</a>: 'Fine Uploader aims to make file-uploading on the web possible in every browser and mobile device. It is cross-browser, dependency-free, and 100% JavaScript. The product is highly customizable, and allows integrators to fine-tune every aspect of their users’ upload experience. Implementation requires only a single CSS file, a JavaScript file, and a server to upload to. Fine Uploader users enjoy widespread browser support and a suite of features, resulting in a smooth experience when uploading files to a website.'",
    "name": "fine_upload",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/fine_upload/versions/ccm.fine_upload-1.0.0.js",
        "minified":"https://mkaul.github.io/ccm-components/fine_upload/versions/ccm.fine_upload-1.0.0.min.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/fine_upload/ccm.fine_upload.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "forum": {
    "title": "Forum",
    "abstract": "For rendering a forum.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/forum_preview_1.png"
    ],
    "name": "forum",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/forum/versions/ccm.forum-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/forum/versions/ccm.forum-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/forum/versions/ccm.forum-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "feedback": {
    "title": "Feedback",
    "abstract": "For rendering a feedback.",
    "name": "feedback",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/feedback/versions/ccm.feedback-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/feedback/versions/ccm.feedback-1.0.0.min.js"
      },
      {
        "version": "2.0.0",
        "source": "https://tkless.github.io/ccm-components/feedback/versions/ccm.feedback-2.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/feedback/versions/ccm.feedback-2.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [  [ "ccm.get", "https://tkless.github.io/ccm-components/feedback/resources/configs.min.js", "demo" ] ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/feedback/versions/ccm.feedback-1.0.0.min.js",
          "external_config": "https://tkless.github.io/ccm-components/feedback/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "game_chooser": {
    "title": "Game Chooser",
    "abstract": "Game for quickly choosing one of two answers.",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/game_chooser/resources/screenshot_1.jpg",
      "https://mkaul.github.io/ccm-components/game_chooser/resources/screenshot_2.jpg",
      "https://mkaul.github.io/ccm-components/game_chooser/resources/screenshot_3.jpg"
    ],
    "description": "Game Chooser is a little game implemented in ccm. Game Rules: A number is given and the user has to decide, whether the sum of digits is even or odd as fast as possible. There are two buttons, which the user can press accordingly. The time for choosing is recorded. The range of the numbers can be adjusted via a slider.",
    "name": "game_chooser",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/game_chooser/versions/ccm.game_chooser-1.0.0.js",
        "minified": "https://mkaul.github.io/ccm-components/game_chooser/versions/ccm.game_chooser-1.0.0.min.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/game_chooser/versions/ccm.game_chooser-1.0.0.min.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "geogebra": {
    "title": "GeoGebra Connector",
    "abstract": "<i>ccm</i> connector for GeoGebra",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/geogebra/resources/screenshot_1.jpg"
    ],
    "description": "In order to embed the famous GeoGebra software anywhere, use this connector. For GeoGebra see https://www.geogebra.org: 'GeoGebra is dynamic mathematics software for all levels of education that brings together geometry, algebra, spreadsheets, graphing, statistics and calculus in one easy-to-use package. GeoGebra is a rapidly expanding community of millions of users located in just about every country. GeoGebra has become the leading provider of dynamic mathematics software, supporting science, technology, engineering and mathematics (STEM) education and innovations in teaching and learning worldwide.'",
    "name": "geogebra",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/geogebra/versions/ccm.geogebra-1.0.0.js",
        "minified": "https://mkaul.github.io/ccm-components/geogebra/versions/ccm.geogebra-1.0.0.min.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/geogebra/ccm.geogebra.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "highlight": {
    "title": "Code Highlighting",
    "abstract": "For Code Highlighting",
    "name": "highlight",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/highlight/ccm.highlight.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/highlight/ccm.highlight.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "input": {
    "title": "Input",
    "abstract": "For user inputs.",
    "name": "input",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/input/versions/ccm.input-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/input/versions/ccm.input-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/input/resources/configs.min.js", "demo" ]
    ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/input/versions/ccm.input-1.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/input/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "kanban_board": {
    "title": "Kanban Board",
    "abstract": "For rendering a kanban board.",
    "screenshots": [
      "https://akless.github.io/ccm-components/kanban_board/resources/preview_1.png"
    ],
    "name": "kanban_board",
    "versions": [
      {
        "version": "1.1.0",
        "source": "https://akless.github.io/ccm-components/kanban_board/versions/ccm.kanban_board-1.1.0.js",
        "minified": "https://akless.github.io/ccm-components/kanban_board/versions/ccm.kanban_board-1.1.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/kanban_board/versions/ccm.kanban_board-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/kanban_board/versions/ccm.kanban_board-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_board/resources/configs.min.js", "demo" ]
    ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/kanban_board/versions/ccm.kanban_board-1.1.0.js",
          "external_config": "https://akless.github.io/ccm-components/kanban_board/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "kanban_card": {
    "title": "Kanban Card",
    "abstract": "For rendering a kanban card.",
    "screenshots": [
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_1.jpg",
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_2.png",
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_3.png"
    ],
    "name": "kanban_card",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/kanban_card/versions/ccm.kanban_card-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_card/resources/configs.min.js", "realtime" ]
    ],
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/kanban_card/resources/configs.min.js",
          "key_in_external_config": "realtime",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]
  },
  "le": {
    "title": "Learning Unit",
    "abstract": "For rendering a learning unit.",
    "name": "le",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://akless.github.io/ccm-components/le/versions/ccm.le-2.0.0.js",
        "minified": "https://akless.github.io/ccm-components/le/versions/ccm.le-2.0.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/le/versions/ccm.le-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/le/versions/ccm.le-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/akless/ccm/ccm-overview/configs.min.js", "le" ]
    ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/le/versions/ccm.le-2.0.0.js",
          "external_config": "https://akless.github.io/akless/ccm/ccm-overview/configs.min.js",
          "key_in_external_config": "le",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "learning_app": {
    "title": "LearningApp Connector",
    "abstract": "<i>ccm</i> connector for learning apps",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/learning_app/resources/screenshot_1.jpg"
    ],
    "description": "In order to embed the famous LearningApps software anywhere, use this connector. 'LearningApps.org is a Web 2.0 application, to support learning and teaching processes with small interactive modules. Those modules can be used directly in learning materials, but also for self studying. The aim is to collect reusable building blocks and make them available to everyone. Blocks (called Apps) include no specific framework or a specific learning scenario. The blocks are therefore not suitable as complete lessons or tasks, instead they must be embedded in an appropriate teaching scenario', see <a href='http://learningapps.org' target='_blank'>http://learningapps.org</a>.",
    "name": "learning_app",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/learning_app/versions/ccm.learning_app-1.0.0.js",
        "minified": "https://mkaul.github.io/ccm-components/learning_app/versions/ccm.learning_app-1.0.0.min.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/learning_app/ccm.learning_app.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "log": {
    "title": "Logger",
    "abstract": "For data logging.",
    "name": "log",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/log/versions/ccm.log-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/log/versions/ccm.log-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/"/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/log/versions/ccm.log-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "posts": {
    "title": "News",
    "abstract": "For rendering a news.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/posts_preview_1.png"
    ],
    "name": "posts",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/news/versions/ccm.posts-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/news/versions/ccm.posts-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/news/versions/ccm.posts-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "question": {
    "title": "Question",
    "abstract": "For rendering a question and given answers.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/question_preview_1.png"
    ],
    "name": "question",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/question/versions/ccm.question-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/question/versions/ccm.question-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/question/versions/ccm.question-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "quiz": {
    "title": "Quiz",
    "abstract": "For rendering a quiz.",
    "screenshots": [
      "https://akless.github.io/ccm-components/quiz/resources/preview_1.png",
      "https://akless.github.io/ccm-components/quiz/resources/preview_2.png"
    ],
    "name": "quiz",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-2.0.0.js",
        "minified": "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-2.0.0.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/quiz/resources/configs.min.js", "demo" ]
    ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-2.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/quiz/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "star_rating": {
    "title": "Star Rating",
    "abstract": "For rendering a star rating.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/star_rating_preview_1.png"
    ],
    "name": "star_rating",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/star_rating/versions/ccm.star_rating-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/star_rating/versions/ccm.star_rating-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/star_rating/versions/ccm.star_rating-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "star_rating_result": {
    "title": "Star Rating Result",
    "abstract": "For rendering a star rating result.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/star_rating_result_preview_1.png"
    ],
    "name": "star_rating_result",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "slidecast": {
    "title": "Slidecast",
    "abstract": "For rendering a slidecast.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/slidecast_preview_1.png",
      "https://akless.github.io/ccm-components/libs/screenshots/slidecast_preview_2.png"
    ],
    "name": "slidecast",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/slidecast/versions/ccm.slidecast-1.0.0.js",
        "monified": "https://tkless.github.io/ccm-components/slidecast/versions/ccm.slidecast-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/slidecast/versions/ccm.slidecast-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "teambuild": {
    "title": "Team Building",
    "abstract": "For realtime team building.",
    "name": "teambuild",
    "versions": [
      {
        "version": "1.0.1",
        "source": "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.1.js",
        "minified": "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.1.min.js"
      },
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/teambuild/resources/configs.min.js", "demo" ]
    ],
    "factories": [
      {
        "url": "https://akless.github.io/ccm-components/teambuild_builder/versions/ccm.teambuild_builder-2.3.0.min.js",
        "config": {}
      },
      {
        "url": "https://akless.github.io/ccm-components/teambuild_builder/versions/ccm.teambuild_builder-2.2.0.min.js",
        "config": {}
      }/*,
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.1.js",
          "external_config": "https://akless.github.io/ccm-components/teambuild/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }*/
    ]
  },
  "testsuite": {
    "title": "Test Suite",
    "abstract": "For running unit tests.",
    "name": "testsuite",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/testsuite/versions/ccm.testsuite-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/testsuite/versions/ccm.testsuite-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/"/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/testsuite/versions/ccm.testsuite-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "thumb_rating": {
    "title": "Thumb Rating",
    "abstract": "For rendering a thumb rating.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/thumb_rating_preview_1.png"
    ],
    "name": "thumb_rating",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/thumb_rating/versions/ccm.thumb_rating-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/thumb_rating/versions/ccm.thumb_rating-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/thumb_rating/versions/ccm.thumb_rating-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "user": {
    "title": "User",
    "abstract": "For user authentication.",
    "name": "user",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://akless.github.io/ccm-components/user/versions/ccm.user-1.0.0.js",
        "minified": "https://akless.github.io/ccm-components/user/versions/ccm.user-1.0.0.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/user/resources/configs.min.js", "demo" ]
    ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://akless.github.io/ccm-components/user/versions/ccm.user-1.0.0.js",
          "external_config": "https://akless.github.io/ccm-components/user/resources/configs.min.js",
          "key_in_external_config": "demo",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "uml": {
    "title": "UML Connector",
    "abstract": "<i>ccm</i> connector for PlantUML",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/uml/resources/screenshot_1.jpg"
    ],
    "description": "In order to embed the famous PlantUML software anywhere, use this connector. PlantUML.com is a web server that generates diagrams in the cloud. There are also various extensions or add-ons that incorporate PlantUML, see <a href='http://plantuml.com/' target='_blank'>http://plantuml.com/</a>",
    "name": "uml",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/uml/versions/ccm.uml.1.0.0.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/uml/ccm.uml.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "upload": {
    "title": "Upload",
    "abstract": "Upload a file to a server",
    "screenshots": [
      "https://mkaul.github.io/ccm-components/upload/resources/screenshot_1.jpg"
    ],
    "description": "With a file chooser you can choose any file from your computer. Upload lets you upload the file to a server.",
    "name": "upload",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/upload/versions/ccm.upload-1.0.0.js",
        "minified": "https://mkaul.github.io/ccm-components/upload/versions/ccm.upload-1.0.0.min.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://mkaul.github.io/ccm-components/upload/ccm.upload.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  },
  "voting": {
    "title": "Voting",
    "abstract": "For rendering a voting.",
    "screenshots": [
      "https://akless.github.io/ccm-components/libs/screenshots/voting_preview_1.png"
    ],
    "name": "voting",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://tkless.github.io/ccm-components/voting/versions/ccm.voting-1.0.0.js",
        "minified": "https://tkless.github.io/ccm-components/voting/versions/ccm.voting-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/",
    "demos": [ {} ]/*,
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://tkless.github.io/ccm-components/voting/versions/ccm.voting-1.0.0.js",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]*/
  }
};