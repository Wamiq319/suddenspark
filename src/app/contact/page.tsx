import { Metadata } from "next";
import { InputField, Button } from "@/components";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Us – Sudden Spark Events",
  description:
    "Get in touch with the Sudden Spark Events team to ask questions, partner with us, or submit ideas.",
};

export default function ContactPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FiMail className="text-2xl text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re planning an event, want to partner, or just have
            a question — we&apos;d love to hear from you. Let&apos;s create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Let&apos;s Connect
            </h3>

            <div className="group hover:bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    hello@suddensparkevents.com
                  </p>
                  <p className="text-xs text-gray-500">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover:bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiPhone className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-xs text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div className="group hover:bg-white hover:shadow-lg transition-all duration-300 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Our Location
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    New York, NY (Remote Team)
                  </p>
                  <p className="text-xs text-gray-500">Serving nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a message
                </h3>
                <p className="text-gray-600">
                  Tell us about your project or inquiry
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                      Your Name
                    </label>
                    <InputField
                      name="name"
                      placeholder="Enter your full name"
                      required
                      color="gold"
                      outline
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                      Your Email
                    </label>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      color="gold"
                      outline
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Subject
                  </label>
                  <InputField
                    name="subject"
                    placeholder="What's this about?"
                    required
                    color="gold"
                    outline
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 group-hover:text-amber-600 transition-colors">
                    Your Message
                  </label>
                  <InputField
                    name="message"
                    textarea
                    placeholder="Tell us more about your project, event, or inquiry..."
                    rows={5}
                    required
                    color="gold"
                    outline
                  />
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    color="amber"
                    outline
                    size="lg"
                    className="group w-full md:w-auto"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Why Choose Sudden Spark Events?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating unforgettable experiences with attention
              to detail, innovative concepts, and seamless execution. Let&apos;s
              bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
