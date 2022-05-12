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
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        // uri: process.env.REACT_APP_API_URL,
        uri: 'http://localhost:3001/graphql',
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache(),
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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable no-unused-vars */ 


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function AssignmentList() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "outlined", style: { minHeight: 500, border: '1px solid orange' } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose })));
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
    const [titleValue, setTitleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [descriptionValue, setDescriptionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [dateValue, setDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [timeValue, setTimeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [durationValue, setDurationValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [typeValue, setTypeValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [assignedToValue, setAssignedToValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [resubmissionValue, setResubmissionValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [resubmissionDateValue, setResubmissionDateValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [gradeScaleValue, setGradeScaleValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [asdasd, setAsdasd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [createExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.CREATE_EXAM);
    const [deleteExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.DELETE_EXAM);
    const [updateExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_exam__WEBPACK_IMPORTED_MODULE_4__.UPDATE_EXAM);
    const { data: examList, loading: examLoading, refetch, } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.LIST_EXAM, {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore',
    });
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    // Bu fonksiyonla exam ekleyebiliyoruz.
    const handleSubmit = async () => {
        await createExam({
            variables: {
                title: titleValue || '',
                description: descriptionValue || '',
                date: dateValue || '',
                time: timeValue || '',
                duration: durationValue || '',
                type: typeValue || '',
                resubmissionNumber: resubmissionValue || '',
                resubmissionDate: resubmissionDateValue || '',
                gradeScale: gradeScaleValue || '',
                resubmissionTime: '',
                dueDate: dateValue || '',
                dueTime: '',
                status: false,
            },
        });
        // clear all the states
        setTitleValue('');
        setDescriptionValue('');
        setDateValue('');
        setTimeValue('');
        setDurationValue('');
        setTypeValue('');
        setResubmissionValue('');
        setResubmissionDateValue('');
        setGradeScaleValue('');
        refetch();
        setAsdasd(examList.examList);
        console.log('create sonrası', asdasd);
        setAddOpener(false);
    };
    // Bu fonksiyonla herhangi bir exami silebiliyoruz
    const handleDeleteExam = async (deletedId) => {
        console.log('delete');
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
        console.log('update', examList.examList);
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
    console.log('examList', examList.examList);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outlined", style: {
                    height: 500,
                    width: '100%',
                    border: '1px solid orange',
                    overflow: 'scroll',
                } }, (_a = examList === null || examList === void 0 ? void 0 : examList.examList) === null || _a === void 0 ? void 0 :
                _a.map((exam) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: exam.id, style: { display: 'flex' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/question-list", state: { data: exam.id } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                                display: 'flex',
                                justifyContent: 'start',
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", component: "h6", style: {
                                        fontWeight: 'bold',
                                    } }, exam.title)))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: 'flex',
                            justifyContent: 'end',
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary", onClick: () => {
                                    handleUpdateExam(exam === null || exam === void 0 ? void 0 : exam.id);
                                } }, "Publish"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary", onClick: () => {
                                    handleDeleteExam(exam === null || exam === void 0 ? void 0 : exam.id);
                                } }, "Delete")))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], { style: {
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            padding: 12,
                            margin: 12,
                            width: '100%',
                            border: '1px solid gray',
                        }, onClick: handleAddOpen },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { style: { fontSize: 14 }, gutterBottom: true }, "Add New Exam")))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleDeleteExam, color: "primary" }, "Delete"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, color: "primary" }, "Close"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: addOpener, onClose: handleAddCloser, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true, xs: 12 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, { style: { width: 800 } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Title:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Title", variant: "outlined", type: "text", value: titleValue, onChange: (e) => setTitleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Description:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Description Value", variant: "outlined", type: "text", value: descriptionValue, onChange: (e) => setDescriptionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Type:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the Type", variant: "outlined", type: "text", value: typeValue, onChange: (e) => setTypeValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Assigned To:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Select the assigned to", variant: "outlined", type: "date", value: assignedToValue, onChange: (e) => setAssignedToValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Due Date:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Time", variant: "outlined", type: "time", value: timeValue, onChange: (e) => setTimeValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmissions:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the number of resubmissions", variant: "outlined", type: "number", value: resubmissionValue, onChange: (e) => setResubmissionValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Resubmission Time:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the number of resubmissions", variant: "outlined", type: "date", value: resubmissionDateValue, onChange: (e) => setResubmissionDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Publish Date:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Grade Scale", variant: "outlined", type: "date", value: dateValue, onChange: (e) => setDateValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", gutterBottom: true }, "Grade Scale:")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { fullWidth: true, id: "outlined-basic", placeholder: "Enter the Grade Scale", variant: "outlined", type: "number", value: gradeScaleValue, onChange: (e) => setGradeScaleValue(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: 'flex', justifyContent: 'end' } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, color: "primary" }, "Submit"))))))));
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabnav: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function HomePage() {
    const classes = useStyles();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, className: classes.tabnav },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/selection-page" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", color: "primary" }, "Back"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], { position: "static" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Assignment List" }, a11yProps(0))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Exam List" }, a11yProps(1))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 0, style: { width: '100%', padding: 12 } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AssignmentList__WEBPACK_IMPORTED_MODULE_8__["default"], null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 1, style: { width: '100%', padding: 12 } },
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
    console.log('props', state.data);
    // Soru eklemek için gerekli popUp'ı açan değeri tanımlıyoruz
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
    // Soru eklemek için gerekli değerleri tanımlıyoruz.
    const [questionDescValue, setQuestionDescValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [gradeInputValue, setGradeInputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [gradeOutputValue, setGradeOutputValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [gradeValue, setGradeValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [createQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.CREATE_QUESTION);
    const [assignedQuestionToExam] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_question__WEBPACK_IMPORTED_MODULE_4__.ADD_QUESTION_TO_EXAM);
    const { data: examData, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_5__.GET_EXAM, {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
        variables: {
            id: state.data,
        },
    });
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleQuestionAdd = () => {
        setOpen(true);
    };
    const handleSubmit = async () => {
        const newQuestion = await createQuestion({
            variables: {
                questionDesc: questionDescValue || '',
                answer: answerValue || '',
                grade: gradeValue || '',
                autoGrade: false,
                gradingInput: gradeInputValue || '',
                gradingOutput: gradeOutputValue || '',
            },
        });
        await assignedQuestionToExam({
            variables: {
                ExamId: state.data,
                questionId: newQuestion.data.createQuestion.id,
            },
        });
        setOpen(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: '100%',
                        border: '1px solid orange',
                        overflow: 'scroll',
                    } }, (_a = examData === null || examData === void 0 ? void 0 : examData.getExam) === null || _a === void 0 ? void 0 :
                    _a.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: 'flex' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                                display: 'flex',
                                justifyContent: 'start',
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12 },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                                fontWeight: 'bold',
                                            } }, question.questionDesc)),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                                fontWeight: 'bold',
                                            } }, question.grade)))))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 12,
                                    margin: 12,
                                    width: '100%',
                                    border: '1px dotted gray',
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: () => handleQuestionAdd() },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Add Question"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/home-page" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 12,
                                        margin: 12,
                                        width: '100%',
                                        border: '1px dotted gray',
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Save Content"))))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: () => setOpen(false), "aria-labelledby": "form-dialog-title" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, { id: "form-dialog-title" }, "Add Question"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContent, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogContentText, null, "Please enter the question and the answer."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { autoFocus: true, margin: "dense", id: "question", label: "Question", type: "text", fullWidth: true, value: questionDescValue, onChange: (e) => setQuestionDescValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "answer", label: "Answer", type: "text", fullWidth: true, value: answerValue, onChange: (e) => setAnswerValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeInput", label: "Grade Input", type: "text", fullWidth: true, value: gradeInputValue, onChange: (e) => setGradeInputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "gradeOutput", label: "Grade Output", type: "text", fullWidth: true, value: gradeOutputValue, onChange: (e) => setGradeOutputValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextField, { margin: "dense", id: "grade", label: "Grade", type: "text", fullWidth: true, value: gradeValue, onChange: (e) => setGradeValue(e.target.value) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: { display: 'flex', justifyContent: 'end' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", onClick: handleSubmit, color: "primary" }, "Submit")))))));
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
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



function MainPage() {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/selection-page" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary" }, "Login")))));
}


