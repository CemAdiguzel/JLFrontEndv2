"use strict";
(self["webpackChunk_jupyterlab_examples_react_widget"] = self["webpackChunk_jupyterlab_examples_react_widget"] || []).push([["lib_index_js"],{

/***/ "./lib/App.js":
/*!********************!*\
  !*** ./lib/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/Route */ "./lib/config/Route.js");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



// import * as dotenv from 'dotenv';
// dotenv.config();
function App() {
    const authMiddleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([
        (operation, forward) => {
            // add the authorization to the headers
            const token = localStorage.getItem("accessToken");
            // const language = localStorage.getItem('language') || DEFAULT_LANGUAGE;
            operation.setContext({
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return forward(operation);
        },
    ]);
    const _httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({ uri: "http://localhost:3001/graphql" });
    const httpLink = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([authMiddleware, _httpLink]);
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        // uri: process.env.REACT_APP_API_URL,
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),
        link: httpLink,
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, { client: client },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_config_Route__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}


/***/ }),

/***/ "./lib/LecturerView/AssignmentList.js":
/*!********************************************!*\
  !*** ./lib/LecturerView/AssignmentList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignmentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_mutations_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/assignment */ "./lib/graphql/mutations/assignment.js");
/* harmony import */ var _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries/assignment */ "./lib/graphql/queries/assignment.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */









/* eslint-disable react/prop-types */
function AssignmentList() {
    var _a;
    // Exam listeleme ve ekleme işlemleri
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [addOpener, setAddOpener] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [titleValue, setTitleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [descriptionValue, setDescriptionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [dateValue, setDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [durationValue, setDurationValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [typeValue, setTypeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [assignedToValue, setAssignedToValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [resubmissionValue, setResubmissionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [resubmissionDateValue, setResubmissionDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [gradeScaleValue, setGradeScaleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [createAssignment] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_assignment__WEBPACK_IMPORTED_MODULE_4__.CREATE_ASSIGNMENT);
    const [deleteAssignment] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_assignment__WEBPACK_IMPORTED_MODULE_4__.DELETE_ASSIGNMENT);
    const [updateAssignment] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_assignment__WEBPACK_IMPORTED_MODULE_4__.UPDATE_ASSIGNMENT);
    const { data: assignmentList, loading: assignmentLoading, refetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__.LIST_ASSIGNMENT, {
        fetchPolicy: "cache-first",
        errorPolicy: "ignore",
    });
    if (assignmentLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    // Bu fonksiyonla exam ekleyebiliyoruz.
    const handleSubmit = async () => {
        await createAssignment({
            variables: {
                title: titleValue || "",
                description: descriptionValue || "",
                date: dateValue || "",
                duration: durationValue || "",
                type: typeValue || "",
                resubmissionNumber: resubmissionValue || "",
                resubmissionDate: resubmissionDateValue || "",
                gradeScale: gradeScaleValue || "",
                resubmissionTime: "",
                dueDate: dateValue || "",
                dueTime: "",
                status: false,
                isEnded: false,
            },
        });
        // clear all the states
        setTitleValue("");
        setDescriptionValue("");
        setDateValue("");
        setDurationValue("");
        setTypeValue("");
        setResubmissionValue("");
        setResubmissionDateValue("");
        setGradeScaleValue("");
        refetch();
        setAddOpener(false);
    };
    // Bu fonksiyonla herhangi bir exami silebiliyoruz
    const handleDeleteAssignment = async (deletedId) => {
        await deleteAssignment({
            variables: {
                id: deletedId,
            },
        });
        refetch();
    };
    // Bu fonksiyonla herhangi bir assignmentı güncelleyebiliyoruz ve öğrenciler tarafından görünür hale geliyorlar
    const handleUpdateAssignment = async (updatedId) => {
        await updateAssignment({
            variables: {
                id: updatedId,
                status: true,
            },
        });
    };
    // Bu fonksiyonla herhangi bir assignmentı güncelleyebiliyoruz ve de bitirebiliyoruz
    const handleEndAssignment = async (updatedId) => {
        await updateAssignment({
            variables: {
                id: updatedId,
                isEnded: true,
            },
        });
    };
    // Bu fonksiyonla detaylar popup'ını kapatıyoruz
    const handleClose = () => {
        setOpen(false);
    };
    // Bu fonksionla exam ekleme popup'ını açıyoruz.
    const handleAddOpen = () => {
        setAddOpener(true);
    };
    // Bu fonksiyonla exam ekleme popup'ını kapatıyoruz.
    const handleAddCloser = () => {
        setAddOpener(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outlined", style: {
                    height: 500,
                    width: "100%",
                    border: "1px solid orange",
                    overflow: "scroll",
                } }, (_a = assignmentList === null || assignmentList === void 0 ? void 0 : assignmentList.assignmentList) === null || _a === void 0 ? void 0 :
                _a.map((assignment) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: assignment.id, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/assignment-question-list", state: { data: assignment.id } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", component: "h6", style: {
                                        fontWeight: "bold",
                                    } }, assignment.title)))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: "flex",
                            justifyContent: "end",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            assignment.status === false && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleUpdateAssignment(assignment === null || assignment === void 0 ? void 0 : assignment.id);
                                } }, "Publish")),
                            assignment.status === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleEndAssignment(assignment === null || assignment === void 0 ? void 0 : assignment.id);
                                } }, "End Assignment")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleDeleteAssignment(assignment === null || assignment === void 0 ? void 0 : assignment.id);
                                } }, "Delete")))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], { style: {
                            display: "flex",
                            justifyContent: "center",
                            padding: 12,
                            margin: 12,
                            width: "100%",
                            border: "1px dotted orange",
                        }, onClick: handleAddOpen },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { style: { fontSize: 14 }, gutterBottom: true }, "Add New Assignment")))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleDeleteAssignment, style: { background: "orange", color: "#fff" } }, "Delete"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, style: { background: "orange", color: "#fff" } }, "Close"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: addOpener, onClose: handleAddCloser, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, { style: { width: 800 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Title:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Title", variant: "outlined", type: "text", value: titleValue, onChange: (e) => setTitleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Description:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Description Value", variant: "outlined", type: "text", value: descriptionValue, onChange: (e) => setDescriptionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Type:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the Type", variant: "outlined", type: "text", value: typeValue, onChange: (e) => setTypeValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Assigned To:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the assigned to", variant: "outlined", type: "text", value: assignedToValue, onChange: (e) => setAssignedToValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmissions:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the number of resubmissions", variant: "outlined", type: "number", value: resubmissionValue, onChange: (e) => setResubmissionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmission Time:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the resubmission date", variant: "outlined", type: "date", value: resubmissionDateValue, onChange: (e) => setResubmissionDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Publish Date:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter Date", variant: "outlined", type: "date", value: dateValue, onChange: (e) => setDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Grade Scale:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Grade Scale", variant: "outlined", type: "number", value: gradeScaleValue, onChange: (e) => setGradeScaleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "end" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, style: { background: "orange", color: "#fff" } }, "Submit"))))))));
}


