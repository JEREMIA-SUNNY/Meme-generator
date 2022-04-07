import React from "react"

export default function Box(props) {
    
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    function toggle() {
      
    }
    
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}