import styles from './styles/AutoWrite.module.scss'
import { useEffect } from 'react'

export default function AutoWrite() {

	const textArray = [
		'Front-end',
		'Back-end',
		'UI/UX',
	]

  let textArrayIndex = 0;
  let charIndex = 0;

  function Write() {
    const typedTextSpan = document.getElementById("typed-text")
    const cursorSpan = document.getElementById("cursor")
    if(!typedTextSpan) return null
    if(!cursorSpan) return null
    if(charIndex < textArray[textArrayIndex].length){
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(Write, 100);
    }else{
      setTimeout(Erase, 1500);
    }
  }

  function Erase(){
    const typedTextSpan = document.getElementById("typed-text")
    const cursorSpan = document.getElementById("cursor")
    if(!typedTextSpan) return null
    if(!cursorSpan) return null
     if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(Erase, 250);
    } 
    else {
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(Write, 1500);
    }
  }

	useEffect(() => {
    setTimeout(Write, 1000)
	}, [])

	return (
		<>
  		<h1 className={styles.title}>Sou desenvolvedor <br/><span id={'typed-text'}></span>
  		<span id={'cursor'} className={styles.cursor}>&nbsp;</span></h1>
		</>
		)
}