/***/ }),

/***/ "./lib/LecturerView/AssignmentQuestionList.js":
/*!****************************************************!*\
  !*** ./lib/LecturerView/AssignmentQuestionList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AssignmentQuestionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/question */ "./lib/graphql/mutations/question.js");
/* harmony import */ var _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries/assignment */ "./lib/graphql/queries/assignment.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */






function AssignmentQuestionList({ props }) {
    var _a, _b;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    // Soru eklemek için gerekli popUp'ı açan değeri tanımlıyoruz
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    // Soru eklemek için gerekli değerleri tanımlıyoruz.
    const [questionDescValue, setQuestionDescValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeInputValue, setGradeInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeOutputValue, setGradeOutputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeValue, setGradeValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [createQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.CREATE_QUESTION);
    const [assignedQuestionToAssignment] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.ADD_QUESTION_TO_ASSIGNMENT, {
        refetchQueries: [
            { query: _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__.GET_ASSIGNMENT, variables: { id: state.data } },
        ],
    });
    const [deleteQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.DELETE_QUESTION, {
        refetchQueries: [{ query: _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__.GET_ASSIGNMENT, variables: { id: state.data } }],
    });
    const { data: assignmentData, loading: assignmentLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_5__.GET_ASSIGNMENT, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data,
        },
    });
    console.log("assignmentData", (_a = assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.getAssignment) === null || _a === void 0 ? void 0 : _a.questions);
    if (assignmentLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleQuestionAdd = () => {
        setOpen(true);
    };
    const handleSubmit = async () => {
        const newQuestion = await createQuestion({
            variables: {
                questionDesc: questionDescValue || "",
                answer: answerValue || "",
                grade: gradeValue || "",
                autoGrade: false,
                gradingInput: gradeInputValue || "",
                gradingOutput: gradeOutputValue || "",
            },
        });
        await assignedQuestionToAssignment({
            variables: {
                AssignmentId: state.data,
                questionId: newQuestion.data.createQuestion.id,
            },
        });
        setQuestionDescValue("");
        setAnswerValue("");
        setGradeInputValue("");
        setGradeOutputValue("");
        setGradeValue("");
        setOpen(false);
    };
    const handleDeleteQuestion = async (questionId) => {
        await deleteQuestion({
            variables: {
                id: questionId,
            },
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_b = assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.getAssignment) === null || _b === void 0 ? void 0 :
                    _b.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%", display: "flex" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 9, style: { display: "flex" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Question:"),
                                        " ",
                                        question.questionDesc)),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Grade:"),
                                        " ",
                                        question.grade))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 3, style: {
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                        handleDeleteQuestion(question.id);
                                    } }, "DELETE")))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 12,
                                    margin: 12,
                                    width: "100%",
                                    border: "1px dotted orange",
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: () => handleQuestionAdd() },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Add Question"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/home-page" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 12,
                                        margin: 12,
                                        width: "100%",
                                        border: "1px dotted orange",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Save Content"))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: () => setOpen(false), "aria-labelledby": "form-dialog-title" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, { id: "form-dialog-title" }, "Add Question"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContentText, null, "Please enter the question and the answer."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, { autoFocus: true, id: "question", maxRows: 8, minRows: 8, style: { width: "100%", whiteSpace: "pre-line" }, value: questionDescValue, onChange: (e) => setQuestionDescValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "answer", label: "Answer", type: "text", fullWidth: true, value: answerValue, onChange: (e) => setAnswerValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeInput", label: "Grade Input", type: "text", fullWidth: true, value: gradeInputValue, onChange: (e) => setGradeInputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeOutput", label: "Grade Output", type: "text", fullWidth: true, value: gradeOutputValue, onChange: (e) => setGradeOutputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "grade", label: "Grade", type: "text", fullWidth: true, value: gradeValue, onChange: (e) => setGradeValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "end" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, style: { background: "orange", color: "#fff" } }, "Submit")))))));
}


/***/ }),

/***/ "./lib/LecturerView/ExamByQuestionStudentList.js":
/*!*******************************************************!*\
  !*** ./lib/LecturerView/ExamByQuestionStudentList.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamByQuestionStudentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */






/* eslint-disable react/prop-types */
function ExamByQuestionStudentList() {
    var _a;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    const { data, loading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.GET_EXAM, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data.examId,
        },
    });
    if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    console.log(data);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { width: "100%", margin: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "outlined", style: {
                    height: 500,
                    width: "100%",
                    border: "1px solid orange",
                    overflow: "scroll",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", alignItems: "center" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                            color: "orange",
                                        } }, "Soru:")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                            color: "orange",
                                        } }, "Do\u011Fru Cevap")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                            color: "orange",
                                        } }, "Girilen Cevap")))))), (_a = data === null || data === void 0 ? void 0 : data.getExam) === null || _a === void 0 ? void 0 :
                _a.questions.map((question) => {
                    var _a, _b;
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                                display: "flex",
                                justifyContent: "start",
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", alignItems: "center" } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                                fontWeight: "semi-bold",
                                            } }, question.questionDesc)),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                                fontWeight: "semi-bold",
                                            } }, question.answer)),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: { display: "flex", justifyContent: "center" } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                                fontWeight: "semi-bold",
                                            } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, ((_b = (_a = question === null || question === void 0 ? void 0 : question.answers) === null || _a === void 0 ? void 0 : _a.find((a) => a.userId === state.data.userId)) === null || _b === void 0 ? void 0 : _b.answer) || "No Answer")))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                                padding: 12,
                                display: "flex",
                                justifyContent: "end",
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Grade")))));
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                        display: "flex",
                        justifyContent: "end",
                        margin: 12,
                        padding: 12,
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/exam-by-student-list", state: { data: state.data.examId } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } },
                                "Back",
                                " "))))))));
}


/***/ }),

/***/ "./lib/LecturerView/ExamByStudentList.js":
/*!***********************************************!*\
  !*** ./lib/LecturerView/ExamByStudentList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamByStudentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */






