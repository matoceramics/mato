// app/routes/index.tsx
import Header from '~/components/Header';
import Body from '~/components/Body';
import Footer from '~/components/Footer';

export default function IndexPage() {
  return (
    <div className="bg-white py-16 sm:py-10">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Body />

      {/* Footer */}
      <Footer />
    </div>
  );
}
