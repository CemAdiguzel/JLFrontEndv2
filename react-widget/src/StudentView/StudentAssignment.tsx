/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextareaAutosize,
} from "@material-ui/core";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ASSIGNMENT } from "../graphql/queries/assignment";
import {
  CREATE_ANSWER,
  ASSIGN_ANSWER_TO_QUESTION,
} from "../graphql/mutations/answer";

import { Link, useLocation } from "react-router-dom";

export default function StudentAssignment({ props }: any) {
  const location = useLocation();
  const state = location.state as any;
  console.log("props", state.data);
  const [answerValue, setAnswerValue] = React.useState("");
  const [userIdValue, setUserIdValue] = React.useState("");

  const { data: assignmentData, loading: assignmentLoading } = useQuery(
    GET_ASSIGNMENT,
    {
      fetchPolicy: "network-only",
      errorPolicy: "ignore",
      variables: {
        id: state.data.assignmentId,
      },
    }
  );

  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [assignAnswerToQuestion] = useMutation(ASSIGN_ANSWER_TO_QUESTION);

  if (assignmentLoading) {
    return <div>Loading...</div>;
  }
  const handleSave = async (idValue: any) => {
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
            {assignmentData?.getAssignment?.questions.map((question: any) => (
              <Grid item xs={12} key={question.id} style={{ display: "flex" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    padding: 12,
                  }}
                >
                  <CardContent style={{ width: "100%" }}>
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        border: "1px dotted orange",
                        marginBottom: 12,
                        minHeight: 55,
                      }}
                    >
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "semi-bold",
                        }}
                      >
                        <span style={{ color: "orange" }}>Question:</span>{" "}
                        {question.questionDesc}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <TextareaAutosize
                          maxRows={8}
                          minRows={8}
                          defaultValue="Answer"
                          style={{ width: "100%" }}
                          onChange={(e: any) => {
                            setAnswerValue(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Link
                          to="/lab/terminal"
                          state={{
                            data: {
                              terminalQuestion: question.questionDesc,
                              id: state.data.assignmentId,
                              linkData: "assignment",
                            },
                          }}
                          style={{ marginRight: 8 }}
                        >
                          <Button
                            variant="contained"
                            style={{ background: "orange", color: "#fff" }}
                          >
                            Terminal
                          </Button>
                        </Link>
                        <Button
                          variant="contained"
                          style={{ background: "orange", color: "#fff" }}
                          onClick={() => {
                            handleSave(question.id);
                          }}
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Grid>
              </Grid>
            ))}
            <CardActions>
              <Grid container item>
                <Link
                  to="/lab/student-home-page"
                  state={{ userId: userIdValue }}
                >
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
                        Submit Assignment
                      </Typography>
                    </Button>
                  </CardContent>
                </Link>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