/* eslint-disable react/prop-types */
function ExamByStudentList() {
    var _a;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    const { data, loading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.GET_EXAM, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data,
        },
    });
    if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { width: "100%", margin: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "outlined", style: {
                    height: 500,
                    width: "100%",
                    border: "1px solid orange",
                    overflow: "scroll",
                } }, (_a = data === null || data === void 0 ? void 0 : data.getExam) === null || _a === void 0 ? void 0 :
                _a.studentExamProgressions.map((student) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: student.id, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                    fontWeight: "bold",
                                } }, student.user.fullName))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: "flex",
                            justifyContent: "end",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/exam-by-question-student-list", state: {
                                    data: {
                                        examId: state.data,
                                        userId: student.user.id,
                                    },
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Grade"))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                        display: "flex",
                        justifyContent: "end",
                        margin: 12,
                        padding: 12,
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/exam-list" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } },
                                "Back",
                                " "))))))));
}


/***/ }),

/***/ "./lib/LecturerView/ExamList.js":
/*!**************************************!*\
  !*** ./lib/LecturerView/ExamList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/exam */ "./lib/graphql/mutations/exam.js");
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */









/* eslint-disable react/prop-types */
function ExamList() {
    var _a;
    // Exam listeleme ve ekleme işlemleri
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [addOpener, setAddOpener] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [titleValue, setTitleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [descriptionValue, setDescriptionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [dateValue, setDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [timeValue, setTimeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [durationValue, setDurationValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [typeValue, setTypeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [assignedToValue, setAssignedToValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [resubmissionValue, setResubmissionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [resubmissionDateValue, setResubmissionDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [gradeScaleValue, setGradeScaleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [asdasd, setAsdasd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [createExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.CREATE_EXAM);
    const [deleteExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.DELETE_EXAM);
    const [updateExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.UPDATE_EXAM);
    const { data: examList, loading: examLoading, refetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.LIST_EXAM, {
        fetchPolicy: "cache-first",
        errorPolicy: "ignore",
    });
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    // Bu fonksiyonla exam ekleyebiliyoruz.
    const handleSubmit = async () => {
        await createExam({
            variables: {
                title: titleValue || "",
                description: descriptionValue || "",
                date: dateValue || "",
                time: timeValue || "",
                duration: durationValue || "",
                type: typeValue || "",
                resubmissionNumber: resubmissionValue || "",
                resubmissionDate: resubmissionDateValue || "",
                gradeScale: gradeScaleValue || "",
                resubmissionTime: "",
                dueDate: dateValue || "",
                dueTime: "",
                status: false,
                isEnded: false,
            },
        });
        // clear all the states
        setTitleValue("");
        setDescriptionValue("");
        setDateValue("");
        setTimeValue("");
        setDurationValue("");
        setTypeValue("");
        setResubmissionValue("");
        setResubmissionDateValue("");
        setGradeScaleValue("");
        refetch();
        setAsdasd(examList.examList);
        console.log("create sonrası", asdasd);
        setAddOpener(false);
    };
    // Bu fonksiyonla herhangi bir exami silebiliyoruz
    const handleDeleteExam = async (deletedId) => {
        console.log("delete");
        await deleteExam({
            variables: {
                id: deletedId,
            },
        });
        refetch();
    };
    // Bu fonksiyonla herhangi bir exami güncelleyebiliyoruz
    const handleUpdateExam = async (updatedId) => {
        await updateExam({
            variables: {
                id: updatedId,
                status: true,
            },
        });
        console.log("update", examList.examList);
    };
    const handleEndExam = async (updatedId) => {
        await updateExam({
            variables: {
                id: updatedId,
                isEnded: true,
            },
        });
    };
    // Bu fonksiyonla detaylar popup'ını kapatıyoruz
    const handleClose = () => {
        setOpen(false);
    };
    // Bu fonksionla exam ekleme popup'ını açıyoruz.
    const handleAddOpen = () => {
        setAddOpener(true);
    };
    // Bu fonksiyonla exam ekleme popup'ını kapatıyoruz.
    const handleAddCloser = () => {
        setAddOpener(false);
    };
    console.log("examList", examList.examList);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outlined", style: {
                    height: 500,
                    width: "100%",
                    border: "1px solid orange",
                    overflow: "scroll",
                } }, (_a = examList === null || examList === void 0 ? void 0 : examList.examList) === null || _a === void 0 ? void 0 :
                _a.map((exam) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: exam.id, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/question-list", state: { data: exam.id } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", component: "h6", style: {
                                        fontWeight: "bold",
                                    } }, exam.title)))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: "flex",
                            justifyContent: "end",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            exam.status === false && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleUpdateExam(exam === null || exam === void 0 ? void 0 : exam.id);
                                } }, "Publish Exam")),
                            exam.status === true && exam.isEnded === false && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleEndExam(exam === null || exam === void 0 ? void 0 : exam.id);
                                } }, "End Exam")),
                            exam.status === true && exam.isEnded === true && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/exam-by-student-list", state: { data: exam.id } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "View Results"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                    handleDeleteExam(exam === null || exam === void 0 ? void 0 : exam.id);
                                } }, "Delete")))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], { style: {
                            display: "flex",
                            justifyContent: "center",
                            padding: 12,
                            margin: 12,
                            width: "100%",
                            border: "1px dotted orange",
                        }, onClick: handleAddOpen },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { style: { fontSize: 14 }, gutterBottom: true }, "Add New Exam")))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleDeleteExam, style: { background: "orange", color: "#fff" } }, "Delete"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, style: { background: "orange", color: "#fff" } }, "Close"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: addOpener, onClose: handleAddCloser, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, { style: { width: 800 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Title:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Title", variant: "outlined", type: "text", value: titleValue, onChange: (e) => setTitleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Description:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Description Value", variant: "outlined", type: "text", value: descriptionValue, onChange: (e) => setDescriptionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Type:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the Type", variant: "outlined", type: "text", value: typeValue, onChange: (e) => setTypeValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Assigned To:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the assigned to", variant: "outlined", type: "date", value: assignedToValue, onChange: (e) => setAssignedToValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Due Date:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Time", variant: "outlined", type: "time", value: timeValue, onChange: (e) => setTimeValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmissions:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the number of resubmissions", variant: "outlined", type: "number", value: resubmissionValue, onChange: (e) => setResubmissionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmission Time:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the number of resubmissions", variant: "outlined", type: "date", value: resubmissionDateValue, onChange: (e) => setResubmissionDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Publish Date:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Grade Scale", variant: "outlined", type: "date", value: dateValue, onChange: (e) => setDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Grade Scale:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Grade Scale", variant: "outlined", type: "number", value: gradeScaleValue, onChange: (e) => setGradeScaleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "end" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, style: { background: "orange", color: "#fff" } }, "Submit"))))))));
}


/***/ }),

