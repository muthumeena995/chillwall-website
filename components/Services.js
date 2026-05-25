export default function Services() {
  return (
    <section id="services" className="py-20 px-10">

      <h2 className="text-5xl font-bold text-center mb-14">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Cold Rooms
          </h3>

          <p>
            Industrial cold room setup for food storage.
          </p>
        </div>

        <div className="shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Refrigeration
          </h3>

          <p>
            Energy efficient refrigeration systems.
          </p>
        </div>

        <div className="shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Turnkey Projects
          </h3>

          <p>
            End-to-end industrial infrastructure projects.
          </p>
        </div>

      </div>

    </section>
  )
}