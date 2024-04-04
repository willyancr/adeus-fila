import AttendeeList from './components/AttendeeList';
import Header from './components/Header';

function App() {
  return (
    <div className="max-w-7xl px-8 py-5 mx-auto flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}

export default App;
