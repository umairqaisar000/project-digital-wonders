import styles from "./SignInModal.module.scss";
import React, { useState } from "react"; // Import useState
import {
  Modal,
  Box,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import ModalImage from "../../assets/images/SigninPic_1.svg";
import CompanyLogo from "../../assets/images/SigninPic_2.svg";
import Image from "next/image";
import { Facebook, Twitter, Email } from "@mui/icons-material";
import Link from "next/link";

const SignInModal = ({ isOpen, onClose, isLogin }: any) => {
  const [showPassword, setShowPassword] = useState(false); // State for showing password

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "796px",
          borderRadius: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              height: "796px",
              borderTopLeftRadius: "32px",
              borderBottomLeftRadius: "32px",
              flexDirection: "column",
              alignItems: "center",
              background: "#3F3D56", // Set the background color here
            }}
          >
            <Image
              src={CompanyLogo}
              alt="Modal Image"
              style={{ width: "309", height: "264", objectFit: "cover" }}
            />
            <Image
              src={ModalImage}
              alt="Modal Image"
              style={{
                width: "617",
                height: "",
                objectFit: "cover",
                marginBottom: "50px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              background: "white",

              borderTopRightRadius: "32px",
              borderBottomRightRadius: "32px",
              paddingInline: "91px",
            }}
          >
            <div className="text-center">
              <h2 style={{ marginBottom: "51px", marginTop: "31px" }}>
                Login / Signup
              </h2>
            </div>

            <form>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              {!isLogin && (
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <Button
                      onClick={handleShowPassword}
                      style={{ minWidth: "auto" }}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  ),
                }}
              />
              {!isLogin && (
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
              {!isLogin && (
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accept Terms & Conditions"
                />
              )}
              {isLogin ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ marginTop: "35px", marginBottom: 1 }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#222",
                      width: "121px",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              ) : (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ marginTop: 1, marginBottom: 1 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: "#222",
                      width: "121px",
                    }}
                  >
                    Signup
                  </Button>
                  <Link href={""}>Already Registered? Login</Link>
                </Box>
              )}

              {isLogin && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ marginTop: "32px", marginBottom: "32px" }}
                >
                  <Link href={""}>Signup now</Link>
                  <Link href={""}>Forget Password</Link>
                </Box>
              )}
            </form>
            <p
              style={{
                textAlign: "center",
                marginBlock: isLogin ? "39px" : "2px",
              }}
            >
              OR
            </p>
            <Box mt={isLogin ? 5 : 3} sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={
                  <Facebook fontSize="small" sx={{ marginRight: 1 }} />
                }
                sx={{
                  height: "59px",
                  marginBottom: isLogin ? "20px" : "10px",
                  borderColor: "#1877F2",
                  color: "white",
                  backgroundColor: "#1877F2",
                  "&:hover": {
                    backgroundColor: "#0e62c7",
                    color: "white",
                  },
                }}
              >
                Sign Up with Facebook
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Twitter fontSize="small" sx={{ marginRight: 1 }} />}
                sx={{
                  marginBottom: isLogin ? "20px" : "10px",
                  height: "59px",
                  borderColor: "#1DA1F2",
                  color: "white",
                  backgroundColor: "#1DA1F2",
                  "&:hover": {
                    backgroundColor: "#0c84d0",
                    color: "white",
                  },
                }}
              >
                Sign Up with Twitter
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Email fontSize="small" sx={{ marginRight: 1 }} />}
                sx={{
                  height: "59px",
                  borderColor: "#DB4437",
                  color: "white",
                  backgroundColor: "#DB4437",
                  "&:hover": {
                    backgroundColor: "#c12516",
                    color: "white",
                  },
                }}
              >
                Sign Up with Email
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default SignInModal;
