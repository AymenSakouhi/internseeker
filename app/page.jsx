import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">
            Get your internship fully remote.
          </h1>
          <p className="max-w-5xl text-justify">
            Hi there, this is a start up that I funded in united kingdom to help
            you as an IT enthusiast or graduate to get your first job in the
            tech industry.
          </p>
          <p>
            My company{" "}
            <span className="font-bold text-green-700">Sakouhi Co</span> is
            registered internationally and is looking for interns at the moment,
            so if you are interested in getting your internship and kicking
            start a small SaaS project of your own.
          </p>
          <p>
            Please fill the form below and I will get back to you as soon as
            possible.
          </p>
          <div className="border-xl mt-2 w-full bg-slate-200 rounded">
            <ContactForm />
          </div>
          <footer>
            <p className="text-center text-xs mt-4">
              &copy; 2023 Sakouhi Co. All rights reserved.
            </p>
            <p className="text-center text-xs mt-4">
              You may contact me via{" "}
              <a
                href="mailto:aymenmarketer@gmail.com"
                className="text-green-700"
              >
                Email
              </a>{" "}
              or reach me out on my X profile at{" "}
              <a href="https://twitter.com/RodnDjok" className="text-green-700">
                Aymen Sakouhi
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
