export default function Contact() {
  return (
    <div className="p-20">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <form className="space-y-5 max-w-xl">

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          placeholder="Message"
          className="w-full border p-4 rounded-xl h-40"
        />

        <button className="bg-blue-700 text-white px-8 py-4 rounded-xl">
          Submit
        </button>

      </form>

    </div>
  )
}