"use client";

import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  AlertCircle,
  CheckCircle,
  Code,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import toast from "react-hot-toast";

interface ISubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rambapu270197@gmail.com",
    href: "mailto:rambapu270197@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "9500274460",
    href: "tel:+919500274460",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "https://maps.app.goo.gl/xN4SnhsTL6ai2Rbo9",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GitHub/RamBapu",
    href: "https://github.com/RamBapu",
  },
  // {
  //   icon: Code,
  //   label: "Leetcode",
  //   value: "https://leetcode.com/u/ram_bapu/",
  //   href: "https://leetcode.com/u/ram_bapu/",
  // },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Linkedin/RamBapu",
    href: "https://www.linkedin.com/in/ram-bapu/",
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

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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
      toast.success(
        <div>
          Email sent successfully!
          <br />
          I’ll get back to you soon.
        </div>,
        {
          duration: 3000,
          position: "bottom-center",
          style: {
            background: "#111827",
            color: "#fff",
            fontSize: "14px",
            backdropFilter: "blur(2px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          },
        },
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Error sending mail. Please try again later",
      });
      toast.error(
        <div>
          Error sending mail! <br />
          Please try again later.
        </div>,
        {
          duration: 3000,
          position: "bottom-center",
          style: {
            background: "#111827",
            color: "#fff",
            fontSize: "14px",
            backdropFilter: "blur(2px)",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div>
            <SectionHeader
              title="Contact Me"
              heading="Get in touch"
              description="Open to opportunities where I can contribute, grow, and build impactful products"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-8 overflow-hidden">
            <div className="relative z-0 p-6 md:p-8 rounded-xl inset-0 outline outline-2 -outline-offset-2 outline-white/20 ">
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}></div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm lg:text-base text-white/50">
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
                    className="px-4 py-3 text-black rounded-xl border-[3px] border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm lg:text-base text-white/50">
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
                    className="px-4 py-3 text-black rounded-xl border-[3px] border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm lg:text-base text-white/50">
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
                    className="px-4 py-3 text-black rounded-xl border-[3px] border-[#6ee7b7] focus:border-[#38bdf8] focus:ring-[#38bdf8] outline-none transition-all resize-none"
                  />
                </div>

                <div>
                  <button
                    className="text-black bg-gradient-to-r from-emerald-300 to-sky-400 items-center px-6 h-12 rounded-xl gap-2 w-full border border-gray-900"
                    type="submit"
                    disabled={isLoading}>
                    <span className="font-semibold">
                      {isLoading ? (
                        <>Sending</>
                      ) : (
                        <div className="flex justify-center gap-2 items-center">
                          <Send className="w-5 h-5" />
                          Send Mail
                        </div>
                      )}
                    </span>
                  </button>
                </div>

                {/* {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-700" : "bg-red-500/10  border border-red-500/20 text-red-400"}`}>
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )} */}
              </form>
            </div>

            <div className="space-y-4">
              <div className="relative p-4 md:p-8 rounded-xl inset-0 outline outline-2 -outline-offset-2 outline-white/20 h-full flex flex-col gap-2">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}></div>
                {contactInfo.map((item) => (
                  <Link
                    href={item.href}
                    key={item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-sky-400/10">
                    <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-[#38bdf8]/10">
                      <item.icon className="w-5 h-5 text-[#38bdf8]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm lg:text-base text-white/50 font-serif">
                        {item.label}
                      </div>
                      <div className="text-base lg:text-lg">{item.value}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
