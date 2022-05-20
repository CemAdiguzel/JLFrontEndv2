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
  CREATE_ASSIGNMENT,
  DELETE_ASSIGNMENT,
  UPDATE_ASSIGNMENT,
} from "../graphql/mutations/assignment";
import { LIST_ASSIGNMENT } from "../graphql/queries/assignment";
import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function AssignmentList(): JSX.Element {
  // Exam listeleme ve ekleme işlemleri
  const [open, setOpen] = useState(false);
  const [addOpener, setAddOpener] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [assignedToValue, setAssignedToValue] = useState("");
  const [resubmissionValue, setResubmissionValue] = useState("");
  const [resubmissionDateValue, setResubmissionDateValue] = useState("");
  const [gradeScaleValue, setGradeScaleValue] = useState("");

  const [createAssignment] = useMutation(CREATE_ASSIGNMENT);
  const [deleteAssignment] = useMutation(DELETE_ASSIGNMENT);
  const [updateAssignment] = useMutation(UPDATE_ASSIGNMENT);

  const {
    data: assignmentList,
    loading: assignmentLoading,
    refetch,
  } = useQuery(LIST_ASSIGNMENT, {
    fetchPolicy: "cache-first",
    errorPolicy: "ignore",
  });
  if (assignmentLoading) {
    return <div>Loading...</div>;
  }

  // Bu fonksiyonla exam ekleyebiliyoruz.
  const handleSubmit = async (): Promise<any> => {
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
  const handleDeleteAssignment = async (deletedId: any) => {
    await deleteAssignment({
      variables: {
        id: deletedId,
      },
    });
    refetch();
  };
  // Bu fonksiyonla herhangi bir exami güncelleyebiliyoruz
  const handleUpdateAssignment = async (updatedId: any) => {
    await updateAssignment({
      variables: {
        id: updatedId,
        status: true,
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
          {assignmentList?.assignmentList?.map((assignment: any) => (
            <Grid item xs={12} key={assignment.id} style={{ display: "flex" }}>
              <Grid
                item
                xs={8}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  padding: 12,
                }}
              >
                <Link
                  to="/lab/assignment-question-list"
                  state={{ data: assignment.id }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      component="h6"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {assignment.title}
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
                      handleUpdateAssignment(assignment?.id);
                    }}
                  >
                    Publish
                  </Button>
                  <Button
                    variant="contained"
                    style={{ background: "orange", color: "#fff" }}
                    onClick={() => {
                      handleDeleteAssignment(assignment?.id);
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
                  Add New Assignment
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
            onClick={handleDeleteAssignment}
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
                  type="text"
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
                  placeholder="Enter the resubmission date"
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
                  placeholder="Enter Date"
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
