"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, DollarSign, Building, MessageSquare } from "lucide-react";

const inquiryTypes = [
  {
    id: "buying",
    label: "Buying Property",
    icon: Home,
    color: "bg-amber-100 text-amber-800",
  },
  {
    id: "selling",
    label: "Selling Property",
    icon: DollarSign,
    color: "bg-green-100 text-green-800",
  },
  {
    id: "investment",
    label: "Investment Consulting",
    icon: Building,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "general",
    label: "General Inquiry",
    icon: MessageSquare,
    color: "bg-purple-100 text-purple-800",
  },
];

export default function ContactForms() {
  const [selectedInquiry, setSelectedInquiry] = useState("buying");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { type: selectedInquiry, ...formData });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose your inquiry type and let us provide you with personalized
            assistance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Inquiry Type Selection */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {inquiryTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedInquiry(type.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedInquiry === type.id
                      ? "border-amber-500 bg-amber-50"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-3 ${
                      selectedInquiry === type.id
                        ? "text-amber-600"
                        : "text-neutral-400"
                    }`}
                  />
                  <p
                    className={`font-medium text-sm ${
                      selectedInquiry === type.id
                        ? "text-amber-900"
                        : "text-neutral-600"
                    }`}
                  >
                    {type.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="border-neutral-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge
                  className={
                    inquiryTypes.find((t) => t.id === selectedInquiry)?.color
                  }
                >
                  {inquiryTypes.find((t) => t.id === selectedInquiry)?.label}
                </Badge>
              </div>
              <CardTitle className="font-serif text-2xl font-light">
                Tell Us About Your Needs
              </CardTitle>
              <CardDescription>
                Provide your details and we'll connect you with the right
                specialist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                      className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                      className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="(813) 648-0377"
                      className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  {selectedInquiry === "buying" && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Budget Range
                      </label>
                      <Input
                        type="text"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        placeholder="$1M - $5M"
                        className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  )}
                  {selectedInquiry === "selling" && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Property Value
                      </label>
                      <Input
                        type="text"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        placeholder="Estimated value"
                        className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  )}
                  {selectedInquiry === "investment" && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Investment Amount
                      </label>
                      <Input
                        type="text"
                        value={formData.budget}
                        onChange={(e) =>
                          handleInputChange("budget", e.target.value)
                        }
                        placeholder="Investment budget"
                        className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Timeline
                  </label>
                  <Input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    placeholder="When are you looking to proceed?"
                    className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    className="border-neutral-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
