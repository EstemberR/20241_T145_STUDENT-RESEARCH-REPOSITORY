const express = require('express')
const instructorRoutes = express.Router();
//view of student research submission 
instructorRoutes.get('/submissions', (req, res) =>{
    //logic to show the student research submission 
  });
  
  //view the specific submission
  instructorRoutes.get('/submissions/researchId', (req, res) =>{
    //logic to show the specific student research submission 
  });
  
  //provide feedback or suggestions to the research submission
  instructorRoutes.get('/submissions/:researchId/feedback', (req, res) => {
    //Logic to provide feedbacks for a research submission
  });
  
  //View feedback information
  instructorRoutes.get('/submissions/:researchId/feedback', (req, res) => {
    //Logic to view the all the feedbacks for a research submission
  });
  
  //Reject research submission
  instructorRoutes.put('/submissions/:researchId/reject', (req, res) => {
    //logic to reject student submission
  });
  
  //View approved research submission
  instructorRoutes.get('/submissions/:researchId/approved', (req, res) => {
    //logic to view approved student submission
  });
  
  //-----PROFILE-----
  //view the user's profile information
  instructorRoutes.get('/profile', (req, res) => {
  });
  
  //edit the user's profile information
  instructorRoutes.put('/profile', (req, res) => {
  });
  
  //add or change the user's profile picture
  instructorRoutes.put('/profile/picture', (req, res) => {
  });
  
  module.exports = instructorRoutes;