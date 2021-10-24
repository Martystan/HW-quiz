
import './App.css';
import QuizContainer from './containers/QuizContainer';

function App() {
  return (
    <body id = "app-body">
    <header id="app-header">
      <h1 id = "quiz-in-header">Quiz</h1>
    </header>
    <main id = "container-main">
    <QuizContainer/>
    </main>
    </body>
  );
}

export default App;
