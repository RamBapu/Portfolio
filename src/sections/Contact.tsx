"use client";

import ArrowRightUpIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ISubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rambapu270197@gmail.com",
    href: "mailto@rambapu270197@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "9500274460",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "#",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<ISubmitStatus>({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(false);
    setSubmitStatus({ type: null, message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Email sent succesfully! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Error sending mail. Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let's create something amazing together
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring your next project to life? Let's connect and
                  discover how I can help you achieve your goals
                </p>
              </div>

              <div>
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowRightUpIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <SectionHeader
            title="Contact Me"
            heading="Get in touch"
            description="Open to opportunities where I can contribute, grow, and build impactful products"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl outline outline-2 outline-white/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  required
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Hey how's it going?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all resize-none"
                />
              </div>

              <button
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                type="submit"
                disabled={isLoading}>
                <span className="font-semibold">
                  {isLoading ? (
                    <>Sending</>
                  ) : (
                    <>
                      Send Mail
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </span>
              </button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-700" : "bg-red-500/10  border border-red-500/20 text-red-400"}`}>
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