/***/ "./lib/LecturerView/HomePage.js":
/*!**************************************!*\
  !*** ./lib/LecturerView/HomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "../node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _AssignmentList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AssignmentList */ "./lib/LecturerView/AssignmentList.js");
/* harmony import */ var _ExamList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ExamList */ "./lib/LecturerView/ExamList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










function TabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other), value === index && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, children)))));
}
TabPanel.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabnav: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
    },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function HomePage() {
    const classes = useStyles();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleLogOut = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, className: classes.tabnav },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", style: { background: "orange", color: "#fff" }, onClick: handleLogOut }, "Logout")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], { position: "static" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Assignment List" }, a11yProps(0))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Exam List" }, a11yProps(1))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 0, style: { width: "100%", padding: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AssignmentList__WEBPACK_IMPORTED_MODULE_8__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 1, style: { width: "100%", padding: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ExamList__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
}


/***/ }),

/***/ "./lib/LecturerView/QuestionList.js":
/*!******************************************!*\
  !*** ./lib/LecturerView/QuestionList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/question */ "./lib/graphql/mutations/question.js");
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */






function QuestionList({ props }) {
    var _a;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    // Soru eklemek için gerekli popUp'ı açan değeri tanımlıyoruz
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    // Soru eklemek için gerekli değerleri tanımlıyoruz.
    const [questionDescValue, setQuestionDescValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeInputValue, setGradeInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeOutputValue, setGradeOutputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [gradeValue, setGradeValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [createQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.CREATE_QUESTION);
    const [assignedQuestionToExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.ADD_QUESTION_TO_EXAM, {
        refetchQueries: [{ query: _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.GET_EXAM, variables: { id: state.data } }],
    });
    const [deleteQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.DELETE_QUESTION, {
        refetchQueries: [{ query: _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.GET_EXAM, variables: { id: state.data } }],
    });
    const { data: examData, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.GET_EXAM, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data,
        },
    });
    console.log("examData", examData);
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleQuestionAdd = () => {
        setOpen(true);
    };
    const handleSubmit = async () => {
        const newQuestion = await createQuestion({
            variables: {
                questionDesc: questionDescValue || "",
                answer: answerValue || "",
                grade: gradeValue || "",
                autoGrade: false,
                gradingInput: gradeInputValue || "",
                gradingOutput: gradeOutputValue || "",
            },
        });
        await assignedQuestionToExam({
            variables: {
                ExamId: state.data,
                questionId: newQuestion.data.createQuestion.id,
            },
        });
        setQuestionDescValue("");
        setAnswerValue("");
        setGradeInputValue("");
        setGradeOutputValue("");
        setGradeValue("");
        setOpen(false);
    };
    const handleDeleteQuestion = async (questionId) => {
        await deleteQuestion({
            variables: {
                id: questionId,
            },
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_a = examData === null || examData === void 0 ? void 0 : examData.getExam) === null || _a === void 0 ? void 0 :
                    _a.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%", display: "flex" } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 9, style: { display: "flex" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Question:"),
                                        " ",
                                        question.questionDesc)),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                                        display: "flex",
                                        justifyContent: "end",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Grade:"),
                                        " ",
                                        question.grade))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 3, style: {
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                        handleDeleteQuestion(question.id);
                                    } }, "DELETE")))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 12,
                                    margin: 12,
                                    width: "100%",
                                    border: "1px dotted orange",
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: () => handleQuestionAdd() },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Add Question"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/home-page" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 12,
                                        margin: 12,
                                        width: "100%",
                                        border: "1px dotted orange",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Save Content"))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: () => setOpen(false), "aria-labelledby": "form-dialog-title" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, { id: "form-dialog-title" }, "Add Question"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContentText, null, "Please enter the question and the answer."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, { autoFocus: true, id: "question", maxRows: 8, minRows: 8, style: { width: "100%", whiteSpace: "pre-line" }, value: questionDescValue, onChange: (e) => setQuestionDescValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "answer", label: "Answer", type: "text", fullWidth: true, value: answerValue, onChange: (e) => setAnswerValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeInput", label: "Grade Input", type: "text", fullWidth: true, value: gradeInputValue, onChange: (e) => setGradeInputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeOutput", label: "Grade Output", type: "text", fullWidth: true, value: gradeOutputValue, onChange: (e) => setGradeOutputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "grade", label: "Grade", type: "text", fullWidth: true, value: gradeValue, onChange: (e) => setGradeValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: "flex", justifyContent: "end" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, style: { background: "orange", color: "#fff" } }, "Submit")))))));
}


/***/ }),

/***/ "./lib/Pages/MainPage.js":
/*!*******************************!*\
  !*** ./lib/Pages/MainPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_mutations_authenticate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/authenticate */ "./lib/graphql/mutations/authenticate.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/quotes





function MainPage() {
    const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const [authenticateUser] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_mutations_authenticate__WEBPACK_IMPORTED_MODULE_4__.AUTHENTICATE_USER);
    const handleSubmit = async () => {
        var _a, _b, _c, _d;
        const { data: userData } = await authenticateUser({
            variables: {
                email,
                password,
            },
        });
        console.log("userData", (_b = (_a = userData === null || userData === void 0 ? void 0 : userData.authenticate) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id);
        const loggedInUserId = (_d = (_c = userData === null || userData === void 0 ? void 0 : userData.authenticate) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.id;
        userData.authenticate.token &&
            localStorage.setItem("accessToken", userData.authenticate.token);
        if (userData.authenticate.user.userRole === "Lecturer") {
            navigate("/lab/home-page", {
                state: {
                    userId: loggedInUserId,
                },
            });
        }
        else {
            navigate("/lab/student-home-page", {
                state: {
                    userId: loggedInUserId,
                },
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                flexWrap: "wrap",
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { id: "standard-basic", variant: "outlined", label: "User Name", onChange: (e) => setEmail(e.target.value) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { id: "standard-basic", variant: "outlined", label: "Password", type: "password", onChange: (e) => setPassword(e.target.value) })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: handleSubmit }, "Login")))));
}


/***/ }),

