"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "@mui/icons-material";
import { Button, TextField, Typography, Grid, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "", error: false });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setIsSubmitting(false);
      setModalContent({
        title: "Validation Error",
        message: "Please fill in all required fields.",
        error: true,
      });
      setModalOpen(true);
      return;
    }

    try {
      await emailjs.send("SERVICE_1234", "template_1234", formData, "abcdokokytr");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setModalContent({
        title: "Message Sent!",
        message: "We'll get back to you as soon as possible.",
        error: false,
      });
      setModalOpen(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitting(false);
      setModalContent({
        title: "Error",
        message: "There was an error sending your message. Please try again.",
        error: true,
      });
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#ffffff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginTop: "2rem",
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: "1.5rem", color: "#333" }}>
            Send Us a Message
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#555" } }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#555" } }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Phone Number"
                name="phone"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#555" } }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                label="Subject"
                name="subject"
                fullWidth
                required
                value={formData.subject}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#555" } }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Your Message"
                name="message"
                multiline
                rows={6}
                fullWidth
                required
                value={formData.message}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#555" } }}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: "6px",
                }}
                endIcon={!isSubmitting && <Send />}
              >
                {isSubmitting ? <CircularProgress size={24} style={{ color: "#fff" }} /> : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </motion.div>

      {/* Custom Modal */}
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle style={{ color: modalContent.error ? "red" : "green" }}>
          {modalContent.title}
        </DialogTitle>
        <DialogContent>
          <Typography style={{ color: "#555" }}>
            {modalContent.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} style={{ color: "#1976d2", fontWeight: "bold" }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactUsForm;
