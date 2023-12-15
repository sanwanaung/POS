"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import CustomInput from "@/components/auth/Input/Input";
import Link from "next/link";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInFormType,
  SignInSchema,
  SignupFormType,
} from "@/lib/auth/schema";

const Login = () => {
  const methods = useForm<SignInFormType | SignupFormType>({
    resolver: zodResolver(SignInSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitData: SubmitHandler<SignInFormType> = (data) => {
    console.log("data from login: ", data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "#F6F9FC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        mb: "1erm",
      }}
    >
      <Box
        sx={{
          width: "540px",
          minHeight: "100vh",
          bgcolor: "#FFFFFF",
          boxShadow: "1px 0px 30px 5px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 3.6rem",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: "1.6rem",
              mt: "1rem",
            }}
          >
            LOGO
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              mt: "12px",
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            Welcome To Ecommerce
          </Box>
          <Box sx={{ width: "100%", textAlign: "center", fontSize: ".9rem" }}>
            Login with email & password
          </Box>
        </Box>
        <Box sx={{ width: "100%", mt: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "1rem",
            }}
          >
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(submitData)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: "1rem",
                }}
              >
                <Box sx={{ wdith: "100%", mb: "8px" }}>
                  <CustomInput
                    type="email"
                    label="Email"
                    placeholder="Email"
                    name="email"
                    errors={errors}
                  />
                </Box>
                <Box sx={{ wdith: "100%", mb: "8px" }}>
                  <CustomInput
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    errors={errors}
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      padding: "10px",
                      textTransform: "none",
                      bgcolor: "#D23F57", //  D23F57
                      ":hover": {
                        bgcolor: "#DC3045", // DC3045
                      },
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </FormProvider>
            <Box>
              <Box
                sx={{
                  mt: "1rem",
                  fontSize: ".9rem",
                  fontWeight: "thin",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                Already have an account?
                <Link
                  href={"/signup"}
                  style={{ textDecoration: "underline", fontSize: ".9rem" }}
                >
                  Signup
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>{/* Reset Password Options */}</Box>
    </Box>
  );
};

export default Login;
