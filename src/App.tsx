import  Form  from "./components/form/Form";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-screen bg-stone-200">
      <header>
        <Header />
      </header>

      <main className="flex-1">
        <Form />
      </main>

      <footer>teste</footer>
    </div>
  );
}