/***/ }),

/***/ "./lib/Pages/SelectionPage.js":
/*!************************************!*\
  !*** ./lib/Pages/SelectionPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



/* eslint-disable react/prop-types */
function SelectionPage() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/student-home-page" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary" }, "Student View")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/home-page" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary" }, "Lecturer View")))));
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
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "webpack/sharing/consume/default/@material-ui/core/@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable no-unused-vars */ 


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function StudentAssignmentList() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { variant: "outlined", style: { minHeight: 500, border: '1px solid orange' } })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose })));
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
    console.log('props', state.data);
    const [answerValue, setAnswerValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const { data: examData, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.GET_EXAM, {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
        variables: {
            id: state.data,
        },
    });
    const [createAnswer] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.CREATE_ANSWER);
    const [assignAnswerToQuestion] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_graphql_mutations_answer__WEBPACK_IMPORTED_MODULE_5__.ASSIGN_ANSWER_TO_QUESTION);
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
    }
    const handleSave = async (idValue) => {
        console.log('idValue', idValue);
        const newAnswer = await createAnswer({
            variables: {
                questionId: idValue,
                answer: answerValue,
            },
        });
        console.log('newAnswer', newAnswer);
        await assignAnswerToQuestion({
            variables: {
                answerId: newAnswer.data.createAnswer.id,
                questionId: idValue,
            },
        });
        setAnswerValue('');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, style: { width: '100%' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Card, { variant: "outlined", style: {
                        height: 500,
                        width: '100%',
                        border: '1px solid orange',
                        overflow: 'scroll',
                    } }, (_a = examData === null || examData === void 0 ? void 0 : examData.getExam) === null || _a === void 0 ? void 0 :
                    _a.questions.map((question) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: question.id, style: { display: 'flex' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                display: 'flex',
                                justifyContent: 'start',
                                padding: 12,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: { width: '100%' } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12 },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { variant: "body2", component: "h6", style: {
                                            fontWeight: 'semi-bold',
                                        } }, question.questionDesc)),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, style: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.TextareaAutosize, { maxRows: 8, minRows: 8, style: { width: '100%' }, onChange: (e) => {
                                                setAnswerValue(e.target.value);
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4 },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary", onClick: () => {
                                                handleSave(question.id);
                                            } }, "Save")))))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 12,
                                    margin: 12,
                                    width: '100%',
                                    border: '1px dotted gray',
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Add Question"))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/home-page" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardContent, { style: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 12,
                                        margin: 12,
                                        width: '100%',
                                        border: '1px dotted gray',
                                    } },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, null,
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, { style: { fontSize: 14 }, gutterBottom: true }, "Save Content")))))))))));
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
function StudentExamList() {
    var _a;
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const { data: examList, loading: examLoading } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_graphql_queries_exam__WEBPACK_IMPORTED_MODULE_4__.LIST_EXAM, {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore',
    });
    if (examLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading...");
    }
    const handleClose = () => {
        setOpen(false);
    };
    // Bu fonksiyonla detaylar popup'ını açıyoruz.
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { style: { minWidth: 275, margin: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "outlined", style: {
                        height: 500,
                        width: '100%',
                        border: '1px solid orange',
                        overflow: 'scroll',
                    } }, (_a = examList === null || examList === void 0 ? void 0 : examList.examList) === null || _a === void 0 ? void 0 : _a.filter((u) => u.status === true).map((exam) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, key: exam.id, style: { display: 'flex' } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 8, style: {
                            display: 'flex',
                            justifyContent: 'start',
                            padding: 12,
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "body2", component: "h6", style: {
                                    fontWeight: 'bold',
                                } }, exam.title))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 4, style: {
                            padding: 12,
                            display: 'flex',
                            justifyContent: 'end',
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CardActions, null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, { to: "/lab/student-exam", state: { data: exam.id } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "contained", color: "primary" }, "Take Exam")))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Dialog, { open: open, onClose: handleClose, style: {
                borderRadius: 10,
                minHeight: 250,
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, color: "primary" }, "Close")))));
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["default"])((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabnav: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
}));
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function StudentHomePage() {
    const classes = useStyles();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 12, className: classes.tabnav },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 2 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { to: "/lab/selection-page" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "outlined", color: "primary" }, "Back"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { item: true, xs: 10 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], { position: "static" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Tabs, { value: value, onChange: handleChange, "aria-label": "simple tabs example" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Assign" }, a11yProps(0))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Exam" }, a11yProps(1))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, { container: true, item: true, xs: 12 },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 0, style: { width: '100%', padding: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_8__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabPanel, { value: value, index: 1, style: { width: '100%', padding: 12 } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentExamList__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
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
/* harmony import */ var _LecturerView_QuestionList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LecturerView/QuestionList */ "./lib/LecturerView/QuestionList.js");
/* harmony import */ var _Pages_SelectionPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/SelectionPage */ "./lib/Pages/SelectionPage.js");
/* harmony import */ var _StudentView_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StudentView/StudentAssignmentList */ "./lib/StudentView/StudentAssignmentList.js");
/* harmony import */ var _StudentView_StudentExamList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StudentView/StudentExamList */ "./lib/StudentView/StudentExamList.js");
/* harmony import */ var _StudentView_StudentHomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StudentView/StudentHomePage */ "./lib/StudentView/StudentHomePage.js");
/* harmony import */ var _StudentView_StudentExam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../StudentView/StudentExam */ "./lib/StudentView/StudentExam.js");
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */












