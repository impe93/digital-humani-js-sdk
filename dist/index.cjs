/*!
 * digital-humani-js-sdk v0.0.0
 * (c) Lorenzo Imperatrice
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

var EnterpriseRepository = /** @class */ (function () {
    function EnterpriseRepository(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.getEnterprise = function (enterpriseId) {
            return _this.httpClient.get("/enterprise/".concat(enterpriseId));
        };
        this.getTreeCount = function (_a) {
            var endDate = _a.endDate, enterpriseId = _a.enterpriseId, month = _a.month, startDate = _a.startDate;
            if (month) {
                return _this.getTreeCountByMonth(enterpriseId, month);
            }
            else if (startDate && endDate) {
                return _this.getTreeCountByDateRange(enterpriseId, startDate, endDate);
            }
            throw new Error('All parameters are undefined. At least the month param or startDate and endDate params must have a value');
        };
        this.getTreeCountByMonth = function (enterpriseId, month) {
            return _this.httpClient.get("/enterprise/".concat(enterpriseId, "/treeCount/").concat(month));
        };
        this.getTreeCountByDateRange = function (enterpriseId, startDate, endDate) {
            return _this.httpClient.get("/enterprise/".concat(enterpriseId, "/treeCount"), {
                params: {
                    startDate: startDate,
                    endDate: endDate,
                },
            });
        };
    }
    return EnterpriseRepository;
}());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var ProjectRepository = /** @class */ (function () {
    function ProjectRepository(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.getProjects = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.get('/project')];
            });
        }); };
        this.getProjectDetails = function (projectId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.get("/project/".concat(projectId))];
            });
        }); };
    }
    return ProjectRepository;
}());

var TreeRepository = /** @class */ (function () {
    function TreeRepository(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.getTrees = function (_a) {
            var enterpriseId = _a.enterpriseId, user = _a.user;
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.httpClient.get('/tree', {
                            params: {
                                enterpriseId: enterpriseId,
                                user: user,
                            },
                        })];
                });
            });
        };
        this.getTree = function (_a) {
            var treeId = _a.treeId;
            return _this.httpClient.get("/tree/".concat(treeId));
        };
        this.plantTrees = function (body) {
            return _this.httpClient.post('/tree', { body: body });
        };
    }
    return TreeRepository;
}());

var UserRepository = /** @class */ (function () {
    function UserRepository(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.getWhoAmI = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.get('/user/whoami')];
            });
        }); };
    }
    return UserRepository;
}());

/* It's a wrapper around the axios library that adds the Digital Humani API key to the header of every
request */
var DuHttpClient = /** @class */ (function () {
    /**
     * It creates a new instance of the HttpClient class.
     * @param {HttpClientInitParams}  - `axiosInstance`: An instance of axios. If you don't provide one,
     * the SDK will create one for you.
     */
    function DuHttpClient(params) {
        var _this = this;
        var _a;
        this.get = function (url, configs) {
            if (configs === void 0) { configs = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var options, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = __rest(configs, []);
                            return [4 /*yield*/, this.axiosInstance.get(url, __assign(__assign({}, options), { headers: __assign({}, configs === null || configs === void 0 ? void 0 : configs.headers) }))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        this.post = function (url, configs) {
            if (configs === void 0) { configs = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.axiosInstance.post(url, configs === null || configs === void 0 ? void 0 : configs.body, {
                                headers: __assign({}, configs === null || configs === void 0 ? void 0 : configs.headers),
                            })];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        this.put = function (url, configs) {
            if (configs === void 0) { configs = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.axiosInstance.put(url, configs === null || configs === void 0 ? void 0 : configs.body, {
                                headers: __assign({}, configs === null || configs === void 0 ? void 0 : configs.headers),
                            })];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        this.patch = function (url, configs) {
            if (configs === void 0) { configs = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.axiosInstance.patch(url, configs === null || configs === void 0 ? void 0 : configs.body, {
                                headers: __assign({}, configs === null || configs === void 0 ? void 0 : configs.headers),
                            })];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        this.delete = function (url, configs) {
            if (configs === void 0) { configs = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var options, res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = __rest(configs, []);
                            return [4 /*yield*/, this.axiosInstance.delete(url, __assign(__assign({}, options), { headers: __assign({}, configs === null || configs === void 0 ? void 0 : configs.headers) }))];
                        case 1:
                            res = _a.sent();
                            return [2 /*return*/, res.data];
                    }
                });
            });
        };
        var env = process.env['DIGITALHUMANI_ENV'];
        var apiKey = process.env['DIGITALHUMANI_API_KEY'];
        if (env !== 'prod' && env !== 'sandbox') {
            throw new Error("Impossible to initialize digital humani sdk because envirnoment has not been provided or the provided value is different from 'sandbox' and 'prod'.");
        }
        if (!apiKey) {
            throw new Error('Impossible to initialize digital humani sdk because the API key has not been found.');
        }
        var baseUrl;
        if (env === 'sandbox') {
            baseUrl = 'https://api.sandbox.digitalhumani.com';
        }
        else {
            baseUrl = 'https://api.digitalhumani.com';
        }
        this.axiosInstance = (_a = params === null || params === void 0 ? void 0 : params.axiosInstance) !== null && _a !== void 0 ? _a : axios__default["default"].create({});
        this.axiosInstance.defaults.baseURL = baseUrl;
        this.axiosInstance.defaults.timeout = 30000;
        this.axiosInstance.defaults.headers.common = {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
        };
    }
    return DuHttpClient;
}());

/* It's a singleton that provides access to the repositories */
var DigitalHumani = /** @class */ (function () {
    function DigitalHumani() {
        var httpClient = new DuHttpClient();
        this.userRepo = new UserRepository(httpClient);
        this.treeRepo = new TreeRepository(httpClient);
        this.projectRepo = new ProjectRepository(httpClient);
        this.enterpriseRepo = new EnterpriseRepository(httpClient);
    }
    Object.defineProperty(DigitalHumani, "instance", {
        get: function () {
            if (!this._instance)
                this._instance = new DigitalHumani();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DigitalHumani, "i", {
        get: function () {
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    return DigitalHumani;
}());

exports["default"] = DigitalHumani;
//# sourceMappingURL=index.cjs.map
