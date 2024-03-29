"use client";

import InputOTPForm from "@/components/InputOTPForm";
import { Button } from "../../../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
const LoginEmail = () => {
  const [isOtp, setOtp] = useState(false);
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden lg:block bg-black"></div>
      <div className="flex items-center justify-center py-12">
        {!isOtp && (
          <div className="mx-auto grid w-[360px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button
                onClick={() => setOtp(true)}
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </div>
          </div>
        )}
        {isOtp && (
          <>
            <InputOTPForm setOtp={() => setOtp(false)} />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginEmail;
