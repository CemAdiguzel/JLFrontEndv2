/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  Typography,
  DialogActions,
} from "@material-ui/core";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_QUESTION_TO_EXAM,
  CREATE_QUESTION,
  DELETE_QUESTION,
} from "../graphql/mutations/question";
import { GET_EXAM } from "../graphql/queries/exam";

import { Link, useLocation } from "react-router-dom";

export default function QuestionList({ props }: any) {
  const location = useLocation();
  const state = location.state as any;
  console.log("props", state.data);

  // Soru eklemek için gerekli popUp'ı açan değeri tanımlıyoruz
  const [open, setOpen] = React.useState(false);
  // Soru eklemek için gerekli değerleri tanımlıyoruz.
  const [questionDescValue, setQuestionDescValue] = React.useState("");
  const [answerValue, setAnswerValue] = React.useState("");
  const [gradeInputValue, setGradeInputValue] = React.useState("");
  const [gradeOutputValue, setGradeOutputValue] = React.useState("");
  const [gradeValue, setGradeValue] = React.useState("");

  const [createQuestion] = useMutation(CREATE_QUESTION);
  const [assignedQuestionToExam] = useMutation(ADD_QUESTION_TO_EXAM, {
    refetchQueries: [{ query: GET_EXAM, variables: { id: state.data } }],
  });
  const [deleteQuestion] = useMutation(DELETE_QUESTION, {
    refetchQueries: [{ query: GET_EXAM, variables: { id: state.data } }],
  });

  const { data: examData, loading: examLoading } = useQuery(GET_EXAM, {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
    variables: {
      id: state.data,
    },
  });

  if (examLoading) {
    return <div>Loading...</div>;
  }

  const handleQuestionAdd = (): any => {
    setOpen(true);
  };
  const handleSubmit = async (): Promise<any> => {
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
  const handleDeleteQuestion = async (questionId: any): Promise<any> => {
    await deleteQuestion({
      variables: {
        id: questionId,
      },
    });
  };

  return (
    <>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <Card
            variant="outlined"
            style={{
              height: 500,
              width: "100%",
              border: "1px solid orange",
              overflow: "scroll",
            }}
          >
            {examData?.getExam?.questions.map((question: any) => (
              <Grid item xs={12} key={question.id} style={{ display: "flex" }}>
                <CardContent style={{ width: "100%", display: "flex" }}>
                  <Grid item xs={9} style={{ display: "flex" }}>
                    <Grid
                      item
                      xs={8}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <span style={{ color: "orange" }}>Question:</span>{" "}
                        {question.questionDesc}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        <span style={{ color: "orange" }}>Grade:</span>{" "}
                        {question.grade}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{ background: "orange", color: "#fff" }}
                      onClick={() => {
                        handleDeleteQuestion(question.id);
                      }}
                    >
                      DELETE
                    </Button>
                  </Grid>
                </CardContent>
              </Grid>
            ))}
            <CardActions>
              <Grid container item>
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 12,
                    margin: 12,
                    width: "100%",
                    border: "1px dotted orange",
                  }}
                >
                  <Button onClick={() => handleQuestionAdd()}>
                    <Typography style={{ fontSize: 14 }} gutterBottom>
                      Add Question
                    </Typography>
                  </Button>
                </CardContent>
                <Link to="/lab/home-page">
                  <CardContent
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 12,
                      margin: 12,
                      width: "100%",
                      border: "1px dotted orange",
                    }}
                  >
                    <Button>
                      <Typography style={{ fontSize: 14 }} gutterBottom>
                        Save Content
                      </Typography>
                    </Button>
                  </CardContent>
                </Link>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the question and the answer.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="question"
            label="Question"
            type="text"
            fullWidth
            value={questionDescValue}
            onChange={(e) => setQuestionDescValue(e.target.value)}
          />
          <TextField
            margin="dense"
            id="answer"
            label="Answer"
            type="text"
            fullWidth
            value={answerValue}
            onChange={(e) => setAnswerValue(e.target.value)}
          />
          <TextField
            margin="dense"
            id="gradeInput"
            label="Grade Input"
            type="text"
            fullWidth
            value={gradeInputValue}
            onChange={(e) => setGradeInputValue(e.target.value)}
          />
          <TextField
            margin="dense"
            id="gradeOutput"
            label="Grade Output"
            type="text"
            fullWidth
            value={gradeOutputValue}
            onChange={(e) => setGradeOutputValue(e.target.value)}
          />
          <TextField
            margin="dense"
            id="grade"
            label="Grade"
            type="text"
            fullWidth
            value={gradeValue}
            onChange={(e) => setGradeValue(e.target.value)}
          />
          <DialogActions>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                variant="outlined"
                onClick={handleSubmit}
                style={{ background: "orange", color: "#fff" }}
              >
                Submit
              </Button>
            </Grid>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
