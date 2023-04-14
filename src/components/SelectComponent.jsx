import style from "./PopupComponent.module.css"
function SelectComponent({listForSelecting,setSelectedValue}){
    
    return(
        <div >
            <select className={style.input} onChange={(e)=>{setSelectedValue(e.target.value)}}>
               {listForSelecting.map((data,index)=>(
                <option key={index} value={data.value} >{data.label}</option>
               ))}
            </select>
        </div>
    )
}

export default SelectComponent