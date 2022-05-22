/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions, Grid } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { LIST_EXAM } from "../graphql/queries/exam";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function StudentExamList(loggedInUserId: any): JSX.Element {
  const { data: examList, loading: examLoading } = useQuery(LIST_EXAM, {
    fetchPolicy: "cache-first",
    errorPolicy: "ignore",
  });
  if (examLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <>
        <Grid style={{ minWidth: 275, margin: 12 }}>
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
            {examList?.examList
              ?.filter((u: any) => u.status === true)
              .map((exam: any) => (
                <Grid item xs={12} key={exam.id} style={{ display: "flex" }}>
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
                        {exam.title}
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
                      {exam.isEnded === false && (
                        <Link
                          to="/lab/student-exam"
                          state={{
                            data: {
                              examId: exam.id,
                              studentId: loggedInUserId.loggedInUserId,
                            },
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{ background: "orange", color: "#fff" }}
                          >
                            Take Exam
                          </Button>
                        </Link>
                      )}
                      {exam.isEnded === true && (
                        <Typography variant="body2" component="h6">
                          Finished
                        </Typography>
                      )}
                    </CardActions>
                  </Grid>
                </Grid>
              ))}
            {/* Listeleme Kısmı Bitti */}
          </Card>
        </Grid>
      </>
    </>
  );
}
