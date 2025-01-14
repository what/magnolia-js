import { Head, Link } from "blitz"

const Sponsors = () => (
  <>
    <Head>
      <title>Sponsors | MagnoliaJS</title>
    </Head>
    <h1 className="text-center text-3xl mb-4">Sponsors</h1>
    <p className="text-center">Come back soon to check out our 2022 sponsors!</p>
    <p className="text-center">
      Interested in sponsoring?{" "}
      <Link href="/sponsors/sponsorship-info">
        <a className="text-pink-600 underline">Let us know</a>
      </Link>
      !
    </p>
    <p className="text-center">
      You can also check out our{" "}
      <Link href="/sponsors/past-sponsors">
        <a className="text-pink-600 underline">past sponsors</a>
      </Link>
      !
    </p>
  </>
)

Sponsors.suppressFirstRenderFlicker = true
export default Sponsors