const ROUTES = [
    { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: '/lab', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: '/lab/exam-list', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_ExamList__WEBPACK_IMPORTED_MODULE_3__["default"], null) },
    { path: '/lab/assignment-list', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_AssignmentList__WEBPACK_IMPORTED_MODULE_4__["default"], null) },
    { path: '/lab/home-page', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"], null) },
    { path: '/lab/student-home-page', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentHomePage__WEBPACK_IMPORTED_MODULE_6__["default"], null) },
    { path: '/lab/student-assignment-list', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentAssignmentList__WEBPACK_IMPORTED_MODULE_7__["default"], null) },
    { path: '/lab/student-exam-list', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentExamList__WEBPACK_IMPORTED_MODULE_8__["default"], null) },
    { path: '/lab/selection-page', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_SelectionPage__WEBPACK_IMPORTED_MODULE_9__["default"], null) },
    { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null) },
    { path: '/lab/question-list', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LecturerView_QuestionList__WEBPACK_IMPORTED_MODULE_10__["default"], null) },
    { path: 'lab/student-exam', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_StudentView_StudentExam__WEBPACK_IMPORTED_MODULE_11__["default"], null) },
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
  mutation createAnswer($questionId: ID!, $answer: String!) {
    createAnswer(questionId: $questionId, answer: $answer) {
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
    $status: Boolean!
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
/* harmony export */   "ADD_QUESTION_TO_EXAM": () => (/* binding */ ADD_QUESTION_TO_EXAM),
/* harmony export */   "CREATE_QUESTION": () => (/* binding */ CREATE_QUESTION)
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
      }
      status
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
      }
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
    CommandIDs.create = 'create-react-widget';
})(CommandIDs || (CommandIDs = {}));
/**
 * Initialization data for the react-widget extension.
 */
const extension = {
    id: 'react-widget',
    autoStart: true,
    optional: [_jupyterlab_launcher__WEBPACK_IMPORTED_MODULE_1__.ILauncher],
    activate: (app, launcher) => {
        const { commands } = app;
        const command = CommandIDs.create;
        commands.addCommand(command, {
            caption: 'Create a new React Widget',
            label: 'React Widget',
            icon: (args) => (args['isPalette'] ? null : _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.reactIcon),
            execute: () => {
                const content = new _widget__WEBPACK_IMPORTED_MODULE_3__.CounterWidget();
                const widget = new _jupyterlab_apputils__WEBPACK_IMPORTED_MODULE_0__.MainAreaWidget({ content });
                widget.title.label = 'React Widget';
                widget.title.icon = _jupyterlab_ui_components__WEBPACK_IMPORTED_MODULE_2__.reactIcon;
                app.shell.add(widget, 'main');
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
//# sourceMappingURL=lib_index_js.643abe554691a8b05f42.js.map