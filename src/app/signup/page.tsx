"use client";
import CustomInput from "@/components/auth/Input/Input";
import { Box, Button, Checkbox } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormType, SignupSchema } from "@/lib/auth/schema";
import { createUser } from ".";

const Signup = () => {
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const methods = useForm<SignupFormType | SignupFormType>({
    resolver: zodResolver(SignupSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const createAccount: SubmitHandler<SignupFormType> = async (data) => {
    const user = await createUser(data);
  };

  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          mb: "1erm",
          height: "100%",
          bgcolor: "#F6F9FC",
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
              mb: "1rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: "1.6rem",
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
              Create Your Account
            </Box>
            <Box sx={{ width: "100%", textAlign: "center", fontSize: ".9rem" }}>
              Please fill all fields to continue
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(createAccount)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
                  <Box>
                    <CustomInput
                      type="text"
                      label="FirstName"
                      placeholder="FirstName"
                      name="firstName"
                      errors={errors}
                    />
                  </Box>
                  <Box>
                    <CustomInput
                      type="text"
                      label="LastName"
                      placeholder="LastName"
                      name="lastName"
                      errors={errors}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <CustomInput
                    type="email"
                    label="Email"
                    placeholder="Email"
                    name="email"
                    errors={errors}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <CustomInput
                    type="password"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    errors={errors}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <CustomInput
                    type="password"
                    label="ConfirmPassword"
                    placeholder="ConfirmPassword"
                    name="confirmPassword"
                    errors={errors}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Box sx={{ fontWeight: "thin", fontSize: ".9rem" }}>
                      <Checkbox
                        checked={isDisable}
                        onChange={(e) => setIsDisable(e.target.checked)}
                      />
                      By signing up, you agree to
                    </Box>
                    <Link
                      href={"/#"}
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        fontSize: ".9rem",
                      }}
                    >
                      Terms & Plicies
                    </Link>
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "100%",
                      padding: "10px",
                      textTransform: "none",
                      bgcolor: "#D23F57", //  D23F57
                      ":hover": {
                        bgcolor: "#DC3045", // D23F57
                      },
                    }}
                    disabled={isDisable ? false : true}
                  >
                    Create Account
                  </Button>
                </Box>
              </form>
            </FormProvider>
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
                href={"/login"}
                style={{ textDecoration: "underline", fontSize: ".9rem" }}
              >
                Login
              </Link>
            </Box>
          </Box>
        </Box>
        <Box>{/* Reset Password Options */}</Box>
      </Box>
    </Box>
  );
};

export default Signup;
