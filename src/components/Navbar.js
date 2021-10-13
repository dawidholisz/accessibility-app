import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition, } from 'react-speech-recognition'
import { Link, useHistory } from 'react-router-dom'
import { useContrast } from 'contexts/ContastContext'

const Navbar = () => {
  const {toggleContrastMode} = useContrast()

  const startListening = () => SpeechRecognition.startListening({ continuous: true})
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
    {
      command: ['run ivan run'],
      isFuzzyMatch: true,
      callback: () => alert('Sam sie posuń')
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
      <button className="contrast-btn" onClick={toggleContrastMode}>Switch mode</button>
      {listening && <div className="blink listening-indicator"/>}
    </nav>
      {transcript && <div className="transcript">{transcript}</div>}
    </>
  )
}

export default Navbar
