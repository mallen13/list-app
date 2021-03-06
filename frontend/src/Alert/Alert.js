import styles from './Alert.module.css'

const Alert = ({display,setDisplay,message,focusRef}) => {

  const handleClick = () => {
    setDisplay({display: 'none', message: ''}); 
    focusRef.current.focus();
  }

  return (
    <div className={styles.alertOverlay} style={{display: display}} onClick={handleClick}>
      <div className={styles.alert}>
        {/* Head */}
        <div className={styles.alertHead}>
            <h3>Alert</h3>
            <button aria-label='exit button' onClick={handleClick}>x</button>
        </div>

        {/* Body */}
        <p>{message}</p>
        
        {/* Footer/ Close Button */}
        <div className={styles.alertFooter}>
          <button onClick={handleClick}>Okay</button>
        </div>
      </div>
    </div>
    
  )
}

export default Alert;