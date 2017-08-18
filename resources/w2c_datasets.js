/**
 * @overview W2C datasets of ccm components
 * @author Tea Kless <tea.kless@web.de> 2017
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ "w2c_datasets.js" ] = {
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
    "website": "https://github.com/akless/ccm-components/"
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
      [ "ccm.get", "https://akless.github.io/ccm-components/eval/resources/eval_configs.min.js", "demo" ]
    ]
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
        "version": "2.0.0",
        "source": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.0.0.js",
        "minified": "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.0.0.min.js"
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
      [ "ccm.get", "https://akless.github.io/ccm-components/cloze/resources/cloze_configs.min.js", "demo" ]
    ]
  },
  "fill_in_the_blank_text_builder": {
    "title": "Fill-in-the-Blank Text Builder",
    "abstract": "For creating a fill-in-the-blank text.",
    "description": "Renders any given HTML text as a fill-in-the-blank text. The text can be entered via a visual editor. Mark gap words with doubled square brackets. For example: \"Hello, [[World]]!\". Use round brackets to mark given letters. If you have \"Hello, [[(W)o(rl)d]]!\", than the first, third and fourth letter are visible as a solution hint. The search words can be specified as a further solution. An individual list of solution words can also be specified. Any form of solutions can be turned on and off. You can choose between different layouts and authentication procedures. Points can be awarded for each correct gap. For time-dependent fill-in-the-blank texts, the available time can be specified in seconds. In addition to a visual feedback, the available buttons can also be set. Try it out on the demo.",
    "name": "fill_in_the_blank_text_builder",
    "versions": [
      {
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/fill_in_the_blank_text_builder/ccm.fill_in_the_blank_text_builder.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
  },
  "fine_upload": {
    "title": "Fine Uploader Connector",
    "abstract": "Upload a file to a server via Fine Uploader",
    "description": "In order to embed the famous Fine Uploader software anywhere, use this connector. see <a href='https://fineuploader.com/' target='_blank'>https://fineuploader.com/</a>: 'Fine Uploader aims to make file-uploading on the web possible in every browser and mobile device. It is cross-browser, dependency-free, and 100% JavaScript. The product is highly customizable, and allows integrators to fine-tune every aspect of their users’ upload experience. Implementation requires only a single CSS file, a JavaScript file, and a server to upload to. Fine Uploader users enjoy widespread browser support and a suite of features, resulting in a smooth experience when uploading files to a website.'",
    "name": "fine_upload",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/fine_upload/ccm.fine_upload.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/forum/ccm.forum.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
  },
  "game_chooser": {
    "title": "Game Chooser",
    "abstract": "Little Game for choosing one of two answers as fast as possible",
    "description": "Game Chooser is a little game implemented in ccm. Game Rules: A number is given and the user has to decide, whether the sum of digits is even or odd as fast as possible. There are two buttons, which the user can press accordingly. The time for choosing is recorded. The range of the numbers can be adjusted via a slider.",
    "name": "game_chooser",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/game_chooser/ccm.game_chooser.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
  },
  "geogebra": {
    "title": "GeoGebra Connector",
    "abstract": "<i>ccm</i> connector for GeoGebra",
    "description": "In order to embed the famous GeoGebra software anywhere, use this connector. For GeoGebra see https://www.geogebra.org: 'GeoGebra is dynamic mathematics software for all levels of education that brings together geometry, algebra, spreadsheets, graphing, statistics and calculus in one easy-to-use package. GeoGebra is a rapidly expanding community of millions of users located in just about every country. GeoGebra has become the leading provider of dynamic mathematics software, supporting science, technology, engineering and mathematics (STEM) education and innovations in teaching and learning worldwide.'",
    "name": "geogebra",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/geogebra/ccm.geogebra.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
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
      [ "ccm.get", "https://akless.github.io/ccm-components/input/resources/input_configs.min.js", "demo" ]
    ]
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
        "version": "latest",
        "source": "https://akless.github.io/ccm-components/kanban_board/ccm.kanban_board.js",
        "minified": "https://akless.github.io/ccm-components/kanban_board/ccm.kanban_board.min.js"
      }
    ],
    "developer": "André Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/akless/ccm-components/",
    "demos": [
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_board/resources/kanban_board_configs.min.js", "demo" ]
    ]
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
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_card/resources/kanban_card_configs.min.js", "homework" ],
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_card/resources/kanban_card_configs.min.js", "presentation" ],
      [ "ccm.get", "https://akless.github.io/ccm-components/kanban_card/resources/kanban_card_configs.min.js", "realtime" ]
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
    ]
  },
  "learning_app": {
    "title": "LearningApp Connector",
    "abstract": "<i>ccm</i> connector for learning apps",
    "description": "In order to embed the famous LearningApps software anywhere, use this connector. 'LearningApps.org is a Web 2.0 application, to support learning and teaching processes with small interactive modules. Those modules can be used directly in learning materials, but also for self studying. The aim is to collect reusable building blocks and make them available to everyone. Blocks (called Apps) include no specific framework or a specific learning scenario. The blocks are therefore not suitable as complete lessons or tasks, instead they must be embedded in an appropriate teaching scenario', see <a href='http://learningapps.org' target='_blank'>http://learningapps.org</a>.",
    "name": "learning_app",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/learning_app/ccm.learning_app.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
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
    "website": "https://github.com/akless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/posts/ccm.posts.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/question/ccm.question.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/editor/ccm.editor.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
      [ "ccm.get", "https://akless.github.io/ccm-components/quiz/resources/quiz_configs.min.js", "demo" ]
    ]
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/star_rating/ccm.star_rating.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/star_rating_result/ccm.star_rating_result.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/slidecast/ccm.slidecast.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
    "website": "https://github.com/akless/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/thumb_rating/ccm.thumb_rating.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
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
      [ "ccm.get", "https://akless.github.io/ccm-components/user/resources/user_configs.min.js", "demo" ]
    ]
  },
  "uml": {
    "title": "UML Connector",
    "abstract": "<i>ccm</i> connector for PlantUML",
    "description": "In order to embed the famous PlantUML software anywhere, use this connector. PlantUML.com is a web server that generates diagrams in the cloud. There are also various extensions or add-ons that incorporate PlantUML, see <a href='http://plantuml.com/' target='_blank'>http://plantuml.com/</a>",
    "name": "uml",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/uml/ccm.uml.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
  },
  "upload": {
    "title": "Upload",
    "abstract": "Upload a file to a server",
    "description": "With a file chooser you can choose any file from your computer. Upload lets you upload the file to a server.",
    "name": "upload",
    "versions": [
      {
        "version": "latest",
        "source": "https://mkaul.github.io/ccm-components/upload/ccm.upload.js"
      }
    ],
    "developer": "Manfred Kaul",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/mkaul/ccm-components/"
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
        "version": "latest",
        "source": "https://tkless.github.io/ccm-components/voting/ccm.voting.js"
      }
    ],
    "developer": "Tea Kless",
    "license": "The MIT License (MIT)",
    "website": "https://github.com/tkless/ccm-components/"
  }
};