/***/ "./lib/Pages/Navbar.js":
/*!*****************************!*\
  !*** ./lib/Pages/Navbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "webpack/sharing/consume/default/react-select/react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);



function Navbar({ userLang, setUserLang, userTheme, setUserTheme, fontSize, setFontSize, }) {
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, { container: true, item: true },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, { item: true, xs: 12, style: {
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                height: "50px",
                textAlign: "center",
                color: "#afec3f",
                backgroundColor: "#474747",
                gap: "20px",
            } },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_select__WEBPACK_IMPORTED_MODULE_2___default()), { options: languages, value: userLang, onChange: (e) => setUserLang(e.value), placeholder: userLang, styles: {
                    control: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                    menu: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                    option: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react_select__WEBPACK_IMPORTED_MODULE_2___default()), { options: themes, value: userTheme, onChange: (e) => setUserTheme(e.value), placeholder: userTheme, styles: {
                    control: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                    menu: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                    option: (base) => (Object.assign(Object.assign({}, base), { backgroundColor: "#474747", color: "#afec3f", border: "none", borderRadius: "0px", height: "40px", width: "100px", fontSize: "14px", fontWeight: "bold", padding: "0px", margin: "0px" })),
                } }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", { style: { fontSize: 14 } }, "Font Size"),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", { type: "range", min: "18", max: "30", value: fontSize, step: "2", onChange: (e) => {
                    setFontSize(e.target.value);
                } }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ "./lib/Pages/Terminal.js":
/*!*******************************!*\
  !*** ./lib/Pages/Terminal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monaco-editor/react */ "webpack/sharing/consume/default/@monaco-editor/react/@monaco-editor/react");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar */ "./lib/Pages/Navbar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);

// import "./Terminal.css";






function Terminal() {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
    const state = location.state;
    console.log("data", state.data);
    // State variable to set users source code
    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(``);
    // State variable to set editors default language
    const [userLang, setUserLang] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("python");
    // State variable to set editors default theme
    const [userTheme, setUserTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("vs-dark");
    // State variable to set editors default font size
    const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20);
    // State variable to set users input
    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    // State variable to set users output
    const [userOutput, setUserOutput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    console.log(userCode);
    const options = {
        fontSize: fontSize,
    };
    // Function to call the compile endpoint
    function compile() {
        setLoading(true);
        if (userCode === ``) {
            return;
        }
        // Post request to compile endpoint
        axios__WEBPACK_IMPORTED_MODULE_2___default().post(`http://localhost:3001/compile`, {
            code: userCode,
            language: userLang,
            input: userInput,
        })
            .then((res) => {
            setUserOutput(res.data.stdout + res.data.stderr);
        })
            .then(() => {
            setLoading(false);
        });
    }
    // Function to clear the output screen
    function clearOutput() {
        setUserOutput("");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { container: true, style: { height: "100%", overflowY: "scroll" } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { item: true, xs: 12, style: {
                width: "100%",
                overflowY: "scroll",
                backgroundColor: "#474747",
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"], { userLang: userLang, setUserLang: setUserLang, userTheme: userTheme, setUserTheme: setUserTheme, fontSize: fontSize, setFontSize: setFontSize })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { item: true, xs: 12, style: { display: "flex" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "left-container", style: { position: "relative", flex: "60%", height: "80vh" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1___default()), { options: options, width: "100%", theme: userTheme, language: userLang, defaultLanguage: "python", defaultValue: state.data.terminalQuestion, onChange: (value) => {
                            setUserCode(value);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "run-btn", onClick: () => compile(), style: {
                            position: "absolute",
                            bottom: "10px",
                            right: "18px",
                            width: "80px",
                            height: "40px",
                            fontSize: "22px",
                            fontWeight: "bold",
                            backgroundColor: "#afec3f",
                            border: "none",
                            borderRadius: "4px",
                            transition: "0.3s",
                            cursor: "pointer",
                        } }, "Run")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "right-container", style: {
                        flex: "40%",
                        height: "80vh",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#242424",
                        borderLeft: "3px solid #1f65e6",
                        padding: "5px",
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { color: "orange", fontSize: 18 } }, "Input:"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "input-box", style: { flex: "50%" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { id: "code-inp", style: { fontSize: "16px" }, onChange: (e) => setUserInput(e.target.value) })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { color: "orange", fontSize: 18 } }, "Output:"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { item: true }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "spinner-box", style: {
                            flex: "50%",
                            backgroundColor: "#242424",
                            overflowY: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { style: { color: "orange", fontSize: 14 } }, "Loading .."))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "output-box", style: {
                                flex: "50%",
                                overflowY: "auto",
                                color: "white",
                                position: "relative",
                                border: "1px solid orange",
                                minHeight: 50,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", null, userOutput)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                                clearOutput();
                            }, className: "clear-btn", style: {
                                width: "80px",
                                height: "40px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "white",
                                backgroundColor: "orange",
                                border: "none",
                                borderRadius: "4px",
                                transition: "0.3s",
                                cursor: "pointer",
                            } }, "Clear")))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, { item: true, xs: 12, style: { display: "flex" } }, state.data.linkData === "exam" ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: "/lab/student-exam", state: { data: state.data.id } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Save"))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, { to: "/lab/student-assignment", state: { data: state.data.id } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terminal);


/***/ }),

/***/ "./lib/StudentView/StudentAssignment.js":
/*!**********************************************!*\
  !*** ./lib/StudentView/StudentAssignment.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudentAssignment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/assignment */ "./lib/graphql/queries/assignment.js");
/* harmony import */ var _graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/mutations/answer */ "./lib/graphql/mutations/answer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */






function StudentAssignment({ props }) {
    var _a;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [userIdValue, setUserIdValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const { data: assignmentData, loading: assignmentLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_4__.GET_ASSIGNMENT, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data.assignmentId,
        },
    });
    const [createAnswer] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.CREATE_ANSWER);
    const [assignAnswerToQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.ASSIGN_ANSWER_TO_QUESTION);
    if (assignmentLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleSave = async (idValue) => {
        setUserIdValue(state.data.studentId);
        console.log(userIdValue);
        const newAnswer = await createAnswer({
            variables: {
                questionId: idValue,
                answer: answerValue,
                userId: userIdValue,
            },
        });
        await assignAnswerToQuestion({
            variables: {
                answerId: newAnswer.data.createAnswer.id,
                questionId: idValue,
            },
        });
        console.log("newAnswer", newAnswer);
        setAnswerValue("");
        setUserIdValue("");
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_a = assignmentData === null || assignmentData === void 0 ? void 0 : assignmentData.getAssignment) === null || _a === void 0 ? void 0 :
                    _a.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                display: "flex",
                                justifyContent: "start",
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                        display: "flex",
                                        justifyContent: "start",
                                        border: "1px dotted orange",
                                        marginBottom: 12,
                                        minHeight: 55,
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "semi-bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Question:"),
                                        " ",
                                        question.questionDesc)),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, { maxRows: 8, minRows: 8, defaultValue: "Answer", style: { width: "100%" }, onChange: (e) => {
                                                setAnswerValue(e.target.value);
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/terminal", state: {
                                                data: {
                                                    terminalQuestion: question.questionDesc,
                                                    id: state.data.assignmentId,
                                                    linkData: "assignment",
                                                },
                                            }, style: { marginRight: 8 } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Terminal")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                                handleSave(question.id);
                                            } }, "Save")))))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/student-home-page", state: { userId: userIdValue } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 12,
                                        margin: 12,
                                        width: "100%",
                                        border: "1px dotted orange",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Submit Assignment")))))))))));
}


