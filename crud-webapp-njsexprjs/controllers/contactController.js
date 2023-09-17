const asyncHandler = require('express-async-handler')

//desc get all contacts
//route GET /api/contacts
//access public 
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message : "get all contacts"})
})

//desc get all contacts
//route GET /api/contacts
//access public 
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message : `get a contact for ${req.params.id}`})
})

//desc create new contact
//route POST /api/contacts
//access public 
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error("all fields are mandatory") 
  }
  res.status(201).json({ message : "create new contact"})
})

//desc update a contact
//route POST /api/contacts
//access public 
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message : `update contact for ${req.params.id}`})
})

//desc delete a contact
//route DELETE /api/contacts:id
//access public 
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message : `delete contact for ${req.params.id}`})
})




module.exports = 
{ 
  getAllContacts,
  createContact,
  getContact, 
  updateContact, 
  deleteContact
 }