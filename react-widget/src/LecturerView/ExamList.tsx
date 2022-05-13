/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from "@material-ui/core";
import {
  CREATE_EXAM,
  DELETE_EXAM,
  UPDATE_EXAM,
} from "../graphql/mutations/exam";
import { LIST_EXAM } from "../graphql/queries/exam";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ExamList(): JSX.Element {
  // Exam listeleme ve ekleme işlemleri
  const [open, setOpen] = useState(false);
  const [addOpener, setAddOpener] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [assignedToValue, setAssignedToValue] = useState("");
  const [resubmissionValue, setResubmissionValue] = useState("");
  const [resubmissionDateValue, setResubmissionDateValue] = useState("");
  const [gradeScaleValue, setGradeScaleValue] = useState("");
  const [asdasd, setAsdasd] = useState([]);

  const [createExam] = useMutation(CREATE_EXAM);
  const [deleteExam] = useMutation(DELETE_EXAM);
  const [updateExam] = useMutation(UPDATE_EXAM);

  const {
    data: examList,
    loading: examLoading,
    refetch,
  } = useQuery(LIST_EXAM, {
    fetchPolicy: "cache-first",
    errorPolicy: "ignore",
  });
  if (examLoading) {
    return <div>Loading...</div>;
  }

  // Bu fonksiyonla exam ekleyebiliyoruz.
  const handleSubmit = async (): Promise<any> => {
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
  const handleDeleteExam = async (deletedId: any) => {
    console.log("delete");
    await deleteExam({
      variables: {
        id: deletedId,
      },
    });
    refetch();
  };
  // Bu fonksiyonla herhangi bir exami güncelleyebiliyoruz
  const handleUpdateExam = async (updatedId: any) => {
    await updateExam({
      variables: {
        id: updatedId,
        status: true,
      },
    });
    console.log("update", examList.examList);
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
  return (
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
          {examList?.examList?.map((exam: any) => (
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
                <Link to="/lab/question-list" state={{ data: exam.id }}>
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
                </Link>
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
                    onClick={() => {
                      handleUpdateExam(exam?.id);
                    }}
                  >
                    Publish
                  </Button>
                  <Button
                    variant="contained"
                    style={{ background: "orange", color: "#fff" }}
                    onClick={() => {
                      handleDeleteExam(exam?.id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          ))}
          {/* Listeleme Kısmı Bitti */}
          <Grid container item>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 12,
                margin: 12,
                width: "100%",
                border: "1px dotted orange",
              }}
              onClick={handleAddOpen}
            >
              <Button>
                <Typography style={{ fontSize: 14 }} gutterBottom>
                  Add New Exam
                </Typography>
              </Button>
            </CardContent>
          </Grid>
        </Card>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        style={{
          borderRadius: 10,
          minHeight: 250,
        }}
      >
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleDeleteExam}
            style={{ background: "orange", color: "#fff" }}
          >
            Delete
          </Button>
          <Button
            onClick={handleClose}
            style={{ background: "orange", color: "#fff" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/** Add Exam Dialog */}
      <Dialog
        open={addOpener}
        onClose={handleAddCloser}
        style={{
          borderRadius: 10,
          minHeight: 250,
        }}
      >
        <Grid container item xs={12}>
          <DialogContent style={{ width: 800 }}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Title:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the Title"
                  variant="outlined"
                  type="text"
                  value={titleValue}
                  onChange={(e) => setTitleValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Description:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Description Value"
                  variant="outlined"
                  type="text"
                  value={descriptionValue}
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Type:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Select the Type"
                  variant="outlined"
                  type="text"
                  value={typeValue}
                  onChange={(e) => setTypeValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Assigned To:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Select the assigned to"
                  variant="outlined"
                  type="date"
                  value={assignedToValue}
                  onChange={(e) => setAssignedToValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Due Date:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the Time"
                  variant="outlined"
                  type="time"
                  value={timeValue}
                  onChange={(e) => setTimeValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Resubmissions:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the number of resubmissions"
                  variant="outlined"
                  type="number"
                  value={resubmissionValue}
                  onChange={(e) => setResubmissionValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Resubmission Time:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the number of resubmissions"
                  variant="outlined"
                  type="date"
                  value={resubmissionDateValue}
                  onChange={(e) => setResubmissionDateValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Publish Date:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the Grade Scale"
                  variant="outlined"
                  type="date"
                  value={dateValue}
                  onChange={(e) => setDateValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Grid item xs={4}>
                <Typography variant="body2" gutterBottom>
                  Grade Scale:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Enter the Grade Scale"
                  variant="outlined"
                  type="number"
                  value={gradeScaleValue}
                  onChange={(e) => setGradeScaleValue(e.target.value)}
                />
              </Grid>
            </Grid>
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
        </Grid>
      </Dialog>
    </>
  );
}
