import countrylist from '../world.json'
export default function SelectCountry({selectorname,handleBlur,handleChange, val}) {

    return (
    <div>
        <select className='formInput' name={selectorname} onBlur={handleBlur} onChange={handleChange} value={val}>
            {countrylist.map((country)=>{
              return <option className="select-option" value={country.name}>{country.name ? country.name : "Select a Country"}</option>    
            })}
        </select>
    </div>
  )
}
