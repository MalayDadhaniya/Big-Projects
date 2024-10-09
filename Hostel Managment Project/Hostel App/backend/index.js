const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentInfoModel = require("./models/studentInfo");
const roomDetailsModel = require("./models/roomDetails");
const rulesDetailsModel = require("./models/rulesDetails");
const lunchDetailsModel = require("./models/lunchDetails");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/userSide")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/studentInfo", (req, res) => {
  studentInfoModel
    .create(req.body)
    .then((studentInfo) => res.json(studentInfo))
    .catch((err) => {
      console.error("Error saving data:", err);
      res.status(500).json(err);
    });
});

app.get("/student-form-edit", (req, res) => {
  studentInfoModel
    .find()
    .then((studentInfos) => res.json(studentInfos))
    .catch((err) => {
      console.error("Error fetching data:", err);
      res.status(500).json(err);
    });
});

app.delete("/student-form-edit/:id", (req, res) => {
  const { id } = req.params;
  studentInfoModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Student deleted successfully" });
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    })
    .catch((err) => {
      console.error("Error deleting student:", err);
      res.status(500).json(err);
    });
});

app.get("/room-details", (req, res) => {
  roomDetailsModel
    .find()
    .then((rooms) => res.json(rooms))
    .catch((err) => {
      console.error("Error fetching room data:", err);
      res.status(500).json(err);
    });
});

app.get("/room-details/:room_no", (req, res) => {
  const { room_no } = req.params;
  roomDetailsModel
    .findOne({ room_no })
    .then((roomDetail) => {
      if (roomDetail) {
        res.json(roomDetail);
      } else {
        res.status(404).json({ message: "Room detail not found" });
      }
    })
    .catch((err) => {
      console.error("Error fetching room detail:", err);
      res.status(500).json(err);
    });
});

app.put("/room-details/:room_no", (req, res) => {
  const { room_no } = req.params;
  const { total_students } = req.body;

  roomDetailsModel
    .findOneAndUpdate(
      { room_no },
      { total_students },
      { new: true, useFindAndModify: false }
    )
    .then((updatedRoomDetail) => {
      if (!updatedRoomDetail) {
        return res.status(404).json({ message: "Room detail not found" });
      }
      res.json(updatedRoomDetail);
    })
    .catch((err) => {
      console.error("Error updating room detail:", err);
      res.status(500).json(err);
    });
});

app.get("/rules-details", (req, res) => {
  rulesDetailsModel
    .find()
    .then((rules) => res.json(rules))
    .catch((err) => {
      console.error("Error fetching rules data:", err);
      res.status(500).json(err);
    });
});

app.post("/rules-details", (req, res) => {
  rulesDetailsModel
    .create(req.body)
    .then((rule) => res.json(rule))
    .catch((err) => {
      console.error("Error saving rule:", err);
      res.status(500).json(err);
    });
});

app.delete("/rules-details/:id", (req, res) => {
  const { id } = req.params;
  rulesDetailsModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Rule deleted successfully" });
      } else {
        res.status(404).json({ message: "Rule not found" });
      }
    })
    .catch((err) => {
      console.error("Error deleting rule:", err);
      res.status(500).json(err);
    });
});

app.get("/lunch-details", (req, res) => {
  lunchDetailsModel
    .find()
    .then((lunchDetails) => res.json(lunchDetails))
    .catch((err) => {
      console.error("Error fetching lunch data:", err);
      res.status(500).json(err);
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
