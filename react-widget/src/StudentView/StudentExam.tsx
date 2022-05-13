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
import { GET_EXAM } from "../graphql/queries/exam";
import {
  CREATE_ANSWER,
  ASSIGN_ANSWER_TO_QUESTION,
} from "../graphql/mutations/answer";

import { Link, useLocation } from "react-router-dom";

export default function StudentExam({ props }: any) {
  const location = useLocation();
  const state = location.state as any;
  console.log("props", state.data);
  const [answerValue, setAnswerValue] = React.useState("");

  const { data: examData, loading: examLoading } = useQuery(GET_EXAM, {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
    variables: {
      id: state.data,
    },
  });

  const [createAnswer] = useMutation(CREATE_ANSWER);
  const [assignAnswerToQuestion] = useMutation(ASSIGN_ANSWER_TO_QUESTION);

  if (examLoading) {
    return <div>Loading...</div>;
  }
  const handleSave = async (idValue: any) => {
    console.log("idValue", idValue);
    const newAnswer = await createAnswer({
      variables: {
        questionId: idValue,
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
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "semi-bold",
                        }}
                      >
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
                          style={{ width: "100%" }}
                          onChange={(e: any) => {
                            setAnswerValue(e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
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
                <Link to="/lab/student-home-page">
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
    </>
  );
}
