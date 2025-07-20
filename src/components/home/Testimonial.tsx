"use client";

export const Testimonial = () => {
  return (
    <section className="bg-base-100 text-base-content py-12 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body items-center">
            <p className="text-lg mb-4">
              "This platform helped me find amazing local events and connect
              with my community!"
            </p>
            <div className="avatar mb-2">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/Logo.png" alt="User avatar" />
              </div>
            </div>
            <h3 className="font-bold text-base">Jane Doe</h3>
            <span className="text-sm text-base-content/60">
              Community Member
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
