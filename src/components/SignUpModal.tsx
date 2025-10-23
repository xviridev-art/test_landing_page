import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignUpModal = ({ open, onOpenChange }: SignUpModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onOpenChange(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <div className="p-8">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 text-[#fffefe99] hover:text-white transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <DialogHeader className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <img
                className="w-12 h-12 object-cover"
                alt="RoCart"
                src="https://c.animaapp.com/mh2vw4qcAtJtav/img/rooc-1.png"
              />
            </div>
            <DialogTitle>Join RoCart Affiliates</DialogTitle>
            <DialogDescription>
              Start earning from your Roblox content today. Create your account
              and get instant access to your creator dashboard.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#fffefeb2] mb-2 [font-family:'Poppins',Helvetica]"
              >
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#fffefeb2] mb-2 [font-family:'Poppins',Helvetica]"
              >
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-[#fffefeb2] mb-2 [font-family:'Poppins',Helvetica]"
              >
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#fffefeb2] mb-2 [font-family:'Poppins',Helvetica]"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 mt-6 rounded-xl bg-[linear-gradient(90deg,rgba(86,255,70,1)_0%,rgba(0,67,8,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(90,250,16,1)_0%,rgba(41,252,21,1)_100%)] shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] [font-family:'Poppins',Helvetica] font-semibold text-white text-base"
            >
              Create Account
            </Button>

            <p className="text-center text-xs text-[#fffefe80] mt-4 [font-family:'Poppins',Helvetica]">
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
