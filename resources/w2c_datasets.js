/**
 * @overview W2C datasets of ccm components
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ "w2c_datasets.js" ] = {
  "pdf_viewer": {
    "key": "pdf_viewer",
    "title": "PDF Viewer",
    "abstract": "For rendering a PDF",
    "versions": [
      {
        "version": "3.0.0",
        "source": "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-2.1.0.js"
      },
      {
        "version": "2.1.0",
        "source": "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-2.1.0.js"
      },
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-1.0.0.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      { pdf: //[ "ccm.get", { url: "https://ccm.inf.h-brs.de", store: "file_upload" }, "1517228670954X509252249813553" ],
          "//cdn.mozilla.net/pdfjs/tracemonkey.pdf"  }
    ],
    "factories": [
      {
        "url": "https://ccmjs.github.io/tkless-components/pdf_viewer_builder/versions/ccm.pdf_viewer_builder-2.0.0.js",
        "config": {
          "html.inner.1.inner.0": "",
          "css": [ "ccm.load", "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
            { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
            "https://ccmjs.github.io/tkless-components/pdf_viewer_builder/resources/default.css"
          ],
          "target": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-3.0.0.js" ],
          "file_upload": [ "ccm.component", "https://ccmjs.github.io/tkless-components/file_upload/versions/ccm.file_upload-2.0.0.js", {
            "data_type": "pdf",
            "data": { "store": [ "ccm.store", { "store": "file_upload", "url": "https://ccm2.inf.h-brs.de", "method": "POST" } ] }
          } ]
        }
      }
    ]
  },
  "cloze": {
    "key": "cloze",
    "title": "Fill-in-the-Blank Text",
    "abstract": "For rendering a fill-in-the-blank text.",
    "screenshots": [
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_1.jpg",
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_2.jpg",
      "https://akless.github.io/ccm-components/cloze/resources/screenshot_3.jpg"
    ],
    "description": "The component supports solution hints, visual feedback, point allocation, time limitation, different layouts, authentication procedures, customization of buttons and learning analysis.",
    "versions": [
      {
        "version": "4.1.0",
        "source": "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.1.0.js",
      }
    ],
    "developer": "André Kless",
    "license": "MIT License",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/akless-components/cloze/resources/configs.js", "demo" ]
    ],
    "factories": [
      {
        "url": "https://ccmjs.github.io/akless-components/cloze_builder/versions/ccm.cloze_builder-2.2.0.js",
        "config": {}
      }
    ]
  },
  "teambuild": {
    "key": "teambuild",
    "title": "Team Building",
    "abstract": "For realtime team building.",
    "versions": [
      {
        "version": "2.0.0",
        "source": "https://ccmjs.github.io/akless-components/teambuild/versions/ccm.teambuild-2.0.0.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/akless-components/teambuild/resources/configs.min.js", "demo" ]
    ],
    "factories": [
      {
        "url": "https://ccmjs.github.io/akless-components/teambuild_builder/versions/ccm.teambuild_builder-3.0.0.js",
        "config": {}
      }
    ]
  },
  "le": {
    "key": "le",
    "title": "Learning Unit",
    "abstract": "For rendering a learning unit.",
    "versions": [
      {
        "version": "3.0.0",
        "source": "https://ccmjs.github.io/akless-components/le/versions/ccm.le-3.0.0.js"
      },
      {
        "version": "2.0.0",
        "source": "https://ccmjs.github.io/akless-components/le/versions/ccm.le-2.0.0.js"
      },
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/akless-components/le/versions/ccm.le-1.0.0.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/akless/ccm/ccm-overview/configs.min.js", "le" ]
    ]
  },
  "quiz": {
    "key": "quiz",
    "title": "Quiz",
    "abstract": "For rendering a quiz.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/quiz/resources/preview_1.png",
      "https://ccmjs.github.io/akless-components/quiz/resources/preview_2.png"
    ],
    "versions": [
      {
        "version": "2.1.1",
        "source": "https://ccmjs.github.io/akless-components/quiz/versions/ccm.quiz-2.1.1.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/akless-components/quiz/resources/configs.js", "demo" ]
    ]
  },
  "star_rating": {
    "key": "star_rating",
    "title": "Star Rating",
    "abstract": "For rendering a star rating.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/libs/screenshots/star_rating_preview_1.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-1.0.0.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/tkless-components/star_rating/resources/configs.js", "local" ]
    ]
  },
  "star_rating_result": {
    "key": "star_rating_result",
    "title": "Star Rating Result",
    "abstract": "For rendering a star rating result.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/libs/screenshots/star_rating_result_preview_1.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-1.0.0.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [  [ "ccm.get", "https://ccmjs.github.io/tkless-components/star_rating/resources/configs.js", "local" ] ]
  },
  "kanban_board": {
    "key": "kanban_board",
    "title": "Kanban Board",
    "abstract": "For rendering a kanban board.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/kanban_board/resources/preview_1.png"
    ],
    "versions": [
      {
        "version": "1.2.0",
        "source": "https://ccmjs.github.io/akless-components/kanban_board/versions/ccm.kanban_board-1.2.0.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/akless-components/kanban_board/resources/configs.js", "showcase" ]
    ]
  },
  "kanban_card": {
    "key": "kanban_card",
    "title": "Kanban Card",
    "abstract": "For rendering a kanban card.",
    "screenshots": [
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_1.jpg",
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_2.png",
      "https://akless.github.io/ccm-components/kanban_card/resources/preview_3.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/akless-components/kanban_card/versions/ccm.kanban_card-1.0.0.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/akless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/akless-components/kanban_card/resources/configs.js", "realtime" ]
    ],
    "factories": [
      {
        "url": "https://leoneck.github.io/ccm-factory/dist/ccm.factory-1.0.0.min.js",
        "config": {
          "url_to_modify": "https://ccmjs.github.io/akless-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
          "external_config": "https://ccmjs.github.io/akless-components/kanban_card/resources/configs.js",
          "key_in_external_config": "realtime",
          "preview": false,
          "display_final_component_and_config": false,
          "no_bootstrap_container": true
        }
      }
    ]
  },
  "marking_words": {
    "key": "marking_words",
    "title": "Marking Words",
    "abstract": "Component for marking the specific words.",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/marking_words/versions/ccm.marking_words-1.0.0.js",
        "minified":"https://ccmjs.github.io/tkless-components/marking_words/versions/ccm.marking_words-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      [  "ccm.get", "https://ccmjs.github.io/tkless-components/marking_words/resources/configs.js", "demo"  ]
    ]
  },
  "exercise": {
    "key": "exercise",
    "title": "Exercise",
    "abstract": "Free Text Task",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/exercise/versions/ccm.exercise-1.0.0.js",
        "minified":"https://ccmjs.github.io/tkless-components/exercise/versions/ccm.exercise-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      [  "ccm.get", "https://ccmjs.github.io/tkless-components/exercise/resources/configs.js", "demo"  ]
    ],
    "factories": [
      {
        "url": "https://ccmjs.github.io/tkless-components/exercise_builder/versions/ccm.exercise_builder-1.0.0.min.js",
        "config": { }
      }
    ]
  },
  "comment": {
    "key": "comment",
    "title": "Comment",
    "abstract": "For rendering a comment to any component.",
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/comment/versions/ccm.comment-1.0.0.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos":[ ]
  },
  "news": {
    "key": "news",
    "title": "News",
    "abstract": "For rendering a news.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/libs/screenshots/posts_preview_1.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/news/versions/ccm.news-1.0.0.js",
        "minified": "https://ccmjs.github.io/tkless-components/news/versions/ccm.news-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      ["ccm.get", "https://ccmjs.github.io/tkless-components/news/resources/configs.min.js", "demo" ]
    ]
  },
  "slidecast": {
    "key": "slidecast",
    "title": "Slidecast",
    "abstract": "For rendering a slidecast.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/libs/screenshots/slidecast_preview_1.png",
      "https://ccmjs.github.io/akless-components/libs/screenshots/slidecast_preview_2.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/slidecast/versions/ccm.slidecast-1.0.0.js",
        "monified": "https://ccmjs.github.io/tkless-components/slidecast/versions/ccm.slidecast-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [
      [ "ccm.get", "https://ccmjs.github.io/tkless-components/slidecast/resources/configs.min.js", "demo" ]
    ]
  },
  "voting": {
    "key": "voting",
    "title": "Voting",
    "abstract": "For rendering a voting.",
    "screenshots": [
      "https://ccmjs.github.io/akless-components/libs/screenshots/voting_preview_1.png"
    ],
    "versions": [
      {
        "version": "1.0.0",
        "source": "https://ccmjs.github.io/tkless-components/voting/versions/ccm.voting-1.0.0.js",
        "minified": "https://ccmjs.github.io/tkless-components/voting/versions/ccm.voting-1.0.0.min.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/ccmjs/tkless-components/",
    "demos": [ ]
  }
};