/***/ }),

/***/ "./lib/StudentView/StudentAssignmentList.js":
/*!**************************************************!*\
  !*** ./lib/StudentView/StudentAssignmentList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudentAssignmentList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/assignment */ "./lib/graphql/queries/assignment.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */








/* eslint-disable react/prop-types */
function StudentAssignmentList(loggedInUserId) {
    var _a;
    const { data: assignmentList, loading: assignmentLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_assignment__WEBPACK_IMPORTED_MODULE_4__.LIST_ASSIGNMENT, {
        fetchPolicy: "cache-first",
        errorPolicy: "ignore",
    });
    console.log("id", loggedInUserId.loggedInUserId);
    if (assignmentLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_a = assignmentList === null || assignmentList === void 0 ? void 0 : assignmentList.assignmentList) === null || _a === void 0 ? void 0 : _a.filter((u) => u.status === true && u.isEnded === false).map((assignment) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: assignment.id, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2", component: "h6", style: {
                                    fontWeight: "bold",
                                } }, assignment.title))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: "flex",
                            justifyContent: "end",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            assignment.isEnded === false && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/student-assignment", state: {
                                    data: {
                                        assignmentId: assignment.id,
                                        studentId: loggedInUserId.loggedInUserId,
                                    },
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Take Assignment"))),
                            assignment.isEnded === true && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2", component: "h6" }, "Finished"))))))))))));
}


/***/ }),

/***/ "./lib/StudentView/StudentExam.js":
/*!****************************************!*\
  !*** ./lib/StudentView/StudentExam.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudentExam)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var _graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/mutations/answer */ "./lib/graphql/mutations/answer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */






function StudentExam({ props }) {
    var _a;
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    const state = location.state;
    console.log("props", state.data);
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const [userIdValue, setUserIdValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
    const { data: examData, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.GET_EXAM, {
        fetchPolicy: "network-only",
        errorPolicy: "ignore",
        variables: {
            id: state.data.examId,
        },
    });
    const [createAnswer] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.CREATE_ANSWER);
    const [assignAnswerToQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.ASSIGN_ANSWER_TO_QUESTION);
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleSave = async (idValue) => {
        setUserIdValue(state.data.studentId);
        const newAnswer = await createAnswer({
            variables: {
                questionId: idValue,
                userId: userIdValue,
                answer: answerValue,
            },
        });
        console.log("newAnswer", newAnswer);
        await assignAnswerToQuestion({
            variables: {
                answerId: newAnswer.data.createAnswer.id,
                questionId: idValue,
            },
        });
        setAnswerValue("");
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_a = examData === null || examData === void 0 ? void 0 : examData.getExam) === null || _a === void 0 ? void 0 :
                    _a.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: "flex" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                display: "flex",
                                justifyContent: "start",
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: "100%" } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                        display: "flex",
                                        justifyContent: "start",
                                        border: "1px dotted orange",
                                        marginBottom: 12,
                                        minHeight: 55,
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: "semi-bold",
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { color: "orange" } }, "Question:"),
                                        " ",
                                        question.questionDesc)),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, { maxRows: 8, minRows: 8, defaultValue: "Answer", style: { width: "100%" }, onChange: (e) => {
                                                setAnswerValue(e.target.value);
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/terminal", state: {
                                                data: {
                                                    terminalQuestion: question.questionDesc,
                                                    id: state.data.examId,
                                                    linkData: "exam",
                                                },
                                            }, style: { marginRight: 8 } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Terminal")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" }, onClick: () => {
                                                handleSave(question.id);
                                            } }, "Save")))))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/student-home-page", state: {
                                    userId: userIdValue,
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 12,
                                        margin: 12,
                                        width: "100%",
                                        border: "1px dotted orange",
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Submit Exam")))))))))));
}


/***/ }),

/***/ "./lib/StudentView/StudentExamList.js":
/*!********************************************!*\
  !*** ./lib/StudentView/StudentExamList.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudentExamList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/exam */ "./lib/graphql/queries/exam.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */








/* eslint-disable react/prop-types */
function StudentExamList(loggedInUserId) {
    var _a;
    const { data: examList, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.LIST_EXAM, {
        fetchPolicy: "cache-first",
        errorPolicy: "ignore",
    });
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "outlined", style: {
                        height: 500,
                        width: "100%",
                        border: "1px solid orange",
                        overflow: "scroll",
                    } }, (_a = examList === null || examList === void 0 ? void 0 : examList.examList) === null || _a === void 0 ? void 0 : _a.filter((u) => u.status === true).map((exam) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: exam.id, style: { display: "flex" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: "flex",
                            justifyContent: "start",
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2", component: "h6", style: {
                                    fontWeight: "bold",
                                } }, exam.title))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: "flex",
                            justifyContent: "end",
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            exam.isEnded === false && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/student-exam", state: {
                                    data: {
                                        examId: exam.id,
                                        studentId: loggedInUserId.loggedInUserId,
                                    },
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", style: { background: "orange", color: "#fff" } }, "Take Exam"))),
                            exam.isEnded === true && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2", component: "h6" }, "Finished"))))))))))));
}


/***/ }),

/***/ "./lib/StudentView/StudentHomePage.js":
/*!********************************************!*\
  !*** ./lib/StudentView/StudentHomePage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StudentHomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "../node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "../node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _StudentExamList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StudentExamList */ "./lib/StudentView/StudentExamList.js");
/* harmony import */ var _StudentAssignmentList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StudentAssignmentList */ "./lib/StudentView/StudentAssignmentList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










