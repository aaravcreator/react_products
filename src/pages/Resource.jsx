import React, { useState } from 'react';

const ResourceForm = () => {

    const [party,setParty] =useState([{
        id:1,
        name:"Simran Thapa",
        age:22,
        occupation:"Software Engineer",
        balance:-300,

    },
    {
        id:2,
        name:"Hari Sharma",
        age:22,
        occupation:"Hardware Engineer",
        balance:-200,

    }
,
{
    id:1,
    name:"Kiran Lama",
    age:22,
    occupation:"Rsouc Engineer",
    balance:-100,

}])
    const [partydropdown,setPartyDropdown] =useState(false)
    const [formData, setFormData] = useState({
        bill_no: "",
        date: "",
        type: "",
        party: "",
        items: [],
        remarks: "",
        total_amount: "",
        paid_amount: "",
        business: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
    };

    return (
       
        <form onSubmit={handleSubmit}>
             {JSON.stringify(formData)}
            <div>
                <label>Bill No:</label>
                <input type="text" name="bill_no" value={formData.bill_no} onChange={handleChange} />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />
            </div>
            <div style={{
                position: 'relative'

            }}>
                {partydropdown}
                <label>Party:</label>
                <input type="text" name="party" onFocus={(e)=>{
                    setPartyDropdown(true)
                }} value={formData.party} onChange={handleChange} />
                <div style={{
                    backgroundColor:"#b2bafa",
                    display:partydropdown? "block" : "none",
                    position:'absolute',
                    top:"50px",
                    left:"80px",
                    padding:"20px",
                    borderRadius:"10px"
                }}>

                    {party.map((part)=>{
                        return(<div style={{
                            // backgroundColor:"white",
                            color:"white",
                            
                        }} onClick={()=>{
                            setFormData({...formData,party:part.name})
                            setPartyDropdown(false)
                        }} key={part.id}>{part.name}</div>)
                    })}
                </div>
            </div>
            <div>
                <label>Items:</label>
                <textarea name="items" value={formData.items} onChange={handleChange} />
            </div>
            <div>
                <label>Remarks:</label>
                <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} />
            </div>
            <div>
                <label>Total Amount:</label>
                <input type="number" name="total_amount" value={formData.total_amount} onChange={handleChange} />
            </div>
            <div>
                <label>Paid Amount:</label>
                <input type="number" name="paid_amount" value={formData.paid_amount} onChange={handleChange} />
            </div>
            <div>
                <label>Business:</label>
                <input type="text" name="business" value={formData.business} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ResourceForm;
