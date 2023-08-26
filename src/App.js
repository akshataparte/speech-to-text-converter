import './App.css';
import react, { useState } from 'react';
import useClipboard from 'react-use-clipboard';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-IN',
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="big-container">
        <h2>Speech To Text Converter </h2>
        <div className="container">
          {/* in order to copy user has to click on the textarea and then press copy button  */}
          <div
            className="main-content"
            onClick={() => setTextToCopy(transcript)}
          >
            {transcript}
          </div>

          <div className="btn-style">
            <button onClick={setCopied} className="btn">
              {isCopied ? 'Copied' : 'Copy to clipboard'}
            </button>

            <button onClick={startListening} className="btn">
              Start Listening
            </button>
            <button onClick={SpeechRecognition.stopListening} className="btn">
              Stop Listening
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// apna website brower ko support kar raha hai ki nai vo browserSupportsSpeechRecognition isse pata chalega
