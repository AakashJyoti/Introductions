const Contact = () => {
  return (
    <div className="w-full flex items-center justify-center bg-blue-200 flex-col gap-10 h-screen ">
      <div className="flex gap-4 cursor-default">
        <div className="bg-blue-50 p-4 w-80 rounded border-2 border-slate-400 shadow-md shadow-blue-300 hover:bg-white">
          <p className="text-xl font-semibold text-blue-900">Phone</p>
          <p>+91 99999 99999</p>
        </div>
        <div className="bg-blue-50 p-4 w-80 rounded border-2 border-slate-400 shadow-md shadow-blue-300 hover:bg-white">
          <p className="text-xl font-semibold text-blue-900">Email</p>
          <p>DummyEmail@gmail.com</p>
        </div>
        <div className="bg-blue-50 p-4 w-80 rounded border-2 border-slate-400 shadow-md shadow-blue-300 hover:bg-white">
          <p className="text-xl font-semibold text-blue-900">Address</p>
          <p>Dummy Address</p>
        </div>
      </div>
      <div className="bg-white py-8 px-10 rounded-lg gap-4 flex flex-col  shadow-lg shadow-blue-300">
        <p className="font-bold text-3xl">Get in Touch</p>
        <form action="" className="flex flex-col gap-4">
          <div className="flex w-3/4 gap-4">
            <div className="border rounded py-2 px-4 border-blue-300 shadow-sm shadow-blue-300">
              <input
                type="text"
                placeholder="Enter Name"
                className="focus:outline-none"
                required={true}
              />
            </div>
            <div className="border rounded py-2 px-4 border-blue-300 shadow-sm shadow-blue-300">
              <input
                type="email"
                placeholder="Enter Email"
                required={true}
                className="focus:outline-none"
              />
            </div>
            <div className="border rounded py-2 px-4 border-blue-300 shadow-sm shadow-blue-300">
              <input
                type="number"
                placeholder="Enter Phone Number"
                required={true}
                className="focus:outline-none"
              />
            </div>
          </div>
          <div className="border rounded py-2 px-4 border-blue-300 shadow-sm shadow-blue-300">
            <textarea
              className="focus:outline-none w-full resize-none overflow-y-auto"
              name="message"
              cols="30"
              rows="10"
              required={true}
              placeholder="Enter your message"
            />
          </div>
          <button
            className="bg-blue-500 py-3 rounded-xl font-semibold text-white mt-4 shadow-md shadow-blue-300 hover:bg-blue-400 "
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
