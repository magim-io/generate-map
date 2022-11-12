/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { exec } = __nccwpck_require__(81);

async function main() {
  try {
    const install = await installPackage();

    if (install instanceof Error) {
      throw install;
    }

    console.log(install);

    const execute = await executePackage();

    if (execute instanceof Error) {
      throw execute;
    }

    console.log(execute);
  } catch (err) {
    console.error(`Action failed with ${err}`);
  }
}

async function installPackage() {
  return new Promise((resolve, reject) => {
    exec(
      "npm install dependency-cruiser",
      {
        cwd: "server",
      },
      (error, stdout) => {
        if (error) {
          reject(error);
        }
        if (stderr) {
          reject(stderr);
        }

        resolve(stdout);
      }
    );
  });
}

async function executePackage() {
  return new Promise((resolve, reject) => {
    exec(
      `npx depcruise src --include-only "^src" --config .magim-dependencymap.config.js --output-type json > magim-dependencymap.json`,
      {
        cwd: "server",
      },
      (error, stdout) => {
        if (error) {
          reject(error);
        }
        if (stderr) {
          reject(stderr);
        }

        resolve(stdout);
      }
    );
  });
}

main();

})();

module.exports = __webpack_exports__;
/******/ })()
;