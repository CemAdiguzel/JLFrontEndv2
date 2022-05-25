/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";
import Card from "@material-ui/core/Card";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { GET_EXAM } from "../graphql/queries/exam";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

/* eslint-disable react/prop-types */
export default function ExamByQuestionStudentList(): JSX.Element {
  const location = useLocation();
  const state = location.state as any;
  console.log("props", state.data);

  const { data, loading } = useQuery(GET_EXAM, {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
    variables: {
      id: state.data.examId,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <>
      <Grid style={{ width: "100%", margin: 12 }}>
        <Card
          variant="outlined"
          style={{
            height: 500,
            width: "100%",
            border: "1px solid orange",
            overflow: "scroll",
          }}
        >
          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid
              item
              xs={8}
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
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid
                    item
                    xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="body2"
                      component="h6"
                      style={{
                        fontWeight: "bold",
                        color: "orange",
                      }}
                    >
                      Soru:
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="body2"
                      component="h6"
                      style={{
                        fontWeight: "bold",
                        color: "orange",
                      }}
                    >
                      Doğru Cevap
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography
                      variant="body2"
                      component="h6"
                      style={{
                        fontWeight: "bold",
                        color: "orange",
                      }}
                    >
                      Girilen Cevap
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
          {/* Burası genel listeleme kısmı. Tüm Sınavların sadece title ları yazıyor */}
          {data?.getExam?.questions.map((question: any) => (
            <Grid item xs={12} key={question.id} style={{ display: "flex" }}>
              <Grid
                item
                xs={8}
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
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Grid
                      item
                      xs={4}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
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
                      xs={4}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "semi-bold",
                        }}
                      >
                        {question.answer}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        variant="body2"
                        component="h6"
                        style={{
                          fontWeight: "semi-bold",
                        }}
                      >
                        <>
                          {question?.answers?.find(
                            (a: any) => a.userId === state.data.userId
                          )?.answer || "No Answer"}
                        </>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  padding: 12,
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <CardActions>
                  <Button
                    variant="contained"
                    style={{ background: "orange", color: "#fff" }}
                  >
                    Grade
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "end",
              margin: 12,
              padding: 12,
            }}
          >
            <Grid item>
              <Link
                to="/lab/exam-by-student-list"
                state={{ data: state.data.examId }}
              >
                <Button
                  variant="contained"
                  style={{ background: "orange", color: "#fff" }}
                >
                  Back{" "}
                </Button>
              </Link>
            </Grid>
          </Grid>
          {/* Listeleme Kısmı Bitti */}
        </Card>
      </Grid>
    </>
  );
}
