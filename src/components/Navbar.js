import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition, } from 'react-speech-recognition'
import { Link, useHistory } from 'react-router-dom'

const Navbar = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true })
  const stopListening = () => SpeechRecognition.stopListening()

  const history = useHistory()

  const commands = [
    {
      command: ['Go back'],
      callback: () => history.goBack(),
    },
    {
      command: ['Go home'],
      callback: () => history.push('/'),
    },
  ]
  const { transcript, browserSupportsSpeechRecognition, listening, isMicrophoneAvailable } = useSpeechRecognition({
    commands,
  })

  useEffect(() => {
    if (isMicrophoneAvailable && browserSupportsSpeechRecognition)
      startListening()
    return stopListening
  }, [isMicrophoneAvailable, browserSupportsSpeechRecognition])


  return (
    <>
    <nav className="navbar">
      <h1 className="navbar__app-name">A11y App</h1>
      <Link className="navbar__link" to="/">Home</Link>
      {listening && <div className="blink listening-indicator"/>}
    </nav>
      {transcript && <div className="transcript">{transcript}</div>}
    </>
  )
}

export default Navbar
