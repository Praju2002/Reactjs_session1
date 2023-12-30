import React, { useState } from "react";
import PropTypes from "prop-types";
let sn = 0;

const ClickText = (props) => {
    const [name, setName] = useState("");
    const [newnames, setNewnames] = useState([]);
    const additem = () => {
        setNewnames([...newnames, { id: sn++, name: name }])
    }
    console.log(name)
    console.log(newnames)

    return (
        <div>
            <input type="text" value={name} placeholder="enter text" onChange={(e) => setName(e.target.value)} />
            <button onClick={additem}>add</button>
            <ul>
                {
                    newnames.map(newname => (
                        <li key={newname.id}>
                            {newname.name}
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default ClickText;