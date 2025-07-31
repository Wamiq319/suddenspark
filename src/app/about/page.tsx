import { Metadata } from "next";
import { Button } from "@/components";
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiGlobe,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us – Sudden Spark Events",
  description:
    "Sudden Spark Events connects communities through local events, empowering small businesses, creators, and residents to spark meaningful change.",
};

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mb-6">
            <FiStar className="text-3xl text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            About Sudden Spark Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Enhanced Introduction */}
        <div className="mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-8">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              <strong className="text-gray-900">Sudden Spark Events</strong> was
              founded with one simple belief:{" "}
              <span className="text-amber-600 font-semibold">
                real change begins in local communities
              </span>
              . We help small businesses, independent creators, and local
              leaders organize, promote, and grow events that inspire positive
              impact.
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether it&apos;s a pop-up market, a cultural gathering, a
              fundraiser, or a creative showcase, our platform ensures these
              sparks of energy reach the people who matter. We provide tools,
              visibility, and support — with every event reviewed for fairness,
              purpose, and community benefit.
            </p>
          </div>
        </div>

        {/* Enhanced Mission Highlights */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 h-full">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiUsers className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                  Community First
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  Every event is designed to connect people, highlight local
                  talent, and build stronger neighborhoods.
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 h-full">
                <div className="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiTarget className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-amber-900">
                  Purpose-Driven
                </h3>
                <p className="text-amber-800 leading-relaxed">
                  Our approval process ensures submitted events align with
                  values of fairness, creativity, and impact.
                </p>
              </div>
            </div>

            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 h-full">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiHeart className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">
                  Built With Integrity
                </h3>
                <p className="text-purple-800 leading-relaxed">
                  Transparent, inclusive, and always evolving — we&apos;re
                  committed to a platform that serves people, not just traffic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced How It Works */}
        <div className="mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Submit an Event
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Use our simple form to propose your event idea, complete with
                  details and image.
                </p>
              </div>

              <div className="text-center group">
                <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  We Review
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team checks for relevance, safety, and alignment with our
                  community-first values.
                </p>
              </div>

              <div className="text-center group">
                <div className="p-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Get Published
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Once approved, your event appears on our homepage and calendar
                  — ready to inspire action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Vision Statement */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-10 rounded-2xl border border-amber-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FiGlobe className="text-3xl text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              We believe in a world where every small initiative can lead to big
              change — where creativity, purpose, and community are celebrated.
              Sudden Spark is not just about events, it&apos;s about{" "}
              <strong className="text-amber-600">empowerment</strong>.
            </p>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Spark Something?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Host a community event, promote a cause, or launch a local
              movement — we&apos;ll help you make it real.
            </p>
            <Button color="amber" outline size="lg" className="group">
              <span className="flex items-center justify-center gap-2">
                Submit Your Event
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
