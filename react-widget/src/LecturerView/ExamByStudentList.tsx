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
export default function ExamByStudentList(): JSX.Element {
  const location = useLocation();
  const state = location.state as any;
  console.log("props", state.data);

  const { data, loading } = useQuery(GET_EXAM, {
    fetchPolicy: "network-only",
    errorPolicy: "ignore",
    variables: {
      id: state.data,
    },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
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
          {/* Burası genel listeleme kısmı. Tüm Sınavların sadece title ları yazıyor */}
          {data?.getExam?.studentExamProgressions.map((student: any) => (
            <Grid item xs={12} key={student.id} style={{ display: "flex" }}>
              <Grid
                item
                xs={8}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  padding: 12,
                }}
              >
                <CardContent>
                  <Typography
                    variant="body2"
                    component="h6"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {student.user.fullName}
                  </Typography>
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
                  <Link
                    to="/lab/exam-by-question-student-list"
                    state={{
                      data: {
                        examId: state.data,
                        userId: student.user.id,
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{ background: "orange", color: "#fff" }}
                    >
                      Grade
                    </Button>
                  </Link>
                </CardActions>
              </Grid>
            </Grid>
          ))}
          {/* Listeleme Kısmı Bitti */}
        </Card>
      </Grid>
    </>
  );
}
