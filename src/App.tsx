import { FeedbackForm } from "@components/FeedbackForm/FeedbackForm";

function App() {
  return (
    <div className="h-screen flex items-center text-white bg-primary-100">
      <main className="max-w-md mx-auto px-5 py-10">
        <FeedbackForm />
      </main>
    </div>
  );
}

export default App;