function TabPanel(props) {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other), value === index && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], null, children)))));
}
TabPanel.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
    index: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
    value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any.isRequired),
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabnav: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
    },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function StudentHomePage() {
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const state = location.state;
    console.log("id", state.userId);
    const classes = useStyles();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleLogOut = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, className: classes.tabnav },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", style: { background: "orange", color: "#fff" }, onClick: handleLogOut }, "Logout")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], { position: "static" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Assign" }, a11yProps(0))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Exam" }, a11yProps(1))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true, xs: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 0, style: { width: "100%", padding: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_8__["default"], { loggedInUserId: state.userId })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 1, style: { width: "100%", padding: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentExamList__WEBPACK_IMPORTED_MODULE_9__["default"], { loggedInUserId: state.userId })))));
}


/***/ }),

/***/ "./lib/config/Route.js":
/*!*****************************!*\
  !*** ./lib/config/Route.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LecturerView_AssignmentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LecturerView/AssignmentList */ "./lib/LecturerView/AssignmentList.js");
/* harmony import */ var _LecturerView_ExamList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LecturerView/ExamList */ "./lib/LecturerView/ExamList.js");
/* harmony import */ var _LecturerView_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LecturerView/HomePage */ "./lib/LecturerView/HomePage.js");
/* harmony import */ var _Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/MainPage */ "./lib/Pages/MainPage.js");
/* harmony import */ var _Pages_Terminal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/Terminal */ "./lib/Pages/Terminal.js");
/* harmony import */ var _LecturerView_QuestionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LecturerView/QuestionList */ "./lib/LecturerView/QuestionList.js");
/* harmony import */ var _StudentView_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StudentView/StudentAssignmentList */ "./lib/StudentView/StudentAssignmentList.js");
/* harmony import */ var _StudentView_StudentExamList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StudentView/StudentExamList */ "./lib/StudentView/StudentExamList.js");
/* harmony import */ var _StudentView_StudentHomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StudentView/StudentHomePage */ "./lib/StudentView/StudentHomePage.js");
/* harmony import */ var _StudentView_StudentExam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../StudentView/StudentExam */ "./lib/StudentView/StudentExam.js");
/* harmony import */ var _LecturerView_AssignmentQuestionList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../LecturerView/AssignmentQuestionList */ "./lib/LecturerView/AssignmentQuestionList.js");
/* harmony import */ var _StudentView_StudentAssignment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../StudentView/StudentAssignment */ "./lib/StudentView/StudentAssignment.js");
/* harmony import */ var _LecturerView_ExamByStudentList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../LecturerView/ExamByStudentList */ "./lib/LecturerView/ExamByStudentList.js");
/* harmony import */ var _LecturerView_ExamByQuestionStudentList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../LecturerView/ExamByQuestionStudentList */ "./lib/LecturerView/ExamByQuestionStudentList.js");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
















const ROUTES = [
    { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: "/lab", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: "/lab/exam-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_ExamList__WEBPACK_IMPORTED_MODULE_3__["default"], null) },
    { path: "/lab/assignment-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_AssignmentList__WEBPACK_IMPORTED_MODULE_4__["default"], null) },
    { path: "/lab/home-page", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"], null) },
    { path: "/lab/student-home-page", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentHomePage__WEBPACK_IMPORTED_MODULE_6__["default"], null) },
    { path: "/lab/student-assignment-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
    { path: "/lab/student-exam-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentExamList__WEBPACK_IMPORTED_MODULE_8__["default"], null) },
    { path: "*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: "/lab/question-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_QuestionList__WEBPACK_IMPORTED_MODULE_9__["default"], null) },
    { path: "lab/student-exam", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentExam__WEBPACK_IMPORTED_MODULE_10__["default"], null) },
    { path: "/lab/terminal", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Terminal__WEBPACK_IMPORTED_MODULE_11__["default"], null) },
    {
        path: "/lab/assignment-question-list",
        element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_AssignmentQuestionList__WEBPACK_IMPORTED_MODULE_12__["default"], null),
    },
    ,
    { path: "/lab/student-assignment", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentAssignment__WEBPACK_IMPORTED_MODULE_13__["default"], null) },
    { path: "/lab/exam-by-student-list", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_ExamByStudentList__WEBPACK_IMPORTED_MODULE_14__["default"], null) },
    {
        path: "/lab/exam-by-question-student-list",
        element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_ExamByQuestionStudentList__WEBPACK_IMPORTED_MODULE_15__["default"], null),
    },
];
const Route = () => {
    // useRoutes() hook to define and render routes using regular JavaScript objects instead of <Routes> and <Route> elements.
    const routes = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(ROUTES);
    return routes;
};
const AppWrapper = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Route, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWrapper);


/***/ }),

/***/ "./lib/graphql/mutations/answer.js":
/*!*****************************************!*\
  !*** ./lib/graphql/mutations/answer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSIGN_ANSWER_TO_QUESTION": () => (/* binding */ ASSIGN_ANSWER_TO_QUESTION),
/* harmony export */   "CREATE_ANSWER": () => (/* binding */ CREATE_ANSWER)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_ANSWER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation createAnswer($questionId: ID!, $answer: String!, $userId: ID!) {
    createAnswer(questionId: $questionId, answer: $answer, userId: $userId) {
      id
      questionId
      answer
    }
  }
`;
const ASSIGN_ANSWER_TO_QUESTION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation assignAnswerToQuestion($questionId: ID!, $answerId: ID!) {
    assignAnswerToQuestion(questionId: $questionId, answerId: $answerId) {
      id
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/mutations/assignment.js":
/*!*********************************************!*\
  !*** ./lib/graphql/mutations/assignment.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_ASSIGNMENT": () => (/* binding */ CREATE_ASSIGNMENT),
/* harmony export */   "DELETE_ASSIGNMENT": () => (/* binding */ DELETE_ASSIGNMENT),
/* harmony export */   "UPDATE_ASSIGNMENT": () => (/* binding */ UPDATE_ASSIGNMENT)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation createAssignment(
    $title: String!
    $description: String!
    $type: String!
    $date: String!
    $dueDate: String!
    $dueTime: String!
    $duration: String!
    $gradeScale: String!
    $resubmissionNumber: String!
    $resubmissionTime: String!
    $resubmissionDate: String!
    $status: Boolean!
    $isEnded: Boolean!
  ) {
    createAssignment(
      title: $title
      description: $description
      type: $type
      date: $date
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;
const DELETE_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation deleteAssignment($id: ID!) {
    deleteAssignment(id: $id) {
      id
    }
  }
`;
const UPDATE_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation updateAssignment(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $date: String
    $dueDate: String
    $dueTime: String
    $duration: String
    $gradeScale: String
    $resubmissionNumber: String
    $resubmissionTime: String
    $resubmissionDate: String
    $status: Boolean
    $isEnded: Boolean
  ) {
    updateAssignment(
      id: $id
      title: $title
      description: $description
      type: $type
      date: $date
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/mutations/authenticate.js":
/*!***********************************************!*\
  !*** ./lib/graphql/mutations/authenticate.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHENTICATE_USER": () => (/* binding */ AUTHENTICATE_USER)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const AUTHENTICATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
        userRole
      }
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/mutations/exam.js":
/*!***************************************!*\
  !*** ./lib/graphql/mutations/exam.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_EXAM": () => (/* binding */ CREATE_EXAM),
