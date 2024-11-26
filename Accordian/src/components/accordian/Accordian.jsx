import { useState } from "react";
import data from './data'
import styles from './Accordian.module.css'
const Accordian = () => {

    const [selected, setselected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {
        setselected (getCurrentId === selected ? null : getCurrentId)

    }
    return (
      <>
        <div className={styles.heading}>
        <h1>Accordian</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.accordian}>
            {data && data.length > 0 ? (
              data.map((dataItem, index) => (
                <div className={styles.item} key={index}>
                  <div onClick={()=>handleSingleSelection(dataItem.id)} className={styles.title}>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    selected === dataItem.id ? 
                    <div className={styles.content}>{dataItem.answer}</div>
                    : null
                  }
                </div>
              ))
            ) : (
              <div>No data found</div>
            )}
          </div>
        </div>
        </>
      );
    }      

export default Accordian;