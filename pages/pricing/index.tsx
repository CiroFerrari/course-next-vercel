import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h2 className="title">
        Ir a
        <Link href="/"> Home</Link>
      </h2>
    </>
  )
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}