/* harmony export */   "DELETE_EXAM": () => (/* binding */ DELETE_EXAM),
/* harmony export */   "UPDATE_EXAM": () => (/* binding */ UPDATE_EXAM)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation createExam(
    $title: String!
    $description: String!
    $type: String!
    $date: String!
    $time: String!
    $dueDate: String!
    $dueTime: String!
    $duration: String!
    $gradeScale: String!
    $resubmissionNumber: String!
    $resubmissionTime: String!
    $resubmissionDate: String!
    $status: Boolean!
    $isEnded: Boolean!
  ) {
    createExam(
      title: $title
      description: $description
      type: $type
      date: $date
      time: $time
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      time
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;
const DELETE_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation deleteExam($id: ID!) {
    deleteExam(id: $id) {
      id
    }
  }
`;
const UPDATE_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation updateExam(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $date: String
    $time: String
    $dueDate: String
    $dueTime: String
    $duration: String
    $gradeScale: String
    $resubmissionNumber: String
    $resubmissionTime: String
    $resubmissionDate: String
    $status: Boolean
    $isEnded: Boolean
  ) {
    updateExam(
      id: $id
      title: $title
      description: $description
      type: $type
      date: $date
      time: $time
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      time
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/mutations/question.js":
/*!*******************************************!*\
  !*** ./lib/graphql/mutations/question.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_QUESTION_TO_ASSIGNMENT": () => (/* binding */ ADD_QUESTION_TO_ASSIGNMENT),
/* harmony export */   "ADD_QUESTION_TO_EXAM": () => (/* binding */ ADD_QUESTION_TO_EXAM),
/* harmony export */   "CREATE_QUESTION": () => (/* binding */ CREATE_QUESTION),
/* harmony export */   "DELETE_QUESTION": () => (/* binding */ DELETE_QUESTION)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_QUESTION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation createQuestion(
    $questionDesc: String!
    $gradingInput: String!
    $answer: String!
    $grade: String!
    $gradingOutput: String!
    $autoGrade: Boolean!
  ) {
    createQuestion(
      questionDesc: $questionDesc
      gradingInput: $gradingInput
      answer: $answer
      grade: $grade
      gradingOutput: $gradingOutput
      autoGrade: $autoGrade
    ) {
      id
      questionDesc
      gradingInput
      answer
      grade
      gradingOutput
      autoGrade
    }
  }
`;
const ADD_QUESTION_TO_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation assignedQuestionToExam($ExamId: ID!, $questionId: ID!) {
    assignedQuestionToExam(ExamId: $ExamId, questionId: $questionId) {
      id
      questionDesc
    }
  }
`;
const ADD_QUESTION_TO_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation assignedQuestionToAssignment($AssignmentId: ID!, $questionId: ID!) {
    assignedQuestionToAssignment(
      AssignmentId: $AssignmentId
      questionId: $questionId
    ) {
      id
      questionDesc
    }
  }
`;
const DELETE_QUESTION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/queries/assignment.js":
/*!*******************************************!*\
  !*** ./lib/graphql/queries/assignment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ASSIGNMENT": () => (/* binding */ GET_ASSIGNMENT),
/* harmony export */   "LIST_ASSIGNMENT": () => (/* binding */ LIST_ASSIGNMENT)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const LIST_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  query assignmentList {
    assignmentList {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
      }
      status
      isEnded
    }
  }
`;
const GET_ASSIGNMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  query getAssignment($id: ID!) {
    getAssignment(id: $id) {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
      }
      status
      isEnded
    }
  }
`;


/***/ }),

/***/ "./lib/graphql/queries/exam.js":
/*!*************************************!*\
  !*** ./lib/graphql/queries/exam.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_EXAM": () => (/* binding */ GET_EXAM),
/* harmony export */   "LIST_EXAM": () => (/* binding */ LIST_EXAM)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "webpack/sharing/consume/default/@apollo/client/@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const LIST_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  query examList {
    examList {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
      }
      status
      isEnded
    }
  }
`;
const GET_EXAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql `
  query getExam($id: ID!) {
    getExam(id: $id) {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
        answers {
          id
          answer
          userId
        }
      }
      studentExamProgressions {
        id
        user {
          id
          fullName
        }
      }
      status
      isEnded
    }
  }
`;


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/launcher */ "webpack/sharing/consume/default/@jupyterlab/launcher");
/* harmony import */ var _jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
/* harmony import */ var _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget */ "./lib/widget.js");




/**
 * The command IDs used by the react-widget plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.create = "create-react-widget";
})(CommandIDs || (CommandIDs = {}));
/**
 * Initialization data for the react-widget extension.
 */
const extension = {
    id: "react-widget",
    autoStart: true,
    optional: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__.ILauncher],
    activate: (app, launcher) => {
        const { commands } = app;
        const command = CommandIDs.create;
        commands.addCommand(command, {
            caption: "ILMS Module",
            label: "ILMS Module",
            icon: (args) => (args["isPalette"] ? null : _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.reactIcon),
            execute: () => {
                const content = new _widget__WEBPACK_IMPORTED_MODULE_3__.CounterWidget();
                const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
                widget.title.label = "ILMS";
                widget.title.icon = _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.reactIcon;
                app.shell.add(widget, "main");
            },
        });
        if (launcher) {
            launcher.add({
                command,
            });
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extension);


/***/ }),

/***/ "./lib/widget.js":
/*!***********************!*\
  !*** ./lib/widget.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterWidget": () => (/* binding */ CounterWidget)
/* harmony export */ });
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
/* harmony import */ var _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./lib/App.js");



/**
 * React component for a counter.
 *
 * @returns The React component
 */
const CounterComponent = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
class CounterWidget extends _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    constructor() {
        super();
        this.addClass('jp-ReactWidget');
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(CounterComponent, null);
    }
}


/***/ })

}]);
//# sourceMappingURL=lib_index_js.6d4764cd06adbb0e3210